import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Check, AlertTriangle } from 'lucide-react';

const KYCVerification = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [verificationMethod, setVerificationMethod] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bvn: '',
    address: '',
    city: '',
    state: '',
    country: 'Nigeria',
    idType: '',
    idNumber: '',
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
    // In a real app, this would submit the KYC information for verification
    navigate('/dashboard');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Identity Verification</h1>
      
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              1
            </div>
            <span className="text-sm mt-1">Personal Info</span>
          </div>
          <div className={`flex-grow h-1 mx-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              2
            </div>
            <span className="text-sm mt-1">Verification</span>
          </div>
          <div className={`flex-grow h-1 mx-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-green-600' : 'text-gray-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
              3
            </div>
            <span className="text-sm mt-1">Review</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p className="text-gray-600 mb-6">
              Please provide your personal details for identity verification. This information is required to comply with regulatory requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+234"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-yellow-50 p-4 rounded-md mb-6">
                <div className="flex">
                  <div className="text-yellow-500 mr-3">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="text-sm text-yellow-700">
                    <p className="font-medium">Privacy Notice</p>
                    <p className="mt-1">
                      Your personal information is securely stored and only used for identity verification purposes. We comply with all applicable data protection regulations.
                    </p>
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
          </div>
        )}
        
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Identity Verification</h2>
            <p className="text-gray-600 mb-6">
              Please choose a verification method and provide the required information.
            </p>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verification Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setVerificationMethod('bvn')}
                  className={`border rounded-md p-4 flex flex-col items-center ${
                    verificationMethod === 'bvn' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={verificationMethod === 'bvn' ? 'text-green-500' : 'text-gray-400'}
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 15H17" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="mt-2 font-medium">BVN Verification</span>
                  <span className="text-xs text-gray-500 mt-1">For Nigerian residents</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setVerificationMethod('id')}
                  className={`border rounded-md p-4 flex flex-col items-center ${
                    verificationMethod === 'id' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={verificationMethod === 'id' ? 'text-green-500' : 'text-gray-400'}
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 8H17" stroke="currentColor" strokeWidth="2" />
                    <path d="M15 12H17" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 16H19" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <span className="mt-2 font-medium">ID Document</span>
                  <span className="text-xs text-gray-500 mt-1">Passport, Driver's License, etc.</span>
                </button>
              </div>
            </div>
            
            {verificationMethod === 'bvn' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="bvn" className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Verification Number (BVN)
                  </label>
                  <input
                    type="text"
                    id="bvn"
                    name="bvn"
                    value={formData.bvn}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your 11-digit BVN"
                    maxLength={11}
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Your BVN is a unique identifier issued by the Central Bank of Nigeria.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md">
                  <div className="flex">
                    <div className="text-blue-500 mr-3">
                      <Check size={20} />
                    </div>
                    <div className="text-sm text-blue-700">
                      <p className="font-medium">Benefits of BVN Verification</p>
                      <ul className="list-disc list-inside mt-1">
                        <li>Faster verification process</li>
                        <li>Enhanced security for your transactions</li>
                        <li>Simplified future transfers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {verificationMethod === 'id' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-1">
                    ID Document Type
                  </label>
                  <select
                    id="idType"
                    name="idType"
                    value={formData.idType}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="">Select ID Type</option>
                    <option value="passport">International Passport</option>
                    <option value="drivers_license">Driver's License</option>
                    <option value="national_id">National ID Card</option>
                    <option value="voters_card">Voter's Card</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    ID Number
                  </label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload ID Document (Front)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload ID Document (Back)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload-back"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload-back" name="file-upload-back" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Selfie with ID
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="selfie-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                        >
                          <span>Upload a file</span>
                          <input id="selfie-upload" name="selfie-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
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
                disabled={!verificationMethod}
                className={`bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 flex items-center ${
                  !verificationMethod ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
            <p className="text-gray-600 mb-6">
              Please review your information before submitting. Make sure all details are correct.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Personal Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm"> <div className="text-gray-500">Full Name:</div>
                <div className="font-medium">{formData.fullName || 'Adebayo Ogunlesi'}</div>
                
                <div className="text-gray-500">Email:</div>
                <div className="font-medium">{formData.email || 'adebayo@example.com'}</div>
                
                <div className="text-gray-500">Phone:</div>
                <div className="font-medium">{formData.phone || '+234 800 123 4567'}</div>
                
                <div className="text-gray-500">Country:</div>
                <div className="font-medium">{formData.country}</div>
                
                <div className="text-gray-500">Address:</div>
                <div className="font-medium">{formData.address || '123 Lagos Street'}</div>
                
                <div className="text-gray-500">City:</div>
                <div className="font-medium">{formData.city || 'Lagos'}</div>
                
                <div className="text-gray-500">State/Province:</div>
                <div className="font-medium">{formData.state || 'Lagos State'}</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-700 mb-2">Verification Method</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Method:</div>
                <div className="font-medium">
                  {verificationMethod === 'bvn' ? 'BVN Verification' : 'ID Document Verification'}
                </div>
                
                {verificationMethod === 'bvn' && (
                  <>
                    <div className="text-gray-500">BVN:</div>
                    <div className="font-medium">
                      {formData.bvn ? '**********' + formData.bvn.slice(-2) : '**********45'}
                    </div>
                  </>
                )}
                
                {verificationMethod === 'id' && (
                  <>
                    <div className="text-gray-500">ID Type:</div>
                    <div className="font-medium">
                      {formData.idType === 'passport' ? 'International Passport' : 
                       formData.idType === 'drivers_license' ? 'Driver\'s License' :
                       formData.idType === 'national_id' ? 'National ID Card' :
                       formData.idType === 'voters_card' ? 'Voter\'s Card' : 'International Passport'}
                    </div>
                    
                    <div className="text-gray-500">ID Number:</div>
                    <div className="font-medium">{formData.idNumber || 'A12345678'}</div>
                    
                    <div className="text-gray-500">Documents:</div>
                    <div className="font-medium">3 files uploaded</div>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-md mb-6">
              <div className="flex">
                <div className="text-green-500 mr-3">
                  <Check size={20} />
                </div>
                <div className="text-sm text-green-700">
                  <p className="font-medium">Verification Process</p>
                  <p className="mt-1">
                    Your identity verification will be processed within 24 hours. You'll receive an email notification once the verification is complete.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-green-600 focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-700">
                  I confirm that all the information provided is accurate and complete. I understand that providing false information may result in account termination.
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
                Submit Verification
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KYCVerification;