import { ArrowRight, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import type { ContactPayload } from "../../types";
import Reveal from "../common/Reveal";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";
const interests = ["Intrusion Detection", "Video Surveillance", "System Integration", "Monitoring", "Fire Detection", "Access Control", "Other"];

const initialForm: ContactPayload = {
  propertyType: "For Home",
  industry: "Commercial Buildings",
  systemSize: "Small (1-5 Locations)",
  ownership: "I'm Representing Occupant",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  interests: []
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateField = (field: keyof ContactPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest]
    }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "Unable to submit request.");
      }

      setStatus("success");
      setMessage("Your request was submitted successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">
                <span />
                FAQ
              </span>
              <h2>Let&apos;s Start Solving Your Problems</h2>
              <p>
                Use this form as the backend-connected lead form for your portfolio. The Express API stores the request and can send an email notification.
              </p>
              <div className="contact-phone">
                <span>
                  <Phone />
                </span>
                <div>
                  <small>CALL NOW:</small>
                  <strong>+(084) 123 - 456 88</strong>
                </div>
              </div>
            </div>

            <form className="request-form" onSubmit={submit}>
              <label>
                Home Or Business?
                <select value={form.propertyType} onChange={(event) => updateField("propertyType", event.target.value)}>
                  <option>For Home</option>
                  <option>For Business</option>
                  <option>For Apartment</option>
                </select>
              </label>

              <label>
                Industry:
                <select value={form.industry} onChange={(event) => updateField("industry", event.target.value)}>
                  <option>Commercial Buildings</option>
                  <option>Residential</option>
                  <option>Retail</option>
                  <option>Education</option>
                  <option>Industrial</option>
                </select>
              </label>

              <label>
                System Size:
                <select value={form.systemSize} onChange={(event) => updateField("systemSize", event.target.value)}>
                  <option>Small (1-5 Locations)</option>
                  <option>Medium (6-15 Locations)</option>
                  <option>Large (16+ Locations)</option>
                </select>
              </label>

              <label>
                Own Or Rent?
                <select value={form.ownership} onChange={(event) => updateField("ownership", event.target.value)}>
                  <option>I&apos;m Representing Occupant</option>
                  <option>I Own The Property</option>
                  <option>I Rent The Property</option>
                </select>
              </label>

              <label>
                First Name
                <input value={form.firstName} onChange={(event) => updateField("firstName", event.target.value)} placeholder="Name" required />
              </label>

              <label>
                Last Name
                <input value={form.lastName} onChange={(event) => updateField("lastName", event.target.value)} placeholder="Name" required />
              </label>

              <label>
                Email
                <input type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="Email" required />
              </label>

              <label>
                Phone Number
                <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="Phone Number" required />
              </label>

              <fieldset className="interest-fieldset">
                <legend>System Of Interest:</legend>
                {interests.map((interest) => (
                  <label key={interest} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={form.interests.includes(interest)}
                      onChange={() => toggleInterest(interest)}
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </fieldset>

              <button className="primary-button form-button" disabled={status === "loading"}>
                {status === "loading" ? "Submitting..." : "Submit Request"}
                <ArrowRight />
              </button>

              {message && <p className={`form-message form-message--${status}`}>{message}</p>}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
