// src/components/CustomCarousel.js
import React, { useState } from 'react';

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      // image: 'https://img.freepik.com/free-photo/closeup-gavel-judgement-concept_53876-31913.jpg?uid=R91335437&ga=GA1.1.651042858.1721845919&semt=ais_hybrid', // Update with actual image path
      title: 'Streamlined Bail Process',
      description: 'Our platform simplifies the bail process, making it faster and more efficient for all parties involved.'
    },
    {
      // image: '/images/legal-aid.jpg', // Update with actual image path
      title: 'Comprehensive Legal Aid',
      description: 'Access comprehensive legal provisions and procedural checklists designed to support legal aid providers.'
    },
    {
      // image: '/images/eligibility-checker.jpg', // Update with actual image path
      title: 'Eligibility Checker',
      description: 'Quickly assess bail eligibility based on various factors with our easy-to-use eligibility checker tool.'
    },
    {
      // image: '/images/documentation.jpg', // Update with actual image path
      title: 'Automated Documentation',
      description: 'Effortlessly generate and customize bail application documents with our automated documentation system.'
    },
    {
      // image: '/images/compliance.jpg', // Update with actual image path
      title: 'Procedural Compliance',
      description: 'Ensure compliance with all procedural requirements through interactive checklists and real-time guidance.'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden text-black bg-white">
      <div className="relative flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={slide.image}  className="w-full h-80 object-cover" /> 
            <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-black p-6">
              <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 text-2xl"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 text-2xl"
      >
        &#10095;
      </button>
    </div>
  );
};

export default CustomCarousel;
