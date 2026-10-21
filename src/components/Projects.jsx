import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projectsData = [
    {
      num: '01',
      title: 'AutoApply Engine',
      category: 'AI',
      tag: 'Full Stack • AI Autopilot',
      desc: 'AutoApply Engine is an autonomous full-stack AI platform built with React, Express, TypeScript, Playwright, and Claude 3.5. It monitors live job postings, evaluates candidate ATS match scores (0–100), programmatically generates job-tailored PDF resumes, and automates job application submissions on autopilot.',
      tech: 'React, TypeScript, Node.js, Express, Claude 3.5, Playwright, Nodemailer',
      link: 'https://autojob-apply-gamma.vercel.app/',
      isLive: true,
      featured: true,
    },
    {
      num: '02',
      title: 'MailFlow — Bulk Email Sender for Recruiters',
      category: 'AUTOMATION',
      tag: 'Full Stack • Cold Outreach & Delivery',
      desc: 'A specialized cold-outreach & bulk email delivery platform enabling job candidates to compose personalized outreach emails, attach resumes, manage custom SMTP configurations, and broadcast targeted messages to recruiters with real-time delivery status tracking. Built and deployed a communication automation platform for bulk email campaigns, with WhatsApp automation implementation to streamline customer outreach and follow-ups through integrated workflows.',
      tech: 'React, SMTP / Nodemailer, Web APIs, Claude 3.5',
      link: 'https://bulk-mail-r5oh.onrender.com/',
      isLive: true,
      featured: true,
    },
    {
      num: '03',
      title: 'AI Job Application Assistant & Outreach Platform',
      category: 'AI',
      tag: 'Full Stack • Gemini AI',
      desc: 'An AI outreach platform that parses PDF resumes, evaluates candidate-job match percentages, and generates personalized application emails with a human-in-the-loop Safety Outbox before broadcasting to employers.',
      tech: 'React, TypeScript, Node.js, Express, Google Gemini AI, Nodemailer',
      link: 'https://auto-mail-roan.vercel.app/',
      isLive: true,
      featured: false,
    },
    {
      num: '04',
      title: 'Dynamic Showcase Platform',
      category: 'ENTERPRISE',
      tag: 'Full Stack • AI / RAG',
      desc: 'A full-stack platform for client-specific business presentations with AI-powered product recommendations using Retrieval-Augmented Generation, real-time template customization and Amazon S3 for secure file storage.',
      tech: 'React, Node.js, MongoDB, Material UI, AWS S3, RAG',
      link: '#',
      isLive: false,
      featured: false,
    },
    {
      num: '05',
      title: 'Automation Workflow Suite',
      category: 'ENTERPRISE',
      tag: 'Full Stack • Enterprise Automation',
      desc: 'Contributed to an internal production product automating repetitive business workflows for Builder Pluss — reduced manual operational workloads by 60% and shipped dynamic UI + API integrations end to end.',
      tech: 'React, Material UI, Node.js, MongoDB, REST APIs',
      link: '#',
      isLive: false,
      featured: false,
    },
  ];

  const categories = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'AI', label: 'AI & Machine Learning' },
    { id: 'AUTOMATION', label: 'Email & Automation' },
    { id: 'ENTERPRISE', label: 'Enterprise Systems' },
  ];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // 3D Card tilt effect on mouse move (desktop pointer only)
  const handleMouseMove = (e, index) => {
    if (
      typeof window !== 'undefined' &&
      (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches)
    ) {
      return;
    }
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section id="work" className="projects-section scroll-offset">
      <div className="max-width-container">
        <div className="projects-header">
          <div>
            <h2 className="section-heading">
              MY <span className="accent-text">WORK</span>
            </h2>
            <p className="section-sub-mono">/ SELECTED PRODUCTION &amp; AI PROJECTS</p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="project-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-list">
          {filteredProjects.map((project, index) => (
            <a
              key={project.num}
              href={project.link}
              className="project-row group-row interactive-card"
              target={project.link !== '#' ? '_blank' : undefined}
              rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
              data-cursor-text={project.link !== '#' ? 'VIEW ↗' : 'PREVIEW'}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card-spotlight-layer" aria-hidden="true" />

              <div className="project-number-col">
                <span className="project-number">{project.num}</span>
                {project.featured && (
                  <span className="featured-badge" title="Featured Project">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="project-main">
                <div className="project-title-bar">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-badges">
                    <span className="project-tag">{project.tag}</span>
                    {project.isLive && (
                      <span className="live-demo-badge">
                        <span className="live-dot" /> LIVE DEMO
                      </span>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.desc}</p>

                <div className="project-tech-chips">
                  {project.tech.split(', ').map((techItem, tIndex) => (
                    <span key={tIndex} className="tech-chip">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-arrow-container">
                <div className="project-arrow-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="project-arrow-icon"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
