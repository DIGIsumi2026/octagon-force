import { useEffect, useState, type CSSProperties } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images } from "../../data/imageAssets";

const serviceSubItems = [
  { label: "All Services", path: "/services" },
  { label: "Security Services", path: "/services/security" },
  { label: "Cleaning & Housekeeping", path: "/services/cleaning-housekeeping" },
  { label: "Cash Transport", path: "/services/cash-transport" },
  { label: "Transport Operations", path: "/services/transport" },
  { label: "Logistics Support", path: "/services" },
  { label: "Solid Waste Management", path: "/services" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <motion.nav
        className="nav-shell"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/"
          className="brand brand-logo-link"
          aria-label="Octagon Force home"
          onClick={closeMenu}
        >
          <img src={images.brand.logo} alt="Octagon Force logo" className="nav-logo" />
        </Link>

        <nav className="desktop-links" aria-label="Main navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>

          <div className="nav-dropdown">
            <NavLink
              to="/services"
              className={`nav-dropdown__trigger ${isServicesActive ? "active" : ""}`}
            >
              Services
              <ChevronDown />
            </NavLink>

            <div className="nav-dropdown__menu">
              {serviceSubItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  end={item.path === "/services"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {navItems.slice(2).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="menu-button"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <div
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <div
          className="mobile-menu__panel"
          onClick={(event) => event.stopPropagation()}
          style={
             {
               "--sidebar-bg": `url(${images.navigation.sidebarBg})`,
              } as CSSProperties
          }
          >
          <button
            className="icon-button mobile-menu__close"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <X />
          </button>

          <Link
            to="/"
            className="brand brand-logo-link"
            aria-label="Octagon Force home"
            onClick={closeMenu}
          >
            <img src={images.brand.logo} alt="Octagon Force logo" className="nav-logo" />
          </Link>

          <nav className="mobile-menu__links" aria-label="Mobile navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              About Us
            </NavLink>

            <div className="mobile-menu__service-group">
              <NavLink
                to="/services"
                className={isServicesActive ? "active" : ""}
                onClick={closeMenu}
              >
                Services
              </NavLink>

              <div className="mobile-menu__sub-links">
                {serviceSubItems.slice(1).map((item) => (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "mobile-sub-link active" : "mobile-sub-link"
                    }
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}