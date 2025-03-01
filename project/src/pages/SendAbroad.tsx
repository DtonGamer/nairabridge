import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Info, CreditCard, Landmark, Phone } from 'lucide-react';
import ExchangeRateCalculator from '../components/ExchangeRateCalculator';

const SendAbroad = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [recipientMethod, setRecipientMethod] = useState<string>('');
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    recipientCountry: '',
    recipientPaypal: '',
    recipientBank: '',
    recipientAccountNumber: '',
    recipientSwift: '',
    senderName: '',
    senderEmail: '',
    senderPhone: '',
    senderBvn: '',
  });
  
  const [exchangeRates, setExchangeRates] = useState({
    usdToNgn: 1400,
    usdcToUsd: 1,
    eurToNgn: 1500
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment and initiate the transfer
    navigate('/transaction-success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Send Money Abroad</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              1
            </div>
            <span className="text-sm mt-1">Amount</span>
          </div>
          <div className={`flex-grow h-1 mx-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              2
            </div>
            <span className="text-sm mt-1">Recipient</span>
          </div>
          <div className={`flex-grow h-1 mx-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              3
            </div>
            <span className="text-sm mt-1">Sender</span>
          </div>
          <div className={`flex-grow h-1 mx-2 ${step >= 4 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 4 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              4
            </div>
            <span className="text-sm mt-1">Confirm</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">How much would you like to send?</h2>
            <div className="mb-6">
              <ExchangeRateCalculator direction="fromNigeria" rates={exchangeRates} />
            </div>
            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="text-blue-500 mr-3">
                  <Info size={20} />
                </div>
                <div className="text-sm text-blue-700">
                  <p className="font-medium">Why choose SolanaNaira for international transfers?</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>Send money to over 100 countries worldwide</li>
                    <li>Recipients can receive funds via bank transfer or PayPal</li>
                    <li>Transparent fees and competitive exchange rates</li>
                    <li>Fast processing with blockchain technology</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleNextStep}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center"
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Recipient Information</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How should the recipient receive the money?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setRecipientMethod('bank')}
                  className={`border rounded-md p-4 flex flex-col items-center ${
                    recipientMethod === 'bank' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <Landmark size={24} className={recipientMethod === 'bank' ? 'text-green-500' : 'text-gray-400'} />
                  <span className="mt-2 font-medium">Bank Account</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setRecipientMethod('paypal')}
                  className={`border rounded-md p-4 flex flex-col items-center ${
                    recipientMethod === 'paypal' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={recipientMethod === 'paypal' ? 'text-green-500' : 'text-gray-400'}
                  >
                    <path d="M19.5 8.25H4.5C4.08579 8.25 3.75 8.58579 3.75 9V15C3.75 15.4142 4.08579 15.75 4.5 15.75H19.5C19.9142 15.75 20.25 15.4142 20.25 15V9C20.25 8.58579 19.9142 8.25 19.5 8.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 12C16.5 13.6569 15.1569 15 13.5 15C11.8431 15 10.5 13.6569 10.5 12C10.5 10.3431 11.8431 9 13.5 9C15.1569 9 16.5 10.3431 16.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.75 12H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mt-2 font-medium">PayPal</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setRecipientMethod('crypto')}
                  className={`border rounded-md p-4 flex flex-col items-center ${
                    recipientMethod === 'crypto' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={recipientMethod === 'crypto' ? 'text-green-500' : 'text-gray-400'}
                  >
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 8.25H15C15.4142 8.25 15.75 8.58579 15.75 9V11.25C15.75 11.6642 15.4142 12 15 12H9C8.58579 12 8.25 11.6642 8.25 11.25V9C8.25 8.58579 8.58579 8.25 9 8.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12.75H15C15.4142 12.75 15.75 13.0858 15.75 13.5V15.75C15.75 16.1642 15.4142 16.5 15 16.5H9C8.58579 16.5 8.25 16.1642 8.25 15.75V13.5C8.25 13.0858 8.58579 12.75 9 12.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8.25V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="mt-2 font-medium">USDC Wallet</span>
                </button>
              </div>
            </div>
            
            {recipientMethod && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient's Full Name
                  </label>
                  <input
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient's Email
                  </label>
                  <input
                    type="email"
                    id="recipientEmail"
                    name="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="recipientCountry" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient's Country
                  </label>
                  <select
                    id="recipientCountry"
                    name="recipientCountry"
                    value={formData.recipientCountry}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                  </select>
                </div>
                
                {recipientMethod === 'bank' && (
                  <>
                    <div>
                      <label htmlFor="recipientBank" className="block text-sm font-medium text-gray-700 mb-1">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        id="recipientBank"
                        name="recipientBank"
                        value={formData.recipientBank}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="recipientAccountNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Account Number
                      </label>
                      <input
                        type="text"
                        id="recipientAccountNumber"
                        name="recipientAccountNumber"
                        value={formData.recipientAccountNumber}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="recipientSwift" className="block text-sm font-medium text-gray-700 mb-1">
                        SWIFT/BIC Code
                      </label>
                      <input
                        type="text"
                        id="recipientSwift"
                        name="recipientSwift"
                        value={formData.recipientSwift}
                        onChange={handleInputChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </>
                )}
                
                {recipientMethod === 'paypal' && (
                  <div>
                    <label htmlFor="recipientPaypal" className="block text-sm font-medium text-gray-700 mb-1">
                      PayPal Email
                    </label>
                    <input
                      type="email"
                      id="recipientPaypal"
                      name="recipientPaypal"
                      value={formData.recipientPaypal}
                      onChange={handleInputChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                      required
                    />
                  </div>
                )}
                
                {recipientMethod === 'crypto' && (
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <div className="flex">
                      <div className="text-yellow-500 mr-3">
                        <Info size={20} />
                      </div>
                      <p className="text-sm text-yellow-700">
                        The recipient will receive USDC tokens directly to their Solana wallet. We'll generate a unique payment link that you can share with them.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                className="text-gray-600 px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                disabled={!recipientMethod}
                className={`bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center ${
                  !recipientMethod ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="senderPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="senderPhone"
                  name="senderPhone"
                  value={formData.senderPhone}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="senderBvn" className="block text-sm font-medium text-gray-700 mb-1">
                  Your BVN (Bank Verification Number)
                </label>
                <input
                  type="text"
                  id="senderBvn"
                  name="senderBvn"
                  value={formData.senderBvn}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  Your BVN is required for regulatory compliance. We'll verify this information with Flutterwave.
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex">
                  <div className="text-blue-500 mr-3">
                    <Info size={20} />
                  </div>
                  <div className="text-sm text-blue-700">
                    <p className="font-medium">Why do we need your BVN?</p>
                    <p className="mt-1">
                      Nigerian regulations require us to verify your identity for international transfers. Your BVN helps us comply with these regulations and protect against fraud.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                  <span className="ml-2 text-sm text-gray-700">
                    I consent to the processing of my personal information for identity verification purposes.
                  </span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevStep}
                className="text-gray-600 px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleNextStep}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center"
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Confirm Your Transfer</h2>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Transfer Details</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Amount to Send:</div>
                <div className="font-medium">₦140,000.00 NGN</div>
                
                <div className="text-gray-500">Recipient Gets:</div>
                <div className="font-medium">$100.00 USD</div>
                
                <div className="text-gray-500">Fee:</div>
                <div className="font-medium">₦3,500.00 NGN</div>
                
                <div className="text-gray-500">Exchange Rate:</div>
                <div className="font-medium">₦1,400.00 NGN = 1 USD</div>
                
                <div className="text-gray-500">Delivery Time:</div>
                <div className="font-medium">1-2 business days</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Recipient Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Name:</div>
                <div className="font-medium">{formData.recipientName || 'John Smith'}</div>
                
                <div className="text-gray-500">Email:</div>
                <div className="font-medium">{formData.recipientEmail || 'john.smith@example.com'}</div>
                
                <div className="text-gray-500">Country:</div>
                <div className="font-medium">
                  {formData.recipientCountry === 'us' ? 'United States' : 
                   formData.recipientCountry === 'uk' ? 'United Kingdom' :
                   formData.recipientCountry === 'ca' ? 'Canada' :
                   formData.recipientCountry === 'au' ? 'Australia' :
                   formData.recipientCountry === 'de' ? 'Germany' :
                   formData.recipientCountry === 'fr' ? 'France' : 'United States'}
                </div>
                
                {recipientMethod === 'bank' && (
                  <>
                    <div className="text-gray-500">Bank:</div>
                    <div className="font-medium">{formData.recipientBank || 'Chase Bank'}</div>
                    
                    <div className="text-gray-500">Account Number:</div>
                    <div className="font-medium">{formData.recipientAccountNumber || '************1234'}</div>
                    
                    <div className="text-gray-500">SWIFT/BIC:</div>
                    <div className="font-medium">{formData.recipientSwift || 'CHASUS33'}</div>
                  </>
                )}
                
                {recipientMethod === 'paypal' && (
                  <>
                    <div className="text-gray-500">PayPal Email:</div>
                    <div className="font-medium">{formData.recipientPaypal || 'john.smith@example.com'}</div>
                  </>
                )}
                
                {recipientMethod === 'crypto' && (
                  <>
                    <div className="text-gray-500">Wallet Type:</div>
                    <div className="font-medium">Solana (USDC)</div>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Sender Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Name:</div>
                <div className="font-medium">{formData.senderName || 'Adebayo Ogunlesi'}</div>
                
                <div className="text-gray-500">Email:</div>
                <div className="font-medium">{formData.senderEmail || 'adebayo@example.com'}</div>
                
                <div className="text-gray-500">Phone:</div>
                <div className="font-medium">{formData.senderPhone || '+234 800 123 4567'}</div>
                
                <div className="text-gray-500">BVN:</div>
                <div className="font-medium">{formData.senderBvn ? '**********' + formData.senderBvn.slice(-2) : '**********45'}</div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="text-yellow-500 mr-3">
                  <Info size={20} />
                </div>
                <div className="text-sm text-yellow-700">
                  <p className="font-medium">Payment Process</p>
                  <p className="mt-1">
                    After confirming, you'll be redirected to Flutterwave to complete your payment. Once the payment is processed, we'll convert your NGN to USDC and send it to the recipient.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={handlePrevStep}
                className="text-gray-600 px-6 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendAbroad;