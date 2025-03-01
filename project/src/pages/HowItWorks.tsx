import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, DollarSign, CreditCard, Clock, Shield, HelpCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How SolanaNaira Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform combines the speed of Solana blockchain with local payment methods for seamless cross-border transfers.
        </p>
      </div>
      
      {/* How It Works - Sending to Nigeria */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sending Money to Nigeria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Enter Transfer Details</h3>
            <p className="text-gray-600 mb-4">
              Specify the amount in USD, EUR, or USDC and enter your recipient's Nigerian bank account or mobile money details.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Send $100 to a GTBank account in Lagos.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Make Payment</h3>
            <p className="text-gray-600 mb-4">
              Pay using your credit/debit card or USDC from your Solana wallet. Our system converts your currency to USDC on the Solana blockchain.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Your $100 is converted to USDC at the current exchange rate.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-green-100 text-green-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Recipient Gets Naira</h3>
            <p className="text-gray-600 mb-4">
              We convert the USDC to Naira using our liquidity pool and deposit the funds directly to your recipient's bank account or mobile money wallet.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Your recipient receives ₦140,000 (at ₦1,400/$1 rate) in their GTBank account within minutes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/send-to-nigeria" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 inline-flex items-center"
          >
            Send to Nigeria Now <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* How It Works - Sending from Nigeria */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sending Money Abroad from Nigeria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Enter Transfer Details</h3>
            <p className="text-gray-600 mb-4">
              Specify the amount in Naira and enter your recipient's details, including their preferred payout method (bank account, PayPal, or USDC wallet).
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Send ₦140,000 to a PayPal account in the United States.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Verify & Pay</h3>
            <p className="text-gray-600 mb-4">
              Complete BVN verification and pay using your Nigerian bank account via Flutterwave. We convert your Naira to USDC on the Solana blockchain.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Your ₦140,000 is converted to approximately $100 USDC at the current exchange rate.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="bg-blue-100 text-blue-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Recipient Gets Paid</h3>
            <p className="text-gray-600 mb-4">
              We convert the USDC to the recipient's preferred currency and send it to their chosen payout method using MoonPay or direct USDC transfer.
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Example:</span> Your recipient receives $100 in their PayPal account within 1-2 business days.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/send-abroad" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 inline-flex items-center"
          >
            Send Abroad Now <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* Technology Behind SolanaNaira */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Technology Behind SolanaNaira</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" viewBox="0 0 128 128" fill="currentColor">
                <path d="M93.09 90.42L73.66 128H54.2L73.65 90.42H93.09zM93.09 90.42L112.56 128H93.09L73.65 90.42H93.09zM34.85 90.42L54.31 128H34.85L15.39 90.42H34.85zM54.31 52.84L73.78 90.42H54.31L34.85 52.84H54.31zM73.76 52.84L93.22 90.42H73.76L54.29 52.84H73.76zM93.22 15.26l19.47 37.58h-19.47L73.76 15.26h19.46zM54.31 15.26l19.47 37.58H54.31L34.85 15.26h19.46zM34.85 15.26l19.46 37.58H34.85L15.39 15.26h19.46zM15.39 52.84l19.46 37.58H15.39L0 73.13l15.39-20.29z"/>
              </svg>
              Solana Blockchain
            </h3>
            <p className="text-gray-600 mb-4">
              We leverage Solana's high-speed, low-cost blockchain to process transactions in seconds rather than minutes or hours. This allows us to offer near-instant transfers at a fraction of the cost of traditional remittance services.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Transaction speeds of 400ms (vs. 10+ minutes for Bitcoin)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Transaction fees less than $0.01 (vs. $5-20 for traditional remittance)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Energy-efficient proof-of-stake consensus mechanism</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9V11.25C15.75 11.6642 15.4142 12 15 12H9C8.58579 12 8.25 11.6642 8.25 11.25V9C8.25 8.58579 8.58579 8.25 9 8.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 12.75H15C15.4142 12.75 15.75 13.0858 15.75 13.5V15.75C15.75 16.1642 15.4142 16.5 15 16.5H9C8.58579 16.5 8.25 16.1642 8.25 15.75V13.5C8.25 13.0858 8.58579 12.75 9 12.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8.25V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              USDC Stablecoin
            </h3>
            <p className="text-gray-600 mb-4">
              We use USDC (USD Coin) as the bridge currency for all transfers. USDC is a regulated stablecoin backed 1:1 by US dollars, providing stability and security for your transfers.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Stable value pegged to the US dollar</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Fully backed by cash and short-term US Treasury bonds</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Regular audits by Grant Thornton LLP</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Available on multiple blockchains (we use Solana for speed and low fees)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Using SolanaNaira</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-green-600 mb-4 flex justify-center">
              <DollarSign size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Save on Fees</h3>
            <p className="text-gray-600">
              Our fees are up to 80% lower than traditional banks and money transfer operators.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-green-600 mb-4 flex justify-center">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Transfers</h3>
            <p className="text-gray-600">
              Transfers to Nigeria complete in minutes, not days. International transfers in 1-2 business days.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-green-600 mb-4 flex justify-center">
              <CreditCard size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Options</h3>
            <p className="text-gray-600">
              Send to bank accounts, mobile money, PayPal, or directly to crypto wallets.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="text-green-600 mb-4 flex justify-center">
              <Shield size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">
              Bank-level security with full regulatory compliance for your peace of mind.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">How long do transfers take?</h3>
              <p className="text-gray-600">
                Transfers to Nigerian bank accounts or mobile money typically complete within minutes. International transfers to bank accounts or PayPal usually take 1-2 business days. Direct USDC transfers to crypto wallets are nearly instant.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What are the fees?</h3>
              <p className="text-gray-600">
                We charge a flat 2.5% fee on all transfers, plus a small network fee for blockchain transactions (typically less than $0.01). This is significantly lower than traditional remittance services that charge 5-10%.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is my money safe?</h3>
              <p className="text-gray-600">
                Yes. We use bank-level encryption and security measures to protect your information and funds. All USDC used in our system is fully backed by US dollars and short-term US Treasury bonds, and we maintain regulatory compliance in all jurisdictions where we operate.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do I need a crypto wallet to use SolanaNaira?</h3>
              <p className="text-gray-600">
                No, you don't need a crypto wallet to use our service. You can send money using a credit/debit card or bank transfer. However, if you prefer to use crypto, you can connect your Solana wallet to send or receive USDC directly.
              </p>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What countries can I send money to/from?</h3>
              <p className="text-gray-600">
                You can send money to Nigeria from over 30 countries, including the US, UK, Canada, and EU countries. For sending money from Nigeria, we currently support transfers to the US, UK, Canada, Australia, and most EU countries. We're continuously expanding our coverage.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Have more questions? We're here to help!
          </p>
          <Link 
            to="#" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 inline-flex items-center"
          >
            <HelpCircle size={16} className="mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-green-700 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of users who trust SolanaNaira for their international money transfers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/send-to-nigeria" 
            className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Send to Nigeria
          </Link>
          <Link 
            to="/send-abroad" 
            className="bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            Send Abroad
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;