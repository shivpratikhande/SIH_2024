import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoSections = () => {
  const navigate = useNavigate();

  const handleClick = (value)=>{
    navigate(`/${value}`)
  }

  return (
    <div className="flex h-screen space-x-4 p-4">
      {/* Section 1: Undertrial Prisoners */}
      <div className="flex-1 bg-[#2B4C65] text-white flex flex-col items-center justify-center p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="https://img.freepik.com/free-vector/man-red-shirt-with-white-collar_90220-2873.jpg?t=st=1724425136~exp=1724428736~hmac=5c5bc0132c7b8e515aeeb33d97d298bbd9192991d5e57ed9a7380e2e4667007f&w=740" alt="Undertrial Prisoners" className="w-2/3 mb-6 rounded-lg" />
        <h2 className="text-2xl font-bold mb-4">Hey, are you an Undertrial Prisoner?</h2>
        <p className="mb-6">You can login from here</p>
        <button className="bg-white text-[#2B4C65] py-2 px-4 rounded-full font-bold hover:bg-[#1c3449] hover:text-white"
        onClick={()=>handleClick("utp")}>Prisoner's Login</button>
      </div>

      {/* Section 2: Lawyers */}
      <div className="flex-1 bg-white text-[#2B4C65] flex flex-col items-center justify-center p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="https://img.freepik.com/premium-vector/blue-gold-sign-that-says-symbol-justice_1205884-833.jpg?w=740" alt="Lawyers" className="w-2/3 mb-6 rounded-lg" />
        <h2 className="text-2xl font-bold mb-4">Hey, are you a Lawyer?</h2>
        <p className="mb-6">You can login from here</p>
        <button className="bg-[#2B4C65] text-white py-2 px-4 rounded-full font-bold hover:bg-[#1c3449]"
        onClick={()=>handleClick("lawyer")}>Lawyer's Login</button>
      </div>

      {/* Section 3: Judges */}
      <div className="flex-1 bg-[#2B4C65] text-white flex flex-col items-center justify-center p-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
        <img src="https://img.freepik.com/free-photo/closeup-gavel-judgement-concept_53876-31913.jpg?uid=R91335437&ga=GA1.1.651042858.1721845919&semt=ais_hybrid" alt="Judges" className="w-2/3 mb-6 rounded-lg" />
        <h2 className="text-2xl font-bold mb-4">Hey, are you a Judge?</h2>
        <p className="mb-6">You can login from here</p>
        <button className="bg-white text-[#2B4C65] py-2 px-4 rounded-full font-bold hover:bg-[#1c3449] hover:text-white">Judge's Login</button>
      </div>
    </div>
  );
};

export default InfoSections;
