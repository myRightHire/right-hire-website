import { useState } from "react";
import logoImage from "../imports/right-hire-logo-transparent.png";

const navItems = [
  { href: "/#engagement-models", label: "Engagement Models" },
  { href: "/#difference", label: "Why Right Hire" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="v2-skip" href="#main-content">Skip to content</a>
      <div className="container nav-shell">
        <a className="brand" href="/#top" onClick={closeMenu} aria-label="Right Hire home">
          <img className="brand-logo" src={logoImage} alt="Right Hire" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav-cta button-primary"
          href="mailto:c@myrighthire.com?subject=Discuss%20a%20search"
        >
          Discuss a search
        </a>

        <button
          className="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-menu" id="mobile-navigation" onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}>
          <div className="container mobile-menu-shell">
            <nav className="mobile-nav" aria-label="Mobile primary">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <a
                className="button button-primary mobile-menu-cta"
                href="mailto:c@myrighthire.com?subject=Discuss%20a%20search"
                onClick={closeMenu}
              >
                Discuss a search
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
