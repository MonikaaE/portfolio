import React from 'react';

export default function Navbar({ activeSection, isMobileMenuOpen, toggleMobileMenu, scrollToSection }) {
  return (
    <header className="navbar-header">
      <a onClick={(e) => { e.preventDefault(); scrollToSection('#'); }} className="logo-link">
        ME<span className="accent-dot">.</span>
      </a>
      
      <a href="mailto:monika031215@gmail.com" className="header-email-btn">
        monika031215@gmail.com
      </a>

      <nav className="nav-menu">
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          ABOUT
        </a>
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#work'); }}
          className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
        >
          WORK
        </a>
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          CONTACT
        </a>
      </nav>

      <button
        id="mobile-menu-toggle"
        className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle Navigation Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}
