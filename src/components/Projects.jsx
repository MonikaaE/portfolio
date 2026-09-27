import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      num: '01',
      title: 'AutoApply Engine',
      tag: 'Full Stack • AI',
      desc: 'AutoApply Engine is an autonomous full-stack AI platform built with React, Express, TypeScript, Playwright, and Claude 3.5. It monitors live job postings, evaluates candidate ATS match scores (0–100), programmatically generates job-tailored PDF resumes, and automates job application submissions on autopilot.',
      tech: 'React, TypeScript, Node.js, Express, Google Gemini AI, Nodemailer',
      link: 'https://autojob-apply-gamma.vercel.app/',
      
    },
     {
      num: '02',
      title: 'AI Job Application Assistant & Automated Outreach Platform',
       tag: 'Full Stack • Gemini AI',
    desc: 'An AI outreach platform that parses PDF resumes, evaluates candidate-job match percentages, and generates personalized application emails with a human-in-the-loop Safety Outbox.',
    tech: 'React, TypeScript, Node.js, Express, Google Gemini AI, Nodemailer',
    link: 'https://auto-mail-roan.vercel.app/',
      
    },
    {
      num: '03',
      title: 'Dynamic Showcase Platform',
      tag: 'Full Stack • AI / RAG',
      desc: 'A full-stack platform for client-specific business presentations with AI-powered product recommendations using Retrieval-Augmented Generation, real-time template customization and Amazon S3 for secure file storage.',
      tech: 'React, Node.js, MongoDB, Material UI, AWS S3, RAG',
      link: '#',
    },
    {
      num: '04',
      title: 'Automation Workflow Suite',
      tag: 'Full Stack • Internship',
      desc: 'Contributed to an internal product automating repetitive business workflows for Builder Pluss — reduced manual work by 60% and shipped dynamic UI + API integrations end to end.',
      tech: 'React, Material UI, Node.js, MongoDB',
      link: '#',
    },
  ];

  return (
    <section id="work" className="projects-section scroll-offset">
      <div className="max-width-container">
        <div className="projects-header">
          <h2 className="section-heading">
            MY <span className="accent-text">WORK</span>
          </h2>
          <p className="section-sub-mono">/ SELECTED PROJECTS</p>
        </div>

      <div className="projects-list">
  {projectsData.map((project, index) => (
    <a
      key={index}
      href={project.link}
      className="project-row group-row"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-number">{project.num}</div>

      <div className="project-main">
        <div className="project-title-bar">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-tag">{project.tag}</span>
        </div>

        <p className="project-desc">{project.desc}</p>
        <p className="project-tech">{project.tech}</p>
      </div>

      <div className="project-arrow-container">
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
          className="project-arrow-icon"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </div>
    </a>
  ))}
</div>
      </div>
    </section>
  );
}
