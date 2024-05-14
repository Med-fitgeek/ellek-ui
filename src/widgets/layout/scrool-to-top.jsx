import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour détecter le défilement de la page
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Le bouton apparaît après 300px de défilement
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#0999EB',
          color: 'white',
          borderRadius: '50%',
          border: 'none',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
        }}
      >
        &#8679; {/* Symbole Unicode pour la flèche vers le haut */}
      </button>
    )
  );
};

export default ScrollToTopButton;
