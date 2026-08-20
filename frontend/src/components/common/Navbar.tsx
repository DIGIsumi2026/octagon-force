import { useEffect, useState, useRef, type CSSProperties } from "react";
import { ChevronDown, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
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

const socialLinks = [
  {
    href: "https://www.facebook.com/share/18Vy6BGqUg/?mibextid=wwXIfr",
    label: "Facebook",
    icon: <Facebook size={18} />,
  },
  {
    href: "https://www.instagram.com/octagon_force_pvt?igsh=aHhteGFyaHZoOGVm",
    label: "Instagram",
    icon: <Instagram size={18} />,
  },
  {
    href: "https://www.linkedin.com/company/octagon-force/",
    label: "LinkedIn",
    icon: <Linkedin size={18} />,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuDismissed, setServicesMenuDismissed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 1024 : true
  );
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    if (menuOpen) {
      // Save the current scroll position before locking
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add("menu-open");
    } else {
      // Restore the scroll position after unlocking
      const scrollY = document.body.style.top;
      document.body.classList.remove("menu-open");
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo({ top: parseInt(scrollY || "0") * -1, behavior: "instant" });
      }
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.classList.remove("menu-open");
      document.body.style.top = "";
      if (scrollY) {
        window.scrollTo({ top: parseInt(scrollY || "0") * -1, behavior: "instant" });
      }
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

        {/* ── Scrolled state: social icons appear inside the pill ── */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              className="header-socials header-socials--inline"
              key="socials-inline"
              initial={{ opacity: 0, maxWidth: 0, marginLeft: 0 }}
              animate={{ opacity: 1, maxWidth: 160, marginLeft: 16 }}
              exit={{ opacity: 0, maxWidth: 0, marginLeft: 0 }}
              transition={{
                opacity:    { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
                maxWidth:   { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
                marginLeft: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
              }}
            >
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.5, y: 8 }}
                  animate={{ opacity: 1, scale: 1,   y: 0 }}
                  exit={{    opacity: 0, scale: 0.5, y: 8 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: [0.34, 1.56, 0.64, 1], /* gentle overshoot spring */
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Menu toggle button ── */}
        {/* Shows in default state on Desktop, but ALWAYS on Mobile */}
        <div className="nav-actions">
          <AnimatePresence mode="wait">
            {(!isScrolled || !isDesktop) ? (
              <motion.button
                key="menu-btn"
                className="menu-button"
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(true)}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{    opacity: 0, scale: 0.6 }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 22,
                  mass: 0.8,
                }}
              >
                <Menu size={28} />
              </motion.button>
            ) : (
              /* Keep a ghost so nav-actions doesn't collapse */
              <motion.div
                key="menu-ghost"
                className="menu-button-ghost"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{    opacity: 0 }}
              />
            )}
          </AnimatePresence>
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
