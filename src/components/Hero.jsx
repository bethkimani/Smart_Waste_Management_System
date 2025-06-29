import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: '/robot.jpg', text: 'AI-powered robots streamline waste collection.' },
    { src: '/bins.jpg', text: 'Smart bins optimize sorting with AI technology.' },
    { src: '/delivery.jpg', text: 'AI-driven logistics enhance waste delivery efficiency.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image.src})` }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Driven Smart Waste Management Solutions
          </h1>
          <p className="mb-4">{images[currentImage].text}</p>
          <div className="space-x-4">
            <Link to="/services" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600">
              Explore Our Services
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded hover:bg-white hover:text-green-700">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;