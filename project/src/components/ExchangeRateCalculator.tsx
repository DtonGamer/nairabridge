import React, { useState, useEffect } from 'react';

interface ExchangeRateCalculatorProps {
  direction: 'toNigeria' | 'fromNigeria';
  rates: {
    usdToNgn: number;
    usdcToUsd: number;
    eurToNgn: number;
  };
}

const ExchangeRateCalculator: React.FC<ExchangeRateCalculatorProps> = ({ direction, rates }) => {
  const [amount, setAmount] = useState<string>('100');
  const [convertedAmount, setConvertedAmount] = useState<string>('0');
  const [currency, setCurrency] = useState<string>(direction === 'toNigeria' ? 'USD' : 'NGN');
  
  useEffect(() => {
    // Reset currency when direction changes
    setCurrency(direction === 'toNigeria' ? 'USD' : 'NGN');
  }, [direction]);
  
  useEffect(() => {
    // Calculate conversion based on direction and currency
    const numAmount = parseFloat(amount) || 0;
    let result = 0;
    
    if (direction === 'toNigeria') {
      if (currency === 'USD') {
        result = numAmount * rates.usdToNgn;
      } else if (currency === 'EUR') {
        result = numAmount * rates.eurToNgn;
      } else if (currency === 'USDC') {
        result = numAmount * rates.usdToNgn * rates.usdcToUsd;
      }
      setConvertedAmount(result.toFixed(2));
    } else {
      // fromNigeria
      if (currency === 'NGN') {
        const usdResult = numAmount / rates.usdToNgn;
        result = usdResult;
        setConvertedAmount(result.toFixed(2));
      }
    }
  }, [amount, currency, direction, rates]);
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };
  
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };
  
  return (
    <div className="text-gray-800">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {direction === 'toNigeria' ? 'You Send' : 'You Send'}
        </label>
        <div className="flex">
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="rounded-r-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50"
          >
            {direction === 'toNigeria' ? (
              <>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="USDC">USDC</option>
              </>
            ) : (
              <option value="NGN">NGN</option>
            )}
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {direction === 'toNigeria' ? 'Recipient Gets' : 'Recipient Gets'}
        </label>
        <div className="flex">
          <input
            type="text"
            value={convertedAmount}
            readOnly
            className="flex-grow rounded-l-md bg-gray-50 border-gray-300"
          />
          <div className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500">
            {direction === 'toNigeria' ? 'NGN' : 'USD'}
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Exchange Rate: 
          {direction === 'toNigeria' && currency === 'USD' && ` 1 USD = ${rates.usdToNgn.toFixed(2)} NGN`}
          {direction === 'toNigeria' && currency === 'EUR' && ` 1 EUR = ${rates.eurToNgn.toFixed(2)} NGN`}
          {direction === 'toNigeria' && currency === 'USDC' && ` 1 USDC = ${(rates.usdToNgn * rates.usdcToUsd).toFixed(2)} NGN`}
          {direction === 'fromNigeria' && ` ${rates.usdToNgn.toFixed(2)} NGN = 1 USD`}
        </p>
        <p>Fee: 2.5% + ₦100</p>
      </div>
    </div>
  );
};

export default ExchangeRateCalculator;