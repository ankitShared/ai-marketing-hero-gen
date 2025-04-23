
import React from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 min-h-screen flex items-center justify-center">
        <div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-tight tracking-tight mb-8 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 bg-clip-text text-transparent">
            Boost Growth with <span className="text-orange">AI</span> Marketing
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Leverage AI-driven strategies, automation, and real-time analytics to boost conversions and maximize revenue—effortlessly.
          </p>
          
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              className="bg-orange hover:bg-orange-hover text-white font-medium rounded-full py-7 px-10 text-lg flex items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
