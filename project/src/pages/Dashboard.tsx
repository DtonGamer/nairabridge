import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle, XCircle, AlertTriangle, Filter, Download, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('transactions');
  const [filter, setFilter] = useState('all');
  
  // Mock transaction data
  const transactions = [
    {
      id: 'tx-001',
      type: 'send',
      direction: 'toNigeria',
      amount: 100,
      currency: 'USD',
      convertedAmount: 140000,
      convertedCurrency: 'NGN',
      recipient: 'Adebayo Ogunlesi',
      date: '2025-04-15T10:30:00',
      status: 'completed',
    },
    {
      id: 'tx-002',
      type: 'send',
      direction: 'fromNigeria',
      amount: 280000,
      currency: 'NGN',
      convertedAmount: 200,
      convertedCurrency: 'USD',
      recipient: 'John Smith',
      date: '2025-04-10T14:45:00',
      status: 'completed',
    },
    {
      id: 'tx-003',
      type: 'send',
      direction: 'toNigeria',
      amount: 50,
      currency: 'EUR',
      convertedAmount: 75000,
      convertedCurrency: 'NGN',
      recipient: 'Chioma Eze',
      date: '2025-04-05T09:15:00',
      status: 'pending',
    },
    {
      id: 'tx-004',
      type: 'send',
      direction: 'fromNigeria',
      amount: 140000,
      currency: 'NGN',
      convertedAmount: 100,
      convertedCurrency: 'USD',
      recipient: 'Sarah Johnson',
      date: '2025-04-01T16:20:00',
      status: 'failed',
    },
  ];
  
  // Filter transactions based on selected filter
  const filteredTransactions = transactions.filter(tx => {
    if (filter === 'all') return true;
    return tx.status === filter;
  });
  
  // Mock rate alerts data
  const rateAlerts = [
    {
      id: 'alert-001',
      direction: 'toNigeria',
      targetRate: 1450,
      currentRate: 1400,
      fromCurrency: 'USD',
      toCurrency: 'NGN',
      status: 'active',
      createdAt: '2025-04-10T10:30:00',
    },
    {
      id: 'alert-002',
      direction: 'fromNigeria',
      targetRate: 1350,
      currentRate: 1400,
      fromCurrency: 'NGN',
      toCurrency: 'USD',
      status: 'triggered',
      createdAt: '2025-04-05T14:45:00',
      triggeredAt: '2025-04-08T09:15:00',
    },
  ];
  
  // Format date to readable string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Get status icon based on transaction status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-500" />;
      case 'failed':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return null;
    }
  };
  
  // Get direction icon based on transaction direction
  const getDirectionIcon = (direction: string) => {
    return direction === 'toNigeria' 
      ? <ArrowDownRight size={16} className="text-green-500" />
      : <ArrowUpRight size={16} className="text-blue-500" />;
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your transfers and account settings</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <Link 
            to="/send-to-nigeria" 
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center"
          >
            <ArrowDownRight size={16} className="mr-2" />
            Send to Nigeria
          </Link>
          <Link 
            to="/send-abroad" 
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <ArrowUpRight size={16} className="mr-2" />
            Send Abroad
          </Link>
        </div>
      </div>
      
      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">Total Transfers</h3>
            <div className="bg-blue-100 text-blue-800 p-2 rounded-full">
              <ArrowUpRight size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">4</p>
          <p className="text-sm text-gray-500 mt-1">Last transfer: {formatDate(transactions[ 0].date)}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">Total Volume</h3>
            <div className="bg-green-100 text-green-800 p-2 rounded-full">
              <Download size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">$450.00</p>
          <p className="text-sm text-gray-500 mt-1">Equivalent to ₦630,000.00</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">Current Rate</h3>
            <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
              <Bell size={20} />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">₦1,400.00</p>
          <p className="text-sm text-gray-500 mt-1">1 USD = ₦1,400.00</p>
        </div>
      </div>
      
      {/* Dashboard Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'transactions'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab('rateAlerts')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'rateAlerts'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Rate Alerts
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === 'profile'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Profile & Settings
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'transactions' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Transaction History</h2>
                <div className="flex items-center">
                  <Filter size={16} className="text-gray-500 mr-2" />
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 text-sm"
                  >
                    <option value="all">All Transactions</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Direction
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Recipient
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTransactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(tx.date)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            {getDirectionIcon(tx.direction)}
                            <span className="ml-2">
                              {tx.direction === 'toNigeria' ? 'To Nigeria' : 'From Nigeria'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <span className="font-medium">
                              {tx.direction === 'toNigeria' 
                                ? `${tx.amount} ${tx.currency}`
                                : `₦${tx.amount.toLocaleString()}`}
                            </span>
                          </div>
                          <div className="text-gray-500">
                            {tx.direction === 'toNigeria' 
                              ? `₦${tx.convertedAmount.toLocaleString()}`
                              : `${tx.convertedAmount} ${tx.convertedCurrency}`}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {tx.recipient}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            {getStatusIcon(tx.status)}
                            <span className="ml-2 capitalize">{tx.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-green-600 hover:text-green-900">
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                    
                    {filteredTransactions.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                          No transactions found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'rateAlerts' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Exchange Rate Alerts</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm">
                  Create New Alert
                </button>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md mb-6">
                <div className="flex">
                  <div className="text-blue-500 mr-3">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="text-sm text-blue-700">
                    <p className="font-medium">How Rate Alerts Work</p>
                    <p className="mt-1">
                      Set up alerts to be notified when exchange rates reach your target levels. We'll send you an email and SMS when the conditions are met.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {rateAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4 bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            alert.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {alert.status === 'active' ? 'Active' : 'Triggered'}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">
                            Created on {formatDate(alert.createdAt)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-900 mt-2">
                          {alert.direction === 'toNigeria' 
                            ? `${alert.fromCurrency} to ${alert.toCurrency}` 
                            : `${alert.fromCurrency} to ${alert.toCurrency}`}
                        </h3>
                        
                        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                          <div className="text-gray-500">Target Rate:</div>
                          <div className="font-medium">
                            {alert.direction === 'toNigeria' 
                              ? `1 ${alert.fromCurrency} = ₦${alert.targetRate.toLocaleString()}`
                              : `₦${alert.targetRate.toLocaleString()} = 1 ${alert.toCurrency}`}
                          </div>
                          
                          <div className="text-gray-500">Current Rate:</div>
                          <div className="font-medium">
                            {alert.direction === 'toNigeria' 
                              ? `1 ${alert.fromCurrency} = ₦${alert.currentRate.toLocaleString()}`
                              : `₦${alert.currentRate.toLocaleString()} = 1 ${alert.toCurrency}`}
                          </div>
                          
                          {alert.status === 'triggered' && (
                            <>
                              <div className="text-gray-500">Triggered On:</div>
                              <div className="font-medium">{formatDate(alert.triggeredAt!)}</div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        {alert.status === 'active' && (
                          <button className="text-gray-600 hover:text-gray-900 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </button>
                        )}
                        <button className="text-gray-600 hover:text-gray-900 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {alert.status === 'active' && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-green-600 h-2.5 rounded-full" 
                            style={{ 
                              width: `${Math.min(100, (alert.currentRate / alert.targetRate) * 100)}%` 
                            }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Current: ₦{alert.currentRate}</span>
                          <span>Target: ₦{alert.targetRate}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {rateAlerts.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No rate alerts set up yet</p>
                    <button className="mt-2 text-green-600 hover:text-green-700">
                      Create your first alert
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Profile & Settings</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white border rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                          defaultValue="Adebayo Ogunlesi"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                          defaultValue="adebayo@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                          defaultValue="+234 800 123 4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="bvn" className="block text-sm font-medium text-gray-700 mb-1">
                          BVN
                        </label>
                        <input
                          type="text"
                          id="bvn"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                          defaultValue="**********45"
                          disabled
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          BVN cannot be changed once verified
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Save Changes
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white border rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">
                          Transaction Updates
                        </span>
                      </label>
                      
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">
                          Rate Alerts
                        </span>
                      </label>
                      
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" defaultChecked />
                        <span className="ml-2 text-sm text-gray-700">
                          Security Alerts
                        </span>
                      </label>
                      
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                        <span className="ml-2 text-sm text-gray-700">
                          Marketing & Promotions
                        </span>
                      </label>
                    </div>
                    
                    <div className="mt-6">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Connected Accounts</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">Solana Wallet</p>
                            <p className="text-xs text-gray-500">Connected</p>
                          </div>
                        </div>
                        <button className="text-red-600 hover:text-red-800 text-sm">
                          Disconnect
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <svg className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">Bank Account</p>
                            <p className="text-xs text-gray-500">Not connected</p>
                          </div>
                        </div>
                        <button className="text-green-600 hover:text-green-800 text-sm">
                          Connect
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;