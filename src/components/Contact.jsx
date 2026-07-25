import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="contact-section scroll-offset">
      <div className="contact-card max-width-container">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="contact-title">
          Let's build<br />
          <span className="accent-text">something great.</span>
        </h2>
        <p className="contact-desc">
          Open to full-time roles, freelance projects, and collaborations in full-stack web development.
        </p>

        <div className="contact-buttons-container">
          <a href="mailto:monika031215@gmail.com" className="btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="btn-icon"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            monika031215@gmail.com
          </a>
          <a href="tel:+918754220977" className="btn-secondary">
            +91 8754220977
          </a>
        </div>
      </div>
    </section>
  );
}
