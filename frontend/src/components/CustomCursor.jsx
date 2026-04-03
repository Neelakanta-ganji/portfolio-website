import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const onMouseHover = () => setLinkHovered(true);
    const onMouseLeave = () => setLinkHovered(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners to all links and buttons
    const linkElements = document.querySelectorAll('a, button');
    linkElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseHover);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      linkElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseHover);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []); // Note: The hover logic might need to run again if new links are added to the DOM.

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${clicked ? 0.7 : (linkHovered ? 1.5 : 1)})`,
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease',
        }}
      />
      <div 
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '40px',
          height: '40px',
          border: '1px solid var(--neon-cyan)',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) scale(${clicked ? 1.5 : (linkHovered ? 1.5 : 1)})`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'all 0.15s ease-out',
          boxShadow: linkHovered ? 'var(--glow-cyan)' : 'none',
          backgroundColor: linkHovered ? 'rgba(0, 240, 255, 0.1)' : 'transparent'
        }}
      />
    </>
  );
};

export default CustomCursor;
