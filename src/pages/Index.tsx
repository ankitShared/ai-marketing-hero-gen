
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
