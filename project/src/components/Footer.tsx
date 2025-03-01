import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SolanaNaira</h3>
            <p className="text-sm text-gray-300">
              Seamless remittance between Nigeria and the world, powered by Solana blockchain technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/send-to-nigeria" className="text-gray-300 hover:text-white">Send to Nigeria</Link>
              </li>
              <li>
                <Link to="/send-abroad" className="text-gray-300 hover:text-white">Send Abroad</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-gray-300">support@solananaira.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-gray-300">+234 800 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-sm text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SolanaNaira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;