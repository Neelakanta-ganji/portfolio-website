import React from 'react';

const Services = () => {
  const services = [
    { title: 'Full Website Development', desc: 'End-to-end frontend and backend architecture tailored to your business needs.', icon: '🌐' },
    { title: 'E-commerce & Payments', desc: 'Secure, high-converting online stores with custom payment integrations.', icon: '💳' },
    { title: 'Custom Dashboards', desc: 'Internal admin panels and specialized data visualization platforms.', icon: '📊' },
    { title: 'API Integrations', desc: 'Robust API development to seamlessly connect different software systems.', icon: '⚡' },
    { title: 'WhatsApp Automation', desc: 'Advanced chatbots and lead-collection sequences for WhatsApp.', icon: '💬' },
    { title: 'AI-Based Tools', desc: 'Integration of LLMs and ML detection models (e.g., phrasing/phishing detection).', icon: '🤖' }
  ];

  return (
    <section id="services" className="section container">
      <h2 className="section-title">High-Value <span className="text-gradient">Services</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.2rem' }}>
        Complete technical solutions to elevate your brand and drive revenue.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {services.map((service, index) => (
          <div key={index} className="glass animate-fade-up" style={{ padding: '40px', transition: 'all 0.3s ease', cursor: 'pointer', animationDelay: `${index * 100}ms` }}
               onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--glow-purple)'; }}
               onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
