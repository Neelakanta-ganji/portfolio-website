import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="glass" style={{ padding: '60px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '30px' }}>About Me</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-muted)' }}>
            I am GANJI NEELAKANTA, a Full Stack Developer (Frontend + Backend + AI Integration). I don't just write code; I provide complete solutions that solve complex business problems.
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'var(--text-muted)' }}>
            My goal is to help high-growth businesses scale with robust full-stack applications, seamless UI/UX, and smart automation systems. Whether it's an e-commerce platform or an AI-based tool, I deliver premium results.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="glass" style={{ padding: '15px 25px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--neon-cyan)' }}>50+</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Projects Delivered</p>
            </div>
            <div className="glass" style={{ padding: '15px 25px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--neon-purple)' }}>100%</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: 'clamp(200px, 60vw, 300px)', height: 'clamp(200px, 60vw, 300px)', borderRadius: '50%', background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'var(--glow-cyan)', padding: '5px' }}>
            <img src="/images/photo.png" alt="Ganji Neelakanta" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
