import React, { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    efficiency: 0,
    cgpa: 0,
    roles: 0,
    rank: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate statistics
          const duration = 1400; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              efficiency: Math.floor(easeOut * 50),
              cgpa: +(easeOut * 8.69).toFixed(2),
              roles: Math.floor(easeOut * 3),
              rank: Math.floor(easeOut * 4),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                efficiency: 50,
                cgpa: 8.69,
                roles: 3,
                rank: 4,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="about" ref={sectionRef} className="about-section scroll-offset">
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
            <div
              className="stat-card interactive-card"
              onMouseMove={handleCardMouseMove}
              data-cursor-text="IMPACT"
            >
              <div className="card-spotlight-layer" aria-hidden="true" />
              <div className="stat-num">{counts.efficiency}%</div>
              <div className="stat-label">Efficiency lifted in production workflows</div>
            </div>

            <div
              className="stat-card interactive-card"
              onMouseMove={handleCardMouseMove}
              data-cursor-text="ACADEMIC"
            >
              <div className="card-spotlight-layer" aria-hidden="true" />
              <div className="stat-num">{counts.cgpa}</div>
              <div className="stat-label">CGPA — B.E CS (Honors), Anna University</div>
            </div>

            <div
              className="stat-card interactive-card"
              onMouseMove={handleCardMouseMove}
              data-cursor-text="ROLES"
            >
              <div className="card-spotlight-layer" aria-hidden="true" />
              <div className="stat-num">{counts.roles}+</div>
              <div className="stat-label">Full stack roles across Builder Pluss &amp; KnackForge</div>
            </div>

            <div
              className="stat-card interactive-card"
              onMouseMove={handleCardMouseMove}
              data-cursor-text="RANK 4"
            >
              <div className="card-spotlight-layer" aria-hidden="true" />
              <div className="stat-num">{counts.rank}th</div>
              <div className="stat-label">Rank in Computer Science department</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
