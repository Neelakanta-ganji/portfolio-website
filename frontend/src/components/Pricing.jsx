import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹10K',
      desc: 'Perfect for small businesses needing a web presence.',
      features: ['Landing Page + Contact Form', 'Responsive UI/UX', 'Basic SEO Setup', '3 Days Delivery'],
      popular: false
    },
    {
      name: 'Growth',
      price: '₹25K+',
      desc: 'Most popular for expanding companies.',
      features: ['Multi-page Website (React)', 'Full Backend Setup (Node/Django)', 'Custom Admin Panel', 'Advanced SEO & Analytics', '2 Weeks Delivery'],
      popular: true
    },
    {
      name: 'Pro',
      price: '₹50K+',
      desc: 'Complete technical setup for large operations.',
      features: ['Complex Web Application', 'AI Integrations & WhatsApp Bots', 'Enterprise Database Architecture', 'Custom Microservices', 'Priority 24/7 Support'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="section container">
      <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.2rem' }}>
        Investment in high-end digital infrastructure.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        {plans.map((plan, i) => (
          <div key={i} className="glass" style={{ 
            flex: '1 1 320px', 
            padding: '40px 30px', 
            position: 'relative',
            border: plan.popular ? '1px solid var(--neon-cyan)' : 'var(--border-glass)',
            transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
            zIndex: plan.popular ? 2 : 1
          }}>
            {plan.popular && (
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                MOST POPULAR
              </div>
            )}
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{plan.name}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.9rem', minHeight: '40px' }}>{plan.desc}</p>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px', color: plan.popular ? 'var(--neon-cyan)' : 'white' }}>
              {plan.price}
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {plan.features.map((feat, j) => (
                <li key={j} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: 'var(--neon-purple)' }}>✔</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className={plan.popular ? "btn-primary" : "btn-outline"} style={{ display: 'block', textAlign: 'center' }}>
              Choose {plan.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
