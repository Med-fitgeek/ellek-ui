import React, { useState, useEffect } from 'react';

const images = [
    '/img/black-farmer.webp',
    '/img/black-tailor.webp',
    '/img/black-businessman.webp',
    '/img/wood-artisan.webp',
    
  ];

const ClientsCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour passer à l'image suivante toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden w-full h-80">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105"
        />
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ClientsCarousel;
