import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    // Fade Up animations
    gsap.utils.toArray('.animate-fade-up').forEach((elem) => {
      gsap.fromTo(elem, 
        { autoAlpha: 0, y: 50 }, 
        {
          autoAlpha: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
          }
        }
      );
    });

    // Slide-in for section titles
    gsap.utils.toArray('.section-title').forEach((title) => {
      gsap.fromTo(title,
        { autoAlpha: 0, x: -50 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
          }
        }
      );
    });

    // Stagger for glass cards
    document.querySelectorAll('.section').forEach((sec) => {
      const cards = sec.querySelectorAll('.glass');
      if (cards.length > 0) {
        gsap.fromTo(cards,
          { autoAlpha: 0, scale: 0.9, y: 30 },
          {
            autoAlpha: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: sec,
              start: 'top 80%',
            }
          }
        );
      }
    });
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Portfolio />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '30px 0', textAlign: 'center', marginTop: '50px' }}>
        <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Neelakanta Ganji. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
