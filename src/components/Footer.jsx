import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto space-y-6 md:space-y-0">
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Based in NR32, UK</p>
          <p><a href="mailto:info@remwaste.co.uk">info@remwaste.co.uk</a></p>
          <p><a href="tel:+441234567890">+44 1234 567890</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Write Us</h3>
          <p><a href="mailto:info@remwaste.co.uk">info@remwaste.co.uk</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Call Us</h3>
          <p><a href="tel:+441234567890">+44 1234 567890</a></p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>© {new Date().getFullYear()} REM Waste. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;