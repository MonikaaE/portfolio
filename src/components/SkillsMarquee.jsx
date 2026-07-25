import React from 'react';

export default function SkillsMarquee() {
  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track animate-marquee">
        <span className="marquee-item">FULL STACK DEVELOPER <span className="bullet-accent">●</span></span>
        <span className="marquee-item">REACT • NODE.JS <span className="bullet-accent">●</span></span>
        <span className="marquee-item">MONGODB <span class="bullet-accent">●</span></span>
        <span className="marquee-item">PROBLEM SOLVER <span className="bullet-accent">●</span></span>
        <span className="marquee-item">API ARCHITECT <span className="bullet-accent">●</span></span>
        
        {/* Duplicate for smooth infinite looping */}
        <span className="marquee-item">FULL STACK DEVELOPER <span className="bullet-accent">●</span></span>
        <span className="marquee-item">REACT • NODE.JS <span className="bullet-accent">●</span></span>
        <span className="marquee-item">MONGODB <span className="bullet-accent">●</span></span>
        <span className="marquee-item">PROBLEM SOLVER <span className="bullet-accent">●</span></span>
        <span className="marquee-item">API ARCHITECT <span className="bullet-accent">●</span></span>
      </div>
    </section>
  );
}
