// src/components/Navbar.js
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#03346E' }} className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">BailBridgers</a>

        {/* Navigation Links */}
        <div className="lg:flex lg:items-center lg:space-x-6">
          <a href="#" className="text-white hover:text-gray-400">Home</a>
          <a href="#" className="text-white hover:text-gray-400">About</a>
          <a href="#" className="text-white hover:text-gray-400">Services</a>
          <a href="#" className="text-white hover:text-gray-400">Contact</a>
        </div>

        {/* Authentication Buttons */}
        <div className="lg:flex lg:items-center lg:space-x-4">
          <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Login</a>
          <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
