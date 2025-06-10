import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaypal, FaGooglePay, FaCcVisa } from 'react-icons/fa';
import jsPDF from 'jspdf';

const StepSix = () => {
  const navigate = useNavigate();
  const [orderSummary] = useState({
    address: '195 Ashby Road, Hinckley LE10 1SH',
    deliveryDate: '2025-06-20',
    collectionDate: '2025-06-26',
    skipSize: 5,
    hirePeriod: '14 days',
    price: 241.00,
    vat: 48.20,
    total: 289.20,
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [country, setCountry] = useState('Kenya');
  const [saveAsDefault, setSaveAsDefault] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePayment = () => {
    if (paymentMethod === 'card' && (cardNumber && expiryDate && securityCode)) {
      setIsConfirmModalOpen(true);
    } else if (paymentMethod === 'googlepay' || paymentMethod === 'paypal') {
      setIsConfirmModalOpen(true);
    }
  };

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('SmartTrash Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ORD-${Math.floor(Math.random() * 100000)}`, 20, 40);
    doc.text(`Customer: ${firstName} ${lastName}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Phone: ${phone}`, 20, 70);
    doc.text(`Address: ${orderSummary.address}`, 20, 80);
    doc.text(`Delivery Date: ${new Date(orderSummary.deliveryDate).toLocaleDateString('en-GB')}`, 20, 90);
    doc.text(`Collection Date: ${new Date(orderSummary.collectionDate).toLocaleDateString('en-GB')}`, 20, 100);
    doc.text(`Skip Size: ${orderSummary.skipSize} Yard`, 20, 110);
    doc.text(`Hire Period: ${orderSummary.hirePeriod}`, 20, 120);
    doc.text(`Subtotal: £${orderSummary.price.toFixed(2)}`, 20, 130);
    doc.text(`VAT (20%): £${orderSummary.vat.toFixed(2)}`, 20, 140);
    doc.text(`Total: £${orderSummary.total.toFixed(2)}`, 20, 150);
    doc.text(`Payment Method: ${paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1)}`, 20, 160);
    doc.text(`Date: ${new Date().toLocaleDateString('en-GB')}`, 20, 170);
    doc.save(`SmartTrash_Receipt_${Date.now()}.pdf`);
  };

  const handleConfirmAccount = () => {
    if (firstName && lastName && email && confirmEmail && phone && email === confirmEmail) {
      alert(`Confirmation email sent to ${email}! Account created. Payment processed via ${paymentMethod}.`);
      generateReceipt();
      navigate('/users/dashboard');
    }
    setIsConfirmModalOpen(false);
  };

  const handleBack = () => {
    navigate('/users/raise-request/step/5');
  };

  const openPaymentModal = () => setIsPaymentModalOpen(true);
  const closePaymentModal = () => setIsPaymentModalOpen(false);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6">
      <nav className="bg-green-900 p-4 flex justify-between mb-4 flex-wrap">
        <div className="flex space-x-4 text-white flex-wrap">
          <span>Postcode</span>
          <span>Waste Type</span>
          <span>Choose Skip Size</span>
          <span>Permit Check</span>
          <span>Schedule Collection</span>
          <span className="text-blue-400">Payment Information</span>
        </div>
      </nav>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        {/* Order Summary */}
        <div className="w-full sm:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Order Summary</h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Delivery Address</h3>
            <p>{orderSummary.address}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Delivery & Collection</h3>
            <p>Delivery: {new Date(orderSummary.deliveryDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p>Collection: {new Date(orderSummary.collectionDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{orderSummary.skipSize} Yard Skip</h3>
            <p>{orderSummary.hirePeriod} hire period</p>
            <p>£{orderSummary.price.toFixed(2)} + VAT £{orderSummary.vat.toFixed(2)}</p>
          </div>
          <div className="border-t pt-4">
            <p>Subtotal (excl. VAT): £{orderSummary.price.toFixed(2)}</p>
            <p>VAT (20%): £{orderSummary.vat.toFixed(2)}</p>
            <p className="font-bold mt-2">Total: £{orderSummary.total.toFixed(2)}</p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="w-full sm:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Payment Details</h2>
          <div className="mb-4">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-1/2 p-2 rounded-l ${paymentMethod === 'card' ? 'bg-blue-500' : 'bg-gray-700'} text-white`}
            >
              Card
            </button>
            <button
              onClick={() => setPaymentMethod('googlepay')}
              className={`w-1/2 p-2 ${paymentMethod === 'googlepay' ? 'bg-blue-500' : 'bg-gray-700'} text-white`}
            >
              Google Pay
            </button>
            <button
              onClick={() => setPaymentMethod('paypal')}
              className={`w-full p-2 mt-2 ${paymentMethod === 'paypal' ? 'bg-blue-500' : 'bg-gray-700'} text-white`}
            >
              PayPal
            </button>
          </div>

          {paymentMethod === 'card' && (
            <div className="mb-4">
              <div className="bg-gray-700 p-4 rounded mb-2">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Card Number"
                  className="w-full p-2 mb-2 bg-gray-600 text-white rounded"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="w-1/2 p-2 mb-2 bg-gray-600 text-white rounded"
                  />
                  <input
                    type="text"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
                    placeholder="CVC"
                    className="w-1/2 p-2 mb-2 bg-gray-600 text-white rounded"
                  />
                </div>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-2 mb-2 bg-gray-600 text-white rounded"
                >
                  <option value="Kenya">Kenya</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                </select>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={saveAsDefault}
                    onChange={(e) => setSaveAsDefault(e.target.checked)}
                    className="mr-2"
                  />
                  Save this card as default payment method
                </label>
              </div>
              <button
                onClick={openPaymentModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                disabled={!cardNumber || !expiryDate || !securityCode}
              >
                Complete Payment
              </button>
            </div>
          )}

          {(paymentMethod === 'googlepay' || paymentMethod === 'paypal') && (
            <button
              onClick={openPaymentModal}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
            >
              Pay with {paymentMethod === 'googlepay' ? 'Google Pay' : 'PayPal'}
            </button>
          )}

          <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4 w-full">
            Back
          </button>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Create Account</h2>
            <p className="mb-4">To help you track your order and manage your skip hire, we'll create an account for you.</p>
            <div className="mb-4">
              <div className="flex space-x-4 mb-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="w-1/2 p-2 bg-gray-700 text-white rounded"
                  required
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="w-1/2 p-2 bg-gray-700 text-white rounded"
                  required
                />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                required
              />
              <input
                type="email"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
                placeholder="Confirm your email"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                required
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number for order updates"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
                required
              />
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex space-x-4">
                <FaCcVisa size={24} />
                <FaGooglePay size={24} />
                <FaPaypal size={24} />
              </div>
              <span className="text-red-500">{!email && 'Please fill out this field.'}</span>
            </div>
            <div className="flex justify-end space-x-4">
              <button onClick={closePaymentModal} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Go Back To Payment
              </button>
              <button
                onClick={handleConfirmAccount}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={!firstName || !lastName || !email || !confirmEmail || !phone || email !== confirmEmail}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepSix;