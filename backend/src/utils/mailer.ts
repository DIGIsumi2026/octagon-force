import nodemailer from "nodemailer";
import type { ContactInput } from "../validators/contact.schema.js";

function hasSmtpConfig() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.MAIL_TO
  );
}

export async function sendLeadNotification(lead: ContactInput) {
  if (!hasSmtpConfig()) {
    console.warn("SMTP is not configured. Skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const interests = lead.interests.length ? lead.interests.join(", ") : "Not specified";

  await transporter.sendMail({
    from: process.env.MAIL_FROM ?? "OpenHome Portfolio <no-reply@example.com>",
    to: process.env.MAIL_TO,
    subject: `New portfolio lead from ${lead.firstName} ${lead.lastName}`,
    text: `
New security portfolio request

Name: ${lead.firstName} ${lead.lastName}
Email: ${lead.email}
Phone: ${lead.phone}
Property Type: ${lead.propertyType}
Industry: ${lead.industry}
System Size: ${lead.systemSize}
Ownership: ${lead.ownership}
Interests: ${interests}
    `.trim(),
    html: `
      <h2>New security portfolio request</h2>
      <p><strong>Name:</strong> ${lead.firstName} ${lead.lastName}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone}</p>
      <p><strong>Property Type:</strong> ${lead.propertyType}</p>
      <p><strong>Industry:</strong> ${lead.industry}</p>
      <p><strong>System Size:</strong> ${lead.systemSize}</p>
      <p><strong>Ownership:</strong> ${lead.ownership}</p>
      <p><strong>Interests:</strong> ${interests}</p>
    `
  });
}
