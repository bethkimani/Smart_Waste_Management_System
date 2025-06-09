import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepSix = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (cardNumber && expiryDate && securityCode && firstName && lastName && email && phone) {
      alert('Payment successful! Order placed.');
      navigate('/users/dashboard');
    }
  };

  const handleBack = () => {
    navigate('/users/waste-collection-process/step/5');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4">
        <div className="flex space-x-4 text-white">
          <span>Postcode</span>
          <span>Waste Type</span>
          <span>Choose Skip Size</span>
          <span>Permit Check</span>
          <span>Schedule Collection</span>
          <span className="text-blue-400">Payment Information</span>
        </div>
      </nav>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Payment Information</h2>
        <div className="mb-4">
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            placeholder="CVC"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Back
          </button>
          <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={!cardNumber || !expiryDate || !securityCode || !firstName || !lastName || !email || !phone}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepSix;