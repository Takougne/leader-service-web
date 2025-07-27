import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg")', 
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          ENTREPRISE LEADER SERVICE
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-3xl">
          Expertise en génie civil et solutions industrielles de haute qualité
        </p>
        <p className="mb-8 max-w-2xl text-gray-200">
          Étendre notre action sur le territoire national et international, devenir un acteur incontournable du génie civil, et mettre en service une maintenance industrielle et automobile fiable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="btn-primary">
            Découvrir nos services
          </a>
          <a href="#contact" className="px-6 py-3 bg-white text-primary hover:bg-gray-100 font-medium rounded-md transition-all duration-300 inline-block">
            Nous contacter
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white">
            <span className="text-sm mb-1">Découvrir</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;