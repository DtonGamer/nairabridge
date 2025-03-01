import axios from 'axios';

// Mock API endpoints
const API_BASE_URL = 'https://api.solananaira.com';

// Mock exchange rate API
export const fetchExchangeRates = async () => {
  try {
    // In a real app, this would call an actual API
    // For now, we'll return mock data
    return {
      usdToNgn: 1400 + (Math.random() * 20 - 10),
      usdcToUsd: 0.99 + (Math.random() * 0.02),
      eurToNgn: 1500 + (Math.random() * 20 - 10)
    };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};

// Mock Flutterwave API for collecting payments in Nigeria
export const initiateFlutterwavePayment = async (
  amount: number,
  email: string,
  phone: string,
  name: string,
  redirectUrl: string
) => {
  try {
    // In a real app, this would call the Flutterwave API
    // For now, we'll return mock data
    return {
      status: 'success',
      message: 'Payment link generated',
      data: {
        link: `https://checkout.flutterwave.com/pay/${Math.random().toString(36).substring(2, 15)}`,
      },
    };
  } catch (error) {
    console.error('Error initiating Flutterwave payment:', error);
    throw error;
  }
};

// Mock BVN verification API
export const verifyBVN = async (bvn: string, firstName: string, lastName: string) => {
  try {
    // In a real app, this would call the Flutterwave BVN verification API
    // For now, we'll return mock data
    
    // Check if BVN is 11 digits (simple validation)
    if (!/^\d{11}$/.test(bvn)) {
      return {
        status: 'error',
        message: 'Invalid BVN format',
      };
    }
    
    return {
      status: 'success',
      message: 'BVN verified successfully',
      data: {
        bvn,
        first_name: firstName,
        last_name: lastName,
        is_verified: true,
      },
    };
  } catch (error) {
    console.error('Error verifying BVN:', error);
    throw error;
  }
};

// Mock MoonPay API for off-ramping USDC to fiat
export const createMoonPayTransaction = async (
  amount: number,
  currency: string,
  email: string,
  walletAddress: string
) => {
  try {
    // In a real app, this would call the MoonPay API
    // For now, we'll return mock data
    return {
      status: 'success',
      message: 'MoonPay transaction created',
      data: {
        id: Math.random().toString(36).substring(2, 15),
        url: `https://buy.moonpay.com?apiKey=pk_test_123&currencyCode=${currency}&walletAddress=${walletAddress}&email=${email}&baseCurrencyAmount=${amount}`,
      },
    };
  } catch (error) {
    console.error('Error creating MoonPay transaction:', error);
    throw error;
  }
};

// Mock API for sending money to Nigerian bank accounts
export const sendMoneyToNigerianBank = async (
  amount: number,
  bankCode: string,
  accountNumber: string,
  accountName: string,
  narration: string
) => {
  try {
    // In a real app, this would call the Flutterwave Transfer API
    // For now, we'll return mock data
    return {
      status: 'success',
      message: 'Transfer initiated successfully',
      data: {
        id: Math.random().toString(36).substring(2, 15),
        account_number: accountNumber,
        bank_code: bankCode,
        full_name: accountName,
        amount,
        narration,
        currency: 'NGN',
        status: 'SUCCESSFUL',
        reference: `TR-${Date.now()}`,
        meta: {
          source: 'balance',
        },
        created_at: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error('Error sending money to Nigerian bank:', error);
    throw error;
  }
};

// Mock API for sending money to mobile money in Nigeria
export const sendMoneyToMobileMoney = async (
  amount: number,
  provider: string,
  phoneNumber: string,
  name: string
) => {
  try {
    // In a real app, this would call the Flutterwave Mobile Money API
    // For now, we'll return mock data
    return {
      status: 'success',
      message: 'Mobile money transfer initiated successfully',
      data: {
        id: Math.random().toString(36).substring(2, 15),
        phone_number: phoneNumber,
        provider,
        amount,
        currency: 'NGN',
        status: 'SUCCESSFUL',
        reference: `MM-${Date.now()}`,
        created_at: new Date().toISOString(),
      },
    };
  } catch (error) {
    console.error('Error sending money to mobile money:', error);
    throw error;
  }
};