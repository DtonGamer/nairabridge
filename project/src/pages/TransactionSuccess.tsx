import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Copy, ArrowRight } from 'lucide-react';

const TransactionSuccess = () => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [countdown, setCountdown] = useState(10);
  
  // Mock transaction data - in a real app, this would come from the previous page's state
  const transaction = {
    id: 'TX' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
    date: new Date().toISOString(),
    amount: location.pathname.includes('abroad') ? '₦140,000.00' : '$100.00',
    fee: location.pathname.includes('abroad') ? '₦3,500.00' : '$2.50',
    total: location.pathname.includes('abroad') ? '₦143,500.00' : '$102.50',
    recipient: location.pathname.includes('abroad') ? 'John Smith' : 'Adebayo Ogunlesi',
    recipientDetails: location.pathname.includes('abroad') 
      ? 'john.smith@example.com (PayPal)'
      : 'GTBank - 0123456789',
    exchangeRate: location.pathname.includes('abroad') 
      ? '₦1,400.00 = $1.00'
      : '$1.00 = ₦1,400.00',
    estimatedDelivery: location.pathname.includes('abroad') ? '1-2 business days' : 'Within minutes',
  };
  
  useEffect(() => {
    // Auto-redirect countdown
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  
  const handleCopyTransactionId = () => {
    navigator.clipboard.writeText(transaction.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Transaction Successful!</h1>
        <p className="text-gray-600 mt-2">
          Your money transfer has been initiated successfully.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Transaction Details</h2>
            <div className="flex items-center">
              <span className="text-sm mr-2">Transaction ID: {transaction.id}</span>
              <button 
                onClick={handleCopyTransactionId}
                className="text-white hover:text-green-200"
              >
                {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">{formatDate(transaction.date)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-medium text-green-600">Processing</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Transfer Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">{transaction.amount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Fee</p>
                <p className="font-medium">{transaction.fee}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-medium">{transaction.total}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Exchange Rate</p>
                <p className="font-medium">{transaction.exchangeRate}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Recipient Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium">{transaction.recipient}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Details</p>
                <p className="font-medium">{transaction.recipientDetails}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="font-medium">{transaction.estimatedDelivery}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <p className="text-sm text-blue-700">
              We'll send you an email and SMS notification once the money has been delivered to the recipient.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link 
              to="/dashboard" 
              className="text-green-600 hover:text-green-700 font-medium"
            >
              View in Dashboard
            </Link>
            <div className="flex space-x-4">
              <button className="text-gray-600 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50">
                Download Receipt
              </button>
              <Link 
                to="/" 
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
              >
                Back to Home <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Redirecting to dashboard in {countdown} seconds...
        </p>
      </div>
    </div>
  );
};

export default TransactionSuccess;