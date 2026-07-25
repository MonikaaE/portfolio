import React, { useEffect } from 'react';

export default function ResumeModal({ isOpen, closeModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  const handlePrint = () => {
    window.print();
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'resume-modal') {
      closeModal();
    }
  };

  return (
    <div
      id="resume-modal"
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-card">
        {/* Modal Controls Header */}
        <div className="modal-controls">
          <button id="modal-print-btn" className="modal-control-btn" onClick={handlePrint} aria-label="Print Resume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Print CV</span>
          </button>
          <button
            id="modal-close-btn"
            className="modal-control-btn close-action"
            onClick={closeModal}
            aria-label="Close Resume Modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>Close</span>
          </button>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet" id="printable-resume-area">
          <div className="resume-header">
            <div>
              <h1 className="resume-name">MONIKA ELANGO</h1>
              <p className="resume-title">Full Stack Developer</p>
            </div>
            <div className="resume-contact-info">
              <p>📍 Chennai, Tamil Nadu, India</p>
              <p>📧 <a href="mailto:monika031215@gmail.com">monika031215@gmail.com</a></p>
              <p>📞 +91 8754220977</p>
              <p>🔗 <a href="https://linkedin.com/in/monika-elango" target="_blank" rel="noreferrer">linkedin.com/in/monika-elango</a></p>
              <p>💻 <a href="https://github.com/MonikaaE" target="_blank" rel="noreferrer">github.com/MonikaaE</a></p>
            </div>
          </div>

          <div className="resume-divider"></div>

          <div className="resume-section">
            <h2 className="resume-section-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-text">
              Results-driven and detail-oriented Full Stack Developer with practical experience in building and optimizing web applications. Proven ability to design scalable REST APIs in Node.js, create responsive components in React, and architect database schemas. Skilled at translating complex business requirements into high-performance technical solutions that reduce manual work and drive operational efficiency.
            </p>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">EXPERIENCE</h2>

            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">Full Stack Developer</span> — <span className="resume-item-org">Builder Pluss</span>
                </div>
                <span className="resume-item-dates">2025 – Present</span>
              </div>
              <ul className="resume-bullets">
                <li>Leading the development and modular expansion of production web components and scalable layouts.</li>
                <li>Designed and launched dynamic, high-performance RESTful APIs that serve core business workflows.</li>
                <li>Lifted overall operational workflow efficiency by 50% through automated backend script processes.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">Full Stack Developer Intern</span> — <span className="resume-item-org">Builder Pluss</span>
                </div>
                <span className="resume-item-dates">2024</span>
              </div>
              <ul className="resume-bullets">
                <li>Built and verified interactive client-facing dashboards using React and Material UI components.</li>
                <li>Created server-side functions and automated jobs utilizing Node.js, Express, and MongoDB.</li>
                <li>Contributed to an internal automation project which reduced manual data operations by 60%.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">Frontend Developer Intern</span> — <span className="resume-item-org">KnackForge</span>
                </div>
                <span className="resume-item-dates">2024</span>
              </div>
              <ul className="resume-bullets">
                <li>Designed and shipped a responsive, mobile-first weather application leveraging React and CSS3 styles.</li>
                <li>Integrated real-time meteorological JSON payloads via RapidAPI endpoints.</li>
                <li>Developed adaptive user interface states driven dynamically by real-time weather alerts and conditions.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">EDUCATION</h2>
            <div className="resume-item">
              <div className="resume-item-header">
                <div>
                  <span className="resume-item-title">B.E. Computer Science and Engineering (Honors)</span>
                </div>
                <span className="resume-item-dates">2021 – 2025</span>
              </div>
              <div className="resume-item-subheader">Anna University, Chennai</div>
              <ul className="resume-bullets">
                <li>Academic standing: Department Rank 4th with a CGPA of 8.69.</li>
                <li>Extracurriculars: Two-time participant in the GUVI Hackathons, solving algorithm puzzles under tight timelines.</li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-grid">
              <div className="resume-skill-cat"><strong>Frontend:</strong> React, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Material UI</div>
              <div className="resume-skill-cat"><strong>Backend:</strong> Node.js, Express, REST APIs, JSON Web Tokens (JWT)</div>
              <div className="resume-skill-cat"><strong>Databases:</strong> MongoDB, MySQL, Mongoose, schema design</div>
              <div className="resume-skill-cat"><strong>Tools &amp; Services:</strong> AWS S3, RAG (Retrieval-Augmented Generation), Git, GitHub, RapidAPI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
