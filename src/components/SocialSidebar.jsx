import React from 'react';

export default function SocialSidebar() {
  return (
    <div className="sidebar-socials">
      <a
        href="https://github.com/MonikaaE"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="social-icon-link"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
          <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.7 18.3.5 12 .5z"></path>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/monika-elango"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="social-icon-link"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zM19 19h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V19h-3V9h2.9v1.4h.1a3.2 3.2 0 012.9-1.6c3.1 0 3.7 2 3.7 4.7V19z"></path>
        </svg>
      </a>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label="X"
        className="social-icon-link"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
          <path d="M18.244 2H21l-6.52 7.454L22 22h-6.828l-5.35-6.99L3.5 22H1l7-8L1.5 2h6.914l4.84 6.4L18.244 2zm-1.2 18h1.885L7.033 4H5.02l12.023 16z"></path>
        </svg>
      </a>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        aria-label="Instagram"
        className="social-icon-link"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
          <rect x="2" y="2" width="20" height="20" rx="5"></rect>
          <path d="M16 11.4A4 4 0 1112.6 8 4 4 0 0116 11.4z"></path>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
        </svg>
      </a>
    </div>
  );
}
