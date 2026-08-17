import { useEffect, useState, useRef, type CSSProperties } from "react";
import { ChevronDown, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images } from "../../data/imageAssets";

const serviceSubItems = [
  { label: "All Services", path: "/services" },
  { label: "Security Services", path: "/services/security" },
  { label: "Cleaning & Housekeeping", path: "/services/cleaning-housekeeping" },
  { label: "Cash Transport", path: "/services/cash-transport" },
  { label: "Transport Operations", path: "/services/transport" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuDismissed, setServicesMenuDismissed] = useState(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      if (currentScrollY <= 24) {
        setIsVisible(true);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      } else {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true);
          
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
          
          hideTimerRef.current = setTimeout(() => {
            if (window.scrollY > 24) {
              setIsVisible(false);
            }
          }, 3500); // 3.5 seconds
        }
      }
      
      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const closeServicesMenu = () => setServicesMenuDismissed(true);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""} ${!isVisible ? "site-header--hidden" : ""}`}>
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

          <div
            className={`nav-dropdown ${
              servicesMenuDismissed ? "nav-dropdown--dismissed" : ""
            }`}
            onMouseLeave={() => setServicesMenuDismissed(false)}
          >
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
                  onClick={closeServicesMenu}
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
      
        <motion.div 
        className="header-socials"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
          <Facebook size={18} />
        </a>
        <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
      </motion.div>
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
