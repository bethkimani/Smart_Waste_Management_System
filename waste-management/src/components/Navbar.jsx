import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => {
    console.log('Opening modal'); // Debug log
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    console.log('Closing modal'); // Debug log
    setIsAuthModalOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center sticky top-0 z-50 relative">
      <div className="text-2xl font-bold">Waste.</div>
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/about" className="hover:text-yellow-300">About Us</Link>
        <Link to="/services" className="hover:text-yellow-300">Services</Link>
        <Link to="/company" className="hover:text-yellow-300">Company</Link>
        <Link to="/blog" className="hover:text-yellow-300">Blog</Link>
        <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
      </div>
      <button
        onClick={openAuthModal}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
      >
        Request Pickup
      </button>
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
    </nav>
  );
};

export default Navbar;