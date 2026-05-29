import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  {
    label: "Security Services",
    path: "/services/security",
  },
  {
    label: "Cleaning & Housekeeping",
    path: "/services/cleaning-housekeeping",
  },
  {
    label: "Cash Transport",
    path: "/services/cash-transport",
  },
  {
    label: "Transport Operations",
    path: "/services/transport",
  },
  {
    label: "Logistics Support",
    path: "/services/logistics",
  },
  {
    label: "Solid Waste Management",
    path: "/services/solid-waste-management",
  },
];

export default function ServicePillMarquee() {
  const location = useLocation();

  const marqueeItems = [...serviceLinks, ...serviceLinks, ...serviceLinks];

  return (
    <section className="service-pill-marquee-section" aria-label="Service links">
      <div className="container service-pill-marquee-shell">
        <div className="service-pill-marquee-window">
          <div className="service-pill-marquee-track">
            {marqueeItems.map((service, index) => {
              const isActive = location.pathname === service.path;

              return (
                <Link
                  key={`${service.label}-${index}`}
                  to={service.path}
                  className={`service-pill-marquee-item ${
                    isActive ? "is-active" : ""
                  }`}
                >
                  {service.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}