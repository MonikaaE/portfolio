import React from 'react';

export default function Navbar({ activeSection, isMobileMenuOpen, toggleMobileMenu, scrollToSection }) {
  return (
    <header className="navbar-header">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}
        className="logo-link"
        data-cursor-text="HOME"
      >
        ME<span className="accent-dot">.</span>
      </a>
      
      <a
        href="mailto:monika031215@gmail.com"
        className="header-email-btn"
        data-cursor-text="MAIL ✉"
      >
        monika031215@gmail.com
      </a>

      <nav className="nav-menu">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          data-cursor-text="ABOUT"
        >
          ABOUT
        </a>
        <a
          href="#work"
          onClick={(e) => { e.preventDefault(); scrollToSection('#work'); }}
          className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
          data-cursor-text="WORK"
        >
          WORK
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          data-cursor-text="CONTACT"
        >
          CONTACT
        </a>
      </nav>

      <button
        id="mobile-menu-toggle"
        className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Navigation Menu"
        data-cursor-text="MENU"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
