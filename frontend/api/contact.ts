import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedServices = [
  "Security Services",
  "Cleaning & Housekeeping",
  "Cash Transport",
  "Transport Operations",
  "Logistics Support",
  "Solid Waste Management",
  "Other Inquiry",
];

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const name = cleanValue(req.body.name);
    const phone = cleanValue(req.body.phone);
    const email = cleanValue(req.body.email);
    const service = cleanValue(req.body.service);
    const message = cleanValue(req.body.message);

    if (!name || !phone || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!allowedServices.includes(service)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid service.",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters.",
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; color: #07101d; line-height: 1.6;">
        <h2>New Website Inquiry - Octagon Force</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: process.env.MAIL_FROM || "Octagon Force Website <onboarding@resend.dev>",
      to: process.env.MAIL_TO || "info@octagonforce.lk",
      replyTo: email,
      subject: `New Website Inquiry - ${service}`,
      html: emailHtml,
      text: `
New Website Inquiry - Octagon Force

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Email could not be sent. Please try again later.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}