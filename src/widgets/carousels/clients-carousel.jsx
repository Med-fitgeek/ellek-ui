import React, { useState, useEffect } from 'react';

const images = [
  `/img/black-farmer.webp?${new Date().getTime()}`,
  `/img/black-tailor.webp?${new Date().getTime()}`,
  `/img/black-businessman.webp?${new Date().getTime()}`,
  `/img/wood-artisan.webp?${new Date().getTime()}`,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []); 

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
