import React from 'react';

export default function Hero({ scrollToSection }) {
  return (
    <section className="hero-section" >
      <div className="hero-content" >
        <p className="hero-sub">HELLO! I'M</p>
        <h1 className="hero-title">MONIKA E</h1>
        <p className="hero-desc">
          A results-driven Full Stack Developer from Chennai, building and scaling production-ready web applications with React, Node.js and MongoDB.
        </p>
      </div>

      <div className="hero-avatar-container">
        <div className="avatar-float-wrapper animate-floaty">
          <div className="avatar-glow-shadow"></div>
          <img src="/avatar.jpeg" alt="Monika's avatar" className="avatar-img" width="1024" height="1280" />
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        onClick={() => scrollToSection('#about')}
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
