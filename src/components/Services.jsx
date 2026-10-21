import React from 'react';

export default function Services() {
  const servicesData = [
    {
      title: 'FULL STACK',
      tag: 'End-to-end web applications',
      desc: 'Building production-ready platforms with React, Next.js, Node.js and Express — from responsive UI to REST APIs and database design.',
      cursorText: 'STACK ⚡',
    },
    {
      title: 'FRONTEND',
      tag: 'Modern, responsive interfaces',
      desc: 'Crafting clean component architectures with React, Tailwind CSS and Material UI. Pixel-attentive, accessible, and fast across devices.',
      cursorText: 'FRONTEND 🎨',
    },
    {
      title: 'BACKEND & APIs',
      tag: 'Scalable services & data',
      desc: 'Designing RESTful APIs, authentication flows and MongoDB / MySQL schemas that support real business operations at scale.',
      cursorText: 'APIs ⚙️',
    },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="services-section">
      <div className="max-width-container">
        <div className="services-header">
          <h2 className="section-heading">
            WHAT <span className="accent-text">I DO</span>
          </h2>
          <p className="section-sub-mono">/ 03 CORE CAPABILITIES</p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card group-card interactive-card"
              onMouseMove={handleMouseMove}
              data-cursor-text={service.cursorText}
            >
              <div className="card-spotlight-layer" aria-hidden="true" />
              <div className="card-inner-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-tag">{service.tag}</p>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
