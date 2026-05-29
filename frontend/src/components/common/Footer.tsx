import { Facebook, Instagram, ShieldCheck, Youtube } from "lucide-react";
import { footerColumns } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand brand--light">
            <span className="brand-mark">
              <ShieldCheck size={21} />
            </span>
            <span>octagon force</span>
          </a>
          <p>Smart security portfolio website for modern homes and businesses.</p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="footer-column">
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href="#home" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-column">
          <h3>Social</h3>
          <div className="social-grid">
            <a href="#home" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#home" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#home" aria-label="YouTube">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Octagon Force All rights reserved.</p>
        <span>Terms and Conditions · Privacy Policy</span>
      </div>
    </footer>
  );
}
