
import React from 'react';
import { Button } from "./ui/button";
import { ArrowRight } from 'lucide-react';
import StatisticItem from './StatisticItem';
import TrustedBy from './TrustedBy';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-extrabold leading-tight">
              Boost Growth with <span className="text-orange">AI</span> Marketing
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-800 leading-snug max-w-lg">
              Leverage AI-driven strategies, automation, and real-time analytics to boost conversions and maximize revenue—effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-orange hover:bg-orange-hover text-white font-medium rounded-full py-6 px-8 text-lg flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
          
          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute right-0 bottom-0 w-4/5 lg:w-full h-3/4 bg-cream rounded-tl-3xl rounded-bl-3xl z-0">
              {/* Yellow Bar Chart */}
              <div className="absolute bottom-16 left-8 flex items-end space-x-3">
                <div className="w-6 h-16 bg-yellow-chart rounded-t-lg"></div>
                <div className="w-6 h-24 bg-yellow-chart rounded-t-lg"></div>
                <div className="w-6 h-12 bg-yellow-chart rounded-t-lg"></div>
                <div className="w-6 h-32 bg-yellow-chart rounded-t-lg"></div>
                <div className="w-6 h-20 bg-yellow-chart rounded-t-lg"></div>
              </div>
            </div>
            
            <div className="relative z-10 w-4/5 lg:w-4/5 aspect-[3/4] bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-center bg-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
