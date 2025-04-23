
import React from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import StatisticItem from './StatisticItem';
import TrustedBy from './TrustedBy';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-cream to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-tight">
            Boost Growth with <span className="text-orange">AI</span> Marketing
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-800 leading-snug">
            Leverage AI-driven strategies, automation, and real-time analytics to boost conversions and maximize revenue—effortlessly.
          </p>
          
          <div className="mt-8">
            <Button className="bg-orange hover:bg-orange-hover text-white font-medium rounded-full py-6 px-8 text-lg flex items-center shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <StatisticItem 
              value="230+" 
              label="Companies using our AI marketing platform to optimize their campaigns" 
            />
            <StatisticItem 
              value="15 Million+" 
              label="Trusted by some big companies that we work with, and trust us very much" 
              showAvatars={true} 
            />
          </div>
          
          <TrustedBy />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
