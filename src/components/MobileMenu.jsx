import React from 'react';

export default function MobileMenu({ isOpen, activeSection, scrollToSection }) {
  return (
    <div id="mobile-menu-overlay" className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
      <nav className="mobile-nav-links">
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}
          className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
        >
          ABOUT
        </a>
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#work'); }}
          className={`mobile-nav-link ${activeSection === 'work' ? 'active' : ''}`}
        >
          WORK
        </a>
        <a
          onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
          className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
        >
          CONTACT
        </a>
        <a href="mailto:monika031215@gmail.com" className="mobile-nav-email">
          monika031215@gmail.com
        </a>
      </nav>
    </div>
  );
}
