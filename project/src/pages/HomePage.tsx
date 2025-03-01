import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightLeft, TrendingUp, Shield, Clock, HelpCircle } from 'lucide-react';
import ExchangeRateCalculator from '../components/ExchangeRateCalculator';

const HomePage = () => {
  const [direction, setDirection] = useState<'toNigeria' | 'fromNigeria'>('toNigeria');
  const navigate = useNavigate();
  const [exchangeRates, setExchangeRates] = useState({
    usdToNgn: 1400,
    usdcToUsd: 1,
    eurToNgn: 1500
  });

  useEffect(() => {
    // Mock API call to fetch exchange rates
    // In production, this would call the Pyth Network oracle and CoinGecko API
    const fetchRates = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock rates with small random variations to simulate real-time changes
      setExchangeRates({
        usdToNgn: 1400 + (Math.random() * 20 - 10),
        usdcToUsd: 0.99 + (Math.random() * 0.02),
        eurToNgn: 1500 + (Math.random() * 20 - 10)
      });
    };
    
    fetchRates();
    const interval = setInterval(fetchRates, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const handleDirectionToggle = () => {
    setDirection(direction === 'toNigeria' ? 'fromNigeria' : 'toNigeria');
  };

  const handleGetStarted = () => {
    navigate(direction === 'toNigeria' ? '/send-to-nigeria' : '/send-abroad');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {direction === 'toNigeria' 
                  ? 'Send Money to Nigeria Instantly' 
                  : 'Send Money Abroad from Nigeria'}
              </h1>
              <p className="text-xl mb-8">
                {direction === 'toNigeria'
                  ? 'Fast, secure, and affordable remittance powered by Solana blockchain technology.'
                  : 'Support your loved ones abroad with our seamless international transfers.'}
              </p>
              
              <div className="bg-white rounded-lg p-4 shadow-lg mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-800 font-medium">Transfer Direction</span>
                  <button 
                    onClick={handleDirectionToggle}
                    className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200"
                  >
                    <ArrowRightLeft size={16} className="mr-2" />
                    {direction === 'toNigeria' ? 'Send to Nigeria' : 'Send Abroad'}
                  </button>
                </div>
                
                <ExchangeRateCalculator 
                  direction={direction} 
                  rates={exchangeRates}
                />
                
                <button 
                  onClick={handleGetStarted}
                  className="w-full bg-yellow-500 text-green-900 py-3 rounded-lg font-bold mt-4 hover:bg-yellow-400 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1621953468560-402e6c4612e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Nigerian mobile banking" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SolanaNaira?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform combines the speed of Solana blockchain with local payment methods for seamless cross-border transfers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-4">
                <Clock size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Transfers</h3>
              <p className="text-gray-600">
                Transactions complete in minutes, not days, thanks to Solana's lightning-fast blockchain.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-4">
                <TrendingUp size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-600">
                Get the best exchange rates powered by Pyth Network's real-time oracle data.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-4">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">
                Bank-level security with full regulatory compliance for your peace of mind.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-green-600 mb-4">
                <HelpCircle size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our dedicated team is always available to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes international transfers simple, secure, and affordable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up & Verify</h3>
              <p className="text-gray-600">
                Create an account and complete our simple verification process to get started.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Enter Transfer Details</h3>
              <p className="text-gray-600">
                Specify the amount and recipient information for your transfer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Send & Track</h3>
              <p className="text-gray-600">
                Complete the payment and track your transfer in real-time until delivery.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/how-it-works')}
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "I send money to my family in Lagos every month, and SolanaNaira has made it so much faster and cheaper than my old bank transfers."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">
                  JO
                </div>
                <div>
                  <p className="font-medium">John Okafor</p>
                  <p className="text-sm text-gray-500">London, UK</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "As a freelancer, getting paid by international clients used to be a nightmare. Now I can receive USDC directly and convert to Naira instantly."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">
                  AA
                </div>
                <div>
                  <p className="font-medium">Amina Adeyemi</p>
                  <p className="text-sm text-gray-500">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                "The exchange rates are transparent and fair. I can see exactly how much my family will receive before I send the money."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">
                  DO
                </div>
                <div>
                  <p className="font-medium">David Okonkwo</p>
                  <p className="text-sm text-gray-500">Toronto, Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who trust SolanaNaira for their international money transfers.
          </p>
          <button 
            onClick={handleGetStarted}
            className="bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Send Money Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;