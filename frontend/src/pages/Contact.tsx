import { type FormEvent, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import { images } from "../data/imageAssets";

const branches = [
  {
    id: "grandpass",
    name: "Grandpass Head Office",
    type: "Head Office",
    address: "445/1 Sirimavo Bandaranayaka Mawatha, Colombo 14",
    phones: ["+94 11 242 1294", "+94 11 234 4444", "+94 77 766 0021"],
     mapUrl: "https://maps.app.goo.gl/Nw17Q4kt9Z8kUKok9",
  mapEmbed:
    "https://www.google.com/maps?q=445%2F1%20Sirimavo%20Bandaranayaka%20Mw%2C%20Colombo-14&output=embed",
  },
  {
    id: "kandy",
    name: "Kandy Branch",
    type: "Branch Office",
    address: "Polgahamula Junction, Peradeniya",
    phones: ["+94 11 369 0209"],
  },
  {
    id: "galle",
    name: "Galle Branch",
    type: "Branch Office",
    address: "Arachchigewaththa, Mihirithanna, Thalpe, Galle",
    phones: ["+94 91 225 0100"],
  },
];

const contactStats = [
  {
    icon: Building2,
    value: "03",
    label: "Branch Locations",
  },
  {
    icon: PhoneCall,
    value: "05",
    label: "Telephone Lines",
  },
  {
    icon: Mail,
    value: "01",
    label: "General Email",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Inquiry Support",
  },
];

export default function Contact() {
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const activeBranch = useMemo(() => {
    return branches.find((branch) => branch.id === activeBranchId) ?? branches[0];
  }, [activeBranchId]);

  const mapSrc = activeBranch.mapEmbed;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormStatus("success");

    window.setTimeout(() => {
      setFormStatus("idle");
    }, 4200);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__image">
          <motion.img
            src={images.contact.hero}
            alt="Octagon Force contact and service coordination"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="contact-hero__bg" />

        <div className="container contact-hero__content">
          <motion.div
            className="contact-hero__copy"
            initial={{ opacity: 0, y: 46, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Contact Octagon Force
            </span>

            <h1>Let’s Discuss Your Security & Service Requirements.</h1>

            <p>
              Reach Octagon Force for security, facility support, cleaning,
              logistics, transport and operational deployment inquiries across
              Sri Lanka.
            </p>

            <div className="contact-hero__actions">
              <a href="#contact-inquiry" className="contact-hero__button">
                Send Inquiry
                <ArrowRight />
              </a>

              <a href="mailto:info@octagonforce.lk" className="contact-hero__secondary">
                info@octagonforce.lk
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-hero__info-card"
            initial={{ opacity: 0, y: 34, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="contact-hero__info-icon">
              <PhoneCall />
            </div>

            <span>Head Office Hotline</span>
            <strong>+94 11 242 1294</strong>
            <p>Grandpass Head Office, Colombo-14</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="container">
          <motion.div
            className="contact-details-header"
            initial={{ opacity: 0, y: 38, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              <span />
              Company Details
            </span>

            <h2>Multiple Contact Points For Faster Coordination.</h2>

            <p>
              Contact our head office or nearest branch to discuss service
              requirements, deployment support, quotations  or operational
              assistance.
            </p>
          </motion.div>

          <div className="contact-stats-grid">
            {contactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.article
                  key={stat.label}
                  className="contact-stat-card"
                  initial={{
                    opacity: 0,
                    y: 42,
                    scale: 0.92,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="contact-stat-card__icon">
                    <Icon />
                  </div>

                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.article>
              );
            })}
          </div>

          <div className="contact-branches-grid">
            {branches.map((branch, index) => (
              <motion.article
                key={branch.id}
                className={`contact-branch-card ${
                  activeBranchId === branch.id ? "is-active" : ""
                }`}
                initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.78,
                  delay: index * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveBranchId(branch.id)}
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setActiveBranchId(branch.id);
                  }
                }}
              >
                <div className="contact-branch-card__top">
                  <span>{branch.type}</span>
                  <MapPin />
                </div>

                <h3>{branch.name}</h3>

                <p>{branch.address}</p>

                <div className="contact-branch-card__phones">
                  {branch.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                      <PhoneCall />
                      {phone}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-inquiry-section" id="contact-inquiry">
        <div className="container contact-inquiry-shell">
          <motion.div
            className="contact-inquiry-copy"
            initial={{ opacity: 0, x: -46, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow--light">
              <span />
              Inquiry Form
            </span>

            <h2>Send Your Requirement To Our Team.</h2>

            <p>
              Share your service requirement, location  and contact information.
              Our team can review your inquiry and coordinate the next step.
            </p>

            <div className="contact-inquiry-copy__list">
              <div>
                <Clock3 />
                <span>Fast inquiry review</span>
              </div>

              <div>
                <CheckCircle2 />
                <span>Suitable service recommendation</span>
              </div>

              <div>
                <Headphones />
                <span>Branch-level coordination</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 46, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="contact-form__grid">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>

              <label>
                Phone Number
                <input type="tel" name="phone" placeholder="Enter Phone number" required />
              </label>
            </div>

            <label>
              Email Address
              <input type="email" name="email" placeholder="Email Adress" required />
            </label>

            <label>
              Service Requirement
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Security Services</option>
                <option>Cleaning & Housekeeping</option>
                <option>Cash Transport</option>
                <option>Transport Operations</option>
                <option>Logistics Support</option>
                <option>Solid Waste Management</option>
                <option>Other Inquiry</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your requirement, site location, expected service or deployment needs"
                required
              />
            </label>

            <button type="submit">
              Send Message
              <Send />
            </button>

            {formStatus === "success" && (
              <div className="contact-form__status">
                <CheckCircle2 />
                Your inquiry has been prepared successfully. Backend submission
                can be connected later.
              </div>
            )}
          </motion.form>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="container contact-map-shell">
          <motion.div
            className="contact-map-info"
            initial={{ opacity: 0, y: 38, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              <span />
              Company Location
            </span>

            <h2>{activeBranch.name}</h2>

            <p>{activeBranch.address}</p>

            <div className="contact-map-info__phones">
              {activeBranch.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`}>
                  <PhoneCall />
                  {phone}
                </a>
              ))}
            </div>

            <a
               href={activeBranch.mapUrl}
               target="_blank"
               rel="noreferrer"
               className="contact-map-info__button"
            >
              Open In Google Maps
              <ArrowRight />
            </a>
          </motion.div>

          <motion.div
            className="contact-map-frame"
            initial={{ opacity: 0, y: 46, scale: 0.96, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <iframe
              title={`${activeBranch.name} map`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}