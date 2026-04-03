import React from 'react';

const TechStack = () => {
  const categories = [
    { 
      name: 'Frontend', 
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'Next.js'] 
    },
    { 
      name: 'Backend', 
      skills: ['Node.js', 'Express', 'Django', 'Python', 'REST APIs'] 
    },
    { 
      name: 'Databases', 
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] 
    },
    { 
      name: 'Tools & DevOps', 
      skills: ['Docker', 'Git', 'AWS', 'Vercel', 'Automation'] 
    }
  ];

  return (
    <section id="tech-stack" className="section container">
      <h2 className="section-title">My <span className="text-gradient">Tech Stack</span></h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {categories.map((cat, i) => (
          <div key={i} className="glass" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--neon-cyan)' }}>{cat.name}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {cat.skills.map((skill, j) => (
                <div key={j} style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '10px 20px', 
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--glow-cyan)'; e.currentTarget.style.borderColor = 'var(--neon-cyan)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
