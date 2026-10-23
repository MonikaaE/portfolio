import React from 'react';

export default function Hero({ scrollToSection }) {
  const handleAvatarMouseMove = (e) => {
    if (
      typeof window !== 'undefined' &&
      (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches)
    ) {
      return;
    }
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const img = card.querySelector('.avatar-img');
    if (img) {
      img.style.transform = `perspective(1000px) rotateY(${x * 0.06}deg) rotateX(${-y * 0.06}deg) scale3d(1.03, 1.03, 1.03)`;
    }
  };

  const handleAvatarMouseLeave = (e) => {
    const card = e.currentTarget;
    const img = card.querySelector('.avatar-img');
    if (img) {
      img.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Availability Badge */}
        <div className="hero-status-badge">
          <span className="status-ping">
            <span className="ping-wave"></span>
            <span className="ping-dot"></span>
          </span>
          <span>AVAILABLE FOR NEW ROLES • UAE &amp; REMOTE</span>
        </div>

        <p className="hero-sub">HELLO! I'M</p>
        <h1 className="hero-title">
          MONIKA <span className="accent-text">E</span>
        </h1>
        <p className="hero-desc">
          A results-driven Full Stack Developer crafting and scaling production-grade web applications with React, Node.js, and modern AI automation pipelines.
        </p>

        {/* Hero Quick Action Buttons */}
        <div className="hero-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollToSection('#work')}
            data-cursor-text="EXPLORE ↓"
 style={{
    fontSize: window.innerWidth <= 1100 ? "12px" : "16px",
  }}          >
            <span>View Projects</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => scrollToSection('#contact')}
            data-cursor-text="CONNECT ✉"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div
        className="hero-avatar-container"
        onMouseMove={handleAvatarMouseMove}
        onMouseLeave={handleAvatarMouseLeave}
        data-cursor-text="MONIKA 👋"
      >
        <div className="avatar-float-wrapper animate-floaty">
          <div className="avatar-glow-shadow"></div>
          <img
            src="/avatar.jpeg"
            alt="Monika's avatar"
            className="avatar-img"
            width="1024"
            height="1280"
          />
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('#about')}
        data-cursor-text="SCROLL ↓"
      >
        <span className="scroll-text">SCROLL</span>
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
          className="scroll-arrow"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
    </section>
  );
}
