import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <div>9:00 AM - 05:00 PM</div>
        <div>+1234567890</div>
        <div><a href="mailto:info@gmail.com">info@gmail.com</a></div>
        <div>1236 Locust St, Kansas City, MO 65442</div>
      </div>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
      </div>
    </div>
  );
};

export default Header;