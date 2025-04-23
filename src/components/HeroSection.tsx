
import React from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import TrustedBy from './TrustedBy';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-tight">
            Boost Growth with <span className="text-orange">AI</span> Marketing
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-800 leading-snug">
            Leverage AI-driven strategies, automation, and real-time analytics to boost conversions and maximize revenue—effortlessly.
          </p>
          
          <div className="mt-8 flex justify-center w-full">
            <Button className="bg-orange hover:bg-orange-hover text-white font-medium rounded-full py-6 px-8 text-lg flex items-center shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <TrustedBy />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
