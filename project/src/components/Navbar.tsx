import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'Pidgin' : 'English');
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">SolanaNaira</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Home
            </Link>
            <Link to="/how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              How It Works
            </Link>
            <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              Dashboard
            </Link>
            <button 
              onClick={toggleLanguage}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600"
            >
              <Globe size={18} className="mr-1" />
              {language}
            </button>
            <Link 
              to="/kyc-verification" 
              className="flex items-center bg-yellow-500 text-green-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400"
            >
              <User size={18} className="mr-1" />
              Sign In
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <button 
              onClick={() => {
                toggleLanguage();
                toggleMenu();
              }}
              className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
            >
              <Globe size={18} className="mr-1" />
              {language}
            </button>
            <Link 
              to="/kyc-verification" 
              className="flex items-center bg-yellow-500 text-green-900 px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-400"
              onClick={toggleMenu}
            >
              <User size={18} className="mr-1" />
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;