import React from 'react';

export default function Journey() {
  const timelineData = [
    {
      year: '2025',
      role: 'Full Stack Developer',
      company: 'Builder Pluss • Chennai',
      content: 'Leading development of scalable production web modules — improved workflow efficiency by 50% and shipped dynamic REST APIs powering core business operations.',
      inverted: false,
    },
    {
      year: '2024',
      role: 'Full Stack Developer Intern',
      company: 'Builder Pluss • Chennai',
      content: 'Built dynamic React + Material UI components and Node.js/MongoDB services for an automation product, cutting manual tasks by 60%.',
      inverted: true,
    },
    {
      year: '2024',
      role: 'Frontend Developer Intern',
      company: 'KnackForge • Chennai',
      content: 'Shipped a responsive React weather app with real-time RapidAPI data and dynamic weather-driven UI states.',
      inverted: false,
    },
    {
      year: '2021–25',
      role: 'B.E Computer Science (Honors)',
      company: 'Anna University • CGPA 8.69',
      content: '4th rank in Computer Science department. Two-time GUVI Hackathon participant sharpening problem-solving fundamentals.',
      inverted: true,
    },
  ];

  return (
    <section className="journey-section">
      <div className="max-width-timeline-container">
        <div className="journey-header">
          <p className="section-label">JOURNEY</p>
          <h2 className="section-heading">
            Experience &amp; <span className="accent-text">education.</span>
          </h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>

          <div className="timeline-list">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item ${item.inverted ? 'timeline-inverted' : ''}`}
              >
                <div className="timeline-meta">
                  <div className="timeline-year text-accent">{item.year}</div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                </div>
                <div className="timeline-node-container">
                  <span className="timeline-node"></span>
                </div>
                <div className="timeline-content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
