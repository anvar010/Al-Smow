import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Al Smow Businessmen Services</h2>
        <p className="text-base mb-4">Providing exceptional services tailored to your needs.</p>
        <div className="flex flex-col items-center mb-4">
          <a href="mailto:info@alsmow.com" className="text-blue-400 hover:text-blue-600 transition duration-300 mb-2">
          hr@alsmowbusinessmenservices.online
          </a>
          {/* <a href="tel:+971065294252" className="text-blue-400 hover:text-blue-600 transition duration-300">
            +971 065294252
          </a> */}
        </div>
        <div className="flex flex-col items-center mb-4">
          <p className="text-base mb-2">Tel: <a href="tel:+971065294252" className="text-blue-400 hover:text-blue-600 transition duration-300">
          06-5294-252
          </a></p>
          <p className="text-base mb-2">P.O.BOX: 2945</p>
          <p className="text-base">Ajman - U.AE</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-100 transition duration-300">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="text-gray-400 hover:text-gray-100 transition duration-300">Terms and Conditions</Link>
        </div>
        <p className="text-sm">&copy; 2024 Al Smow Businessmen Services. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
