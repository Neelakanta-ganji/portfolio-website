import React from 'react';

const CaseStudies = () => {
  return (
    <section id="cases" className="section container">
      <div className="glass" style={{ padding: '60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: 'var(--neon-blue)', filter: 'blur(100px)', opacity: '0.3', zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '20px' }}>In-Depth Case Study</h2>
          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Scaling a Local Medical Clinic</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '40px' }}>
            <div style={{ flex: '1 1 300px' }}>
              <h4 style={{ color: 'var(--neon-cyan)', fontSize: '1.2rem', marginBottom: '10px' }}>The Challenge</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                A leading medical clinic was losing potential patients due to an outdated, slow-loading website and manual appointment booking process that overwhelmed the front desk.
              </p>
              
              <h4 style={{ color: 'var(--neon-purple)', fontSize: '1.2rem', marginBottom: '10px', marginTop: '30px' }}>The Solution</h4>
              <p style={{ color: 'var(--text-muted)' }}>
                I developed a professional, fast-loading healthcare platform with an integrated online booking system. Features included SEO optimization, WhatsApp instant chat, and a responsive custom UI.
              </p>
            </div>
            
            <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Business Outcomes</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#00f0ff', fontSize: '1.5rem' }}>✓</span>
                  <span><strong>300% increase</strong> in online appointments</span>
                </li>
                <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#00f0ff', fontSize: '1.5rem' }}>✓</span>
                  <span>Page load time reduced to <strong>under 1.2s</strong></span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#00f0ff', fontSize: '1.5rem' }}>✓</span>
                  <span>Ranked <strong>#1 on Google</strong> for local keywords</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
