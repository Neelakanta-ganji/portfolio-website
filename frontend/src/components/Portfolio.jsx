import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'GNK GYM - Premium Fitness Platform',
      category: 'Full Stack Web App',
      problem: 'The gym needed a high-conversion platform to showcase facilities and book memberships online.',
      solution: 'Built a cinematic, dark-themed responsive site with smooth scroll-reveal animations and custom carousels.',
      result: 'Increased online memberships by 45% within the first month.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
      link: 'https://neelakanta-ganji.github.io/gnk-gym/'
    },
    {
      title: 'Savoria Restaurant',
      category: 'Frontend & UI',
      problem: 'A premium restaurant needed an aesthetic and conversion-optimized website.',
      solution: 'Developed a high-end visual design with sticky ordering workflows.',
      result: 'Boosted online orders and improved foot traffic.',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
      link: 'https://savoria-food.netlify.app/'
    },
    {
      title: 'GNK Luxury',
      category: 'Premium E-commerce',
      problem: 'A luxury brand required a premium and fast e-commerce platform to showcase high-end products.',
      solution: 'Built a visually stunning and responsive application with modern animations and smooth transitions.',
      result: 'Elevated brand presentation and improved user engagement.',
      image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800',
      link: 'https://gnk-luxury.netlify.app/'
    },
    {
      title: 'Enterprise Dashboard System',
      category: 'Backend & APIs',
      problem: 'A B2B client struggled with disjointed data across multiple platforms.',
      solution: 'Developed a unified custom dashboard in React + Django with real-time data visualization.',
      result: 'Saved the client 20+ hours a week in manual reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="section container">
      <h2 className="section-title">Selected <span className="text-gradient">Projects</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.2rem' }}>
        Real results for real businesses.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {projects.map((proj, i) => (
          <div key={i} className="glass" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
            </div>
            <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--neon-purple)', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>{proj.category}</span>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{proj.title}</h3>
              
              <div style={{ marginBottom: '20px', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--neon-cyan)' }}>Problem:</strong> <span style={{ color: 'var(--text-muted)' }}>{proj.problem}</span></p>
                <p style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--neon-cyan)' }}>Solution:</strong> <span style={{ color: 'var(--text-muted)' }}>{proj.solution}</span></p>
                <p><strong style={{ color: 'var(--neon-cyan)' }}>Result:</strong> <span style={{ color: 'white' }}>{proj.result}</span></p>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a href={proj.link} className="btn-outline" style={{ display: 'inline-block', padding: '8px 20px', fontSize: '0.9rem' }}>Live Demo ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
