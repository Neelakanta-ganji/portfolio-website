import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'CEO, FitLife Gym',
      text: 'Neelakanta completely transformed our online presence. The booking system he built runs our whole gym smoothly.',
    },
    {
      name: 'Priya Mehra',
      role: 'Founder, Luxe Cafe',
      text: 'The 3D website he designed blows everyone away. We\'ve seen a massive surge in online orders and foot traffic.',
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Head, TechCorp',
      text: 'His enterprise dashboard is a game-changer. The backend API is incredibly fast, and the code is pristine.',
    }
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section container">
      <h2 className="section-title">Client <span className="text-gradient">Testimonials</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.2rem' }}>
        Trusted by growing businesses.
      </p>

      <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '50px', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontSize: '4rem', color: 'var(--neon-purple)', position: 'absolute', top: '20px', left: '30px', opacity: 0.3 }}>"</div>
        
        <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ display: i === active ? 'block' : 'none', animation: 'fadeInUp 0.5s ease forwards' }}>
              <p style={{ fontSize: '1.3rem', fontStyle: 'italic', marginBottom: '30px', lineHeight: '1.8' }}>
                {t.text}
              </p>
              <h4 style={{ color: 'var(--neon-cyan)', fontSize: '1.1rem' }}>{t.name}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.role}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
          {testimonials.map((_, i) => (
            <div key={i} onClick={() => setActive(i)} style={{ 
              width: i === active ? '30px' : '10px', 
              height: '10px', 
              borderRadius: '5px', 
              background: i === active ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
