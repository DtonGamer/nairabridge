import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SendToNigeria from './pages/SendToNigeria';
import SendAbroad from './pages/SendAbroad';
import Dashboard from './pages/Dashboard';
import KYCVerification from './pages/KYCVerification';
import TransactionSuccess from './pages/TransactionSuccess';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/send-to-nigeria" element={<SendToNigeria />} />
            <Route path="/send-abroad" element={<SendAbroad />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/kyc-verification" element={<KYCVerification />} />
            <Route path="/transaction-success" element={<TransactionSuccess />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;