import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section scroll-offset">
      <div className="about-grid max-width-container">
        <div className="about-header-column">
          <p className="section-label">ABOUT ME</p>
          <h2 className="section-heading">
            Full Stack Developer<br />
            crafting <span className="accent-text">real products.</span>
          </h2>
        </div>

        <div className="about-body-column">
          <p>
            I'm Monika Elango — a Full Stack Developer based in Chennai, currently building scalable production modules at Builder Pluss. I studied Computer Science (Honors) at Anna University, graduating with a CGPA of 8.69 and ranking 4th in my department.
          </p>
          <p>
            I love the whole loop of shipping software: designing REST APIs in Node.js, wiring them into React interfaces with Material UI or Tailwind, and modeling the data in MongoDB or MySQL. My internships taught me how to translate business requirements into technical solutions that measurably move numbers — reducing manual work by 60% and lifting workflow efficiency by 50%.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">50%</div>
              <div className="stat-label">Efficiency lifted in production workflows</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">8.69</div>
              <div className="stat-label">CGPA — B.E CS (Honors), Anna University</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">3+</div>
              <div className="stat-label">Full stack roles across Builder Pluss &amp; KnackForge</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">4th</div>
              <div className="stat-label">Rank in Computer Science department</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
