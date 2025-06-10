import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
      <div className="absolute inset-0 bg-green-900 bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Waste Management Dumpster Rentals Garbage Pickup.
          </h1>
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