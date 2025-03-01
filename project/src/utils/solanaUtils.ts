import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createQR } from '@solana/pay';

// Mock Solana connection for development
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// Convert USDC amount to lamports (Solana's smallest unit)
// Note: This is a simplified version. In production, you'd use proper USDC SPL token transfers
export const usdcToLamports = (amount: number): number => {
  // Mock conversion rate: 1 USDC = 1 SOL for simplicity
  // In production, you'd use the actual USDC SPL token with proper decimals
  return amount * LAMPORTS_PER_SOL;
};

// Create a Solana Pay QR code for a transfer
export const createSolanaPayQR = async (
  recipient: string,
  amountUsdc: number,
  reference: string,
  label: string,
  message: string
): Promise<string> => {
  try {
    // Convert recipient string to PublicKey
    const recipientPublicKey = new PublicKey(recipient);
    
    // Create a Solana Pay URL
    const url = new URL('solana:');
    url.pathname = recipientPublicKey.toBase58();
    url.searchParams.append('amount', amountUsdc.toString());
    url.searchParams.append('reference', reference);
    url.searchParams.append('label', label);
    url.searchParams.append('message', message);
    
    // Generate QR code
    const qr = createQR(url);
    
    // In a real app, you'd convert this to an image
    // For now, we'll just return the URL as a string
    return url.toString();
  } catch (error) {
    console.error('Error creating Solana Pay QR:', error);
    throw error;
  }
};

// Create a transaction for sending USDC
// Note: This is a simplified version using SOL transfers instead of USDC SPL token transfers
export const createSolanaTransaction = async (
  sender: string,
  recipient: string,
  amountUsdc: number
): Promise<Transaction> => {
  try {
    // Convert sender and recipient strings to PublicKeys
    const senderPublicKey = new PublicKey(sender);
    const recipientPublicKey = new PublicKey(recipient);
    
    // Convert USDC amount to lamports
    const lamports = usdcToLamports(amountUsdc);
    
    // Create a new transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderPublicKey,
        toPubkey: recipientPublicKey,
        lamports,
      })
    );
    
    // Get the latest blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = senderPublicKey;
    
    return transaction;
  } catch (error) {
    console.error('Error creating Solana transaction:', error);
    throw error;
  }
};

// Verify a Solana transaction
export const verifySolanaTransaction = async (signature: string): Promise<boolean> => {
  try {
    // Get transaction details
    const transaction = await connection.getTransaction(signature);
    
    // Check if transaction exists and is confirmed
    return transaction !== null && transaction.meta !== null && !transaction.meta.err;
  } catch (error) {
    console.error('Error verifying Solana transaction:', error);
    return false;
  }
};