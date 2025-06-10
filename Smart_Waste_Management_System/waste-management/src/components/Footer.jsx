import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto space-y-6 md:space-y-0">
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Villa 198, Street 26, Khalfia City, A. Abu Dhabi, UAE</p>
          <p>R1, Turquoise 7, Mamsha Al Saadiyat, Abu Dhabi, UAE</p>
          <p>Daytona House, Between Exit & DFC, Victory Heights, Unit LB 03 - Motor City, Dubai, UAE</p>
          <p><a href="mailto:taraarosesalon.com">info@taraarosesalon.com</a></p>
          <p><a href="tel:+0123456789">+0123456789</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Write Us</h3>
          <p><a href="mailto:info@taraarosesalon.com">info@taraarosesalon.com</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Call Us</h3>
          <p><a href="tel:+0123456789">+0123456789</a></p>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Waste. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;