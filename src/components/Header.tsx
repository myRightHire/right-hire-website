import { useState } from "react";
import logoImage from "../imports/right-hire-logo-transparent.png";

const navItems = [
  { href: "#focus", label: "Focus" },
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#difference", label: "Why Right Hire" },
  { href: "#open-roles", label: "Open Roles" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Right Hire home">
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
          href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
        >
          Request Brief
        </a>

        <button
          className="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen ? (
        <div className="mobile-menu">
          <div className="container mobile-menu-shell">
            <nav className="mobile-nav" aria-label="Mobile primary">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
              <a
                className="button button-primary mobile-menu-cta"
                href="mailto:c@myrighthire.com?subject=Right%20Hire%20Demo%20Request"
                onClick={closeMenu}
              >
                Request Brief
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
