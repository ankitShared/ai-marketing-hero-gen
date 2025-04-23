
import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-cream py-4 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#" className="text-2xl font-montserrat font-extrabold tracking-tight">
            <span className="text-orange">GEN</span>
            <span>C</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center justify-center space-x-8">
          <a href="#" className="text-base font-montserrat font-medium hover:text-orange transition-colors">Products</a>
          <a href="#" className="text-base font-montserrat font-medium hover:text-orange transition-colors">Solutions</a>
          <a href="#" className="text-base font-montserrat font-medium hover:text-orange transition-colors">Pricing</a>
          <a href="#" className="text-base font-montserrat font-medium hover:text-orange transition-colors">Resources</a>
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-black text-white hover:bg-zinc-800 rounded-full px-6">
            See a Demo
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-cream p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-base font-montserrat font-medium py-2 hover:text-orange transition-colors">Products</a>
            <a href="#" className="text-base font-montserrat font-medium py-2 hover:text-orange transition-colors">Solutions</a>
            <a href="#" className="text-base font-montserrat font-medium py-2 hover:text-orange transition-colors">Pricing</a>
            <a href="#" className="text-base font-montserrat font-medium py-2 hover:text-orange transition-colors">Resources</a>
            <Button className="bg-black text-white hover:bg-zinc-800 rounded-full px-6 w-full">
              See a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
