import { MouseEvent, useEffect, useMemo, useState } from "react";
import { Menu, Search, ShieldCheck, ShoppingBag, UserRound, X } from "lucide-react";
import { motion } from "motion/react";
import { navItems } from "../../data/siteData";
import { useActiveSection } from "../../hooks/useActiveSection";
import { images } from "../../data/imageAssets";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    closeMenu();

    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <motion.nav
        className="nav-shell"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
       <a
        href="#home"
        className="brand brand-logo-link"
        aria-label="Company home"
        onClick={(event) => handleAnchorClick(event, "#home")}
      >
        <img src={images.brand.logo} alt="Company logo" className="nav-logo" />
       </a>

        <div className="desktop-links" aria-label="Main navigation">
          {navItems.map((item) => {
            const itemId = item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === itemId ? "active" : ""}
                onClick={(event) => handleAnchorClick(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="nav-actions">
          <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu__panel">
          <button className="icon-button mobile-menu__close" aria-label="Close menu" onClick={closeMenu}>
            <X />
          </button>
          <a
           href="#home"
           className="brand brand-logo-link"
           onClick={(event) => handleAnchorClick(event, "#home")}
          >
            <img src={images.brand.logo} alt="Company logo" className="nav-logo" />
          </a>
          <div className="mobile-menu__links">
            {navItems.map((item) => {
              const itemId = item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={activeSection === itemId ? "active" : ""}
                  onClick={(event) => handleAnchorClick(event, item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
