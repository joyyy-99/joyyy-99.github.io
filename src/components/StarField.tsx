
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;
      
      const numberOfStars = 100;
      starsRef.current.innerHTML = '';
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsRef.current.appendChild(star);
      }
    };

    createStars();
  }, []);

  return <div ref={starsRef} className="stars" />;
};

export default StarField;
