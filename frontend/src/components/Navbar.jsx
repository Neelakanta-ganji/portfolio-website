import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, height: '3px', width: '100%', background: 'rgba(255,255,255,0.1)', zIndex: 1001 }}>
        <div style={{ height: '100%', width: `${scrollProgress * 100}%`, background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))', transition: 'width 0.1s' }}></div>
      </div>
      
      <nav className={scrolled ? 'glass-nav' : ''} style={{ position: 'fixed', top: '3px', width: '100%', zIndex: 1000, transition: 'all 0.3s ease', padding: scrolled ? '15px 0' : '25px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: '800', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black', fontSize: '1.1rem' }}>G</div>
            <span className="text-gradient">GANJI NEELAKANTA</span>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#about" style={{ display: 'none' }} className="nav-link">About</a>
            <a href="#services" className="nav-link" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Services</a>
            <a href="#portfolio" className="nav-link" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Work</a>
            <a href="#pricing" className="nav-link" style={{ color: 'var(--text-main)', fontWeight: 500 }}>Pricing</a>
            <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Hire Me</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
