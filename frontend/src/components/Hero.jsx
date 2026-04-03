import React from 'react';

const Hero = () => {
  return (
    <section className="section hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      
      <div className="container" style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
        <h1 className="section-title animate-fade-up text-gradient" style={{ fontSize: '4.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
          I Build Scalable Websites & Systems<br />That Grow Your Business 🚀
        </h1>
        <p className="animate-fade-up delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          From design to backend to automation — I handle everything. 
          Positioning you as an industry leader through premium digital experiences.
        </p>
        
        <div className="animate-fade-up delay-200" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#portfolio" className="btn-primary">→ View Projects</a>
          <a href="#contact" className="btn-outline">→ Book a Call</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
