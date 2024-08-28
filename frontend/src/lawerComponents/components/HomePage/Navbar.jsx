// src/components/Navbar.js
import { useState } from 'react';
import emb from "../../../assets/emb.png"

const Navbar = () => {
  return (
    <div>
      <nav className="p-4 bg-white mb-1">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div >
            <a href="#" className="text-white text-2xl font-bold flex align-middle items-center gap-2 ">
              <img src={emb} className='' alt=" emblem" />
              <h1 className=' text-black pt-5 font-serif text-3xl '>
                विधि और न्याय मंत्रालय <br />
                Ministry of Law & Justice
              </h1>

            </a>



          </div>

          <div className=' flex gap-4'>

            <div className=' border-black  p-3 px-6 rounded-lg  '>
              <h1 className=' font-bold text-3xl  font-serif'>BailBridgers</h1>

            </div>


            {/* Authentication Buttons */}
            <div className="lg:flex lg:items-center lg:space-x-4">
              <a href="#" className="text-white bg-[#03346E] hover:bg-[#0033A0] px-4 py-2 rounded">Login</a>
              <a href="#" className="text-white bg-[#03346E] hover:bg-[#0033A0] px-4 py-2 rounded">Register</a>
            </div>
          </div>

        </div>




      </nav>
      <div className=' bg-[#03346E] h-8 flex justify-center py-6'>
        <div className="lg:flex lg:items-center lg:space-x-8 ">
          <a href="#home" className="text-white hover:font-bold hover:bg-red-900 p-1 rounded-lg" >Home</a>
          <a href="#about" className="text-white hover:font-bold hover:bg-red-900 p-1 rounded-lg">About</a>
          <a href="#service" className="text-white hover:font-bold hover:bg-red-900 p-1 rounded-lg">Services</a>
          <a href="#contact" className="text-white hover:font-bold hover:bg-red-900 p-1 rounded-lg">Contact</a>
        </div>

      </div>

    </div>

  );
};

export default Navbar;
