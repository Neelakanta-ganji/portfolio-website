import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('Message Sent! 🚀');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send. Try WhatsApp.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to send. Try WhatsApp.');
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="glass" style={{ padding: '50px', display: 'flex', flexWrap: 'wrap', gap: '50px' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '20px' }}>Let's Talk Business</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem' }}>
            Ready to upgrade your digital infrastructure? Leave a message or reach out directly.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="https://wa.me/919392799404" target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', justifyContent: 'center', background: '#25D366' }}>
              <span role="img" aria-label="whatsapp">📱</span> Chat on WhatsApp
            </a>
            
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
              <span style={{ color: 'var(--neon-cyan)' }}>📧</span> ganjineelakanta0@gmail.com
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--neon-purple)' }}>📸</span> @neelakanta.dev
            </p>
          </div>
        </div>

        <div style={{ flex: '1 1 400px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '1rem', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '1rem', outline: 'none' }} 
            />
            <textarea 
              placeholder="Project Details" 
              rows="5"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px', fontSize: '1rem', outline: 'none', resize: 'vertical' }} 
            ></textarea>
            
            <button type="submit" className="btn-outline" style={{ fontSize: '1.1rem', marginTop: '10px' }}>
              {status || 'Send Inquiry →'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
