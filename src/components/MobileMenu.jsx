import React from 'react';

export default function MobileMenu({ isOpen, activeSection, scrollToSection }) {
  return (
    <div
      id="mobile-menu-overlay"
      className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu-inner">
        <nav className="mobile-nav-links">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="mobile-nav-num">01</span>
            <span>ABOUT</span>
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#work');
            }}
            className={`mobile-nav-link ${activeSection === 'work' ? 'active' : ''}`}
          >
            <span className="mobile-nav-num">02</span>
            <span>WORK</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            <span className="mobile-nav-num">03</span>
            <span>CONTACT</span>
          </a>
        </nav>

        <div className="mobile-menu-footer">
          <a href="mailto:monika031215@gmail.com" className="mobile-nav-email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            monika031215@gmail.com
          </a>

          <div className="mobile-social-row">
            <a
              href="https://github.com/MonikaaE"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="mobile-social-btn"
            >
              GitHub
            </a>
            <span className="mobile-social-dot">•</span>
            <a
              href="https://www.linkedin.com/in/monika-elango"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mobile-social-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
