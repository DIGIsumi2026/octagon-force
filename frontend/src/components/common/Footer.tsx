import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import { images } from "../../data/imageAssets";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18Vy6BGqUg/?mibextid=wwXIfr",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/octagon_force_pvt?igsh=aHhteGFyaHZoOGVm",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/octagon-force/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Octagon Force home">
              <img
                src={images.brand.footerLogo}
                alt="Octagon Force logo"
                className="footer-logo"
              />
            </Link>

            <p>
              Professional security, cleaning, logistics, transport, and facility
              support solutions delivered with discipline and reliability.
            </p>

            <div className="footer-socials" aria-label="Social media links">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <nav className="footer-links" aria-label="Footer quick links">
              {quickLinks.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>

            <div className="footer-contact-list">
              <div>
                <MapPin />
                <span>
                  445/1 Sirimavo Bandaranayaka Mw, Colombo-14
                </span>
              </div>

              <a href="tel:+94112344444">
                <PhoneCall />
                <span>0112 344 444</span>
              </a>

              <a href="mailto:info@octagonforce.lk">
                <Mail />
                <span>info@octagonforce.lk</span>
              </a>
            </div>
          </div>

          <div className="footer-column footer-map-column">
            <h3>Google Map</h3>

            <div className="footer-map-preview">
              <iframe
                title="Octagon Force Grandpass Head Office map"
                src="https://www.google.com/maps?q=445%2F1%20Sirimavo%20Bandaranayaka%20Mw%2C%20Colombo-14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://maps.app.goo.gl/Nw17Q4kt9Z8kUKok9"
              target="_blank"
              rel="noreferrer"
              className="footer-map-link"
            >
              Open In Google Maps
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Octagon Force </p>
        </div>
      </div>
    </footer>
  );
}