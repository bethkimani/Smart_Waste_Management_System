import React, { useState } from 'react';
import { FaPaypal, FaGooglePay, FaCcVisa } from 'react-icons/fa';
import jsPDF from 'jspdf';

const StepSix = ({ formData, onUpdate, onComplete }) => {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const orderSummary = {
    address: formData.address,
    deliveryDate: formData.deliveryDate,
    collectionDate: formData.collectionDate,
    skipSize: formData.skipSize?.size || 5,
    hirePeriod: formData.skipSize?.hire_period_days || '14 days',
    price: formData.skipSize?.price_before_vat || 241.00,
    vat: formData.skipSize ? (formData.skipSize.price_before_vat * formData.skipSize.vat / 100) : 48.20,
    total: formData.skipSize ? (formData.skipSize.price_before_vat + (formData.skipSize.price_before_vat * formData.skipSize.vat / 100)) : 289.20,
  };

  const handlePayment = () => {
    if (formData.paymentMethod === 'card' && formData.cardNumber && formData.expiryDate && formData.securityCode) {
      setIsConfirmModalOpen(true);
    } else if (formData.paymentMethod === 'googlepay' || formData.paymentMethod === 'paypal') {
      setIsConfirmModalOpen(true);
    }
  };

  const generateReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('SmartTrash Receipt', 20, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ORD-${Math.floor(Math.random() * 100000)}`, 20, 40);
    doc.text(`Customer: ${formData.firstName} ${formData.lastName}`, 20, 50);
    doc.text(`Email: ${formData.email}`, 20, 60);
    doc.text(`Phone: ${formData.phone}`, 20, 70);
    doc.text(`Address: ${orderSummary.address}`, 20, 80);
    doc.text(`Delivery Date: ${new Date(orderSummary.deliveryDate).toLocaleDateString('en-GB')}`, 20, 90);
    doc.text(`Collection Date: ${new Date(orderSummary.collectionDate).toLocaleDateString('en-GB')}`, 20, 100);
    doc.text(`Skip Size: ${orderSummary.skipSize} Yard`, 20, 110);
    doc.text(`Hire Period: ${orderSummary.hirePeriod}`, 20, 120);
    doc.text(`Subtotal: £${orderSummary.price.toFixed(2)}`, 20, 130);
    doc.text(`VAT (20%): £${orderSummary.vat.toFixed(2)}`, 20, 140);
    doc.text(`Total: £${orderSummary.total.toFixed(2)}`, 20, 150);
    doc.text(`Payment Method: ${formData.paymentMethod.charAt(0).toUpperCase() + formData.paymentMethod.slice(1)}`, 20, 160);
    doc.text(`Date: ${new Date().toLocaleDateString('en-GB')}`, 20, 170);
    doc.save(`SmartTrash_Receipt_${Date.now()}.pdf`);
  };

  const handleConfirmAccount = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.confirmEmail && formData.phone && formData.email === formData.confirmEmail) {
      alert(`Confirmation email sent to ${formData.email}! Account created. Payment processed via ${formData.paymentMethod}.`);
      generateReceipt();
      onComplete();
    }
    setIsConfirmModalOpen(false);
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
      <div className="w-full sm:w-1/2 bg-teal-800/50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-teal-300">Order Summary</h3>
        <p className="mb-2">Delivery Address: {orderSummary.address}</p>
        <p className="mb-2">Delivery: {new Date(orderSummary.deliveryDate).toLocaleDateString('en-GB')}</p>
        <p className="mb-2">Collection: {new Date(orderSummary.collectionDate).toLocaleDateString('en-GB')}</p>
        <p className="mb-2">{orderSummary.skipSize} Yard Skip - {orderSummary.hirePeriod}</p>
        <p className="mb-2">Subtotal: £{orderSummary.price.toFixed(2)}</p>
        <p className="mb-2">VAT (20%): £{orderSummary.vat.toFixed(2)}</p>
        <p className="font-bold">Total: £{orderSummary.total.toFixed(2)}</p>
      </div>
      <div className="w-full sm:w-1/2 bg-teal-800/50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-teal-300">Payment Details</h3>
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => onUpdate({ paymentMethod: 'card' })}
            className={`flex-1 p-3 rounded-l ${formData.paymentMethod === 'card' ? 'bg-purple-500' : 'bg-white/10'} text-white`}
          >
            Card
          </button>
          <button
            onClick={() => onUpdate({ paymentMethod: 'googlepay' })}
            className={`flex-1 p-3 ${formData.paymentMethod === 'googlepay' ? 'bg-purple-500' : 'bg-white/10'} text-white`}
          >
            Google Pay
          </button>
          <button
            onClick={() => onUpdate({ paymentMethod: 'paypal' })}
            className={`flex-1 p-3 rounded-r ${formData.paymentMethod === 'paypal' ? 'bg-purple-500' : 'bg-white/10'} text-white`}
          >
            PayPal
          </button>
        </div>
        {formData.paymentMethod === 'card' && (
          <div className="space-y-4">
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => onUpdate({ cardNumber: e.target.value })}
              placeholder="Card Number"
              className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                value={formData.expiryDate}
                onChange={(e) => onUpdate({ expiryDate: e.target.value })}
                placeholder="MM/YY"
                className="w-1/2 p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
              <input
                type="text"
                value={formData.securityCode}
                onChange={(e) => onUpdate({ securityCode: e.target.value })}
                placeholder="CVC"
                className="w-1/2 p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
            </div>
            <select
              value={formData.country}
              onChange={(e) => onUpdate({ country: e.target.value })}
              className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
            >
              <option value="Kenya">Kenya</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
            </select>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.saveAsDefault}
                onChange={(e) => onUpdate({ saveAsDefault: e.target.checked })}
                className="mr-2 text-teal-400 focus:ring-teal-400"
              />
              <span className="text-gray-300">Save as default payment method</span>
            </label>
            <button
              onClick={handlePayment}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition disabled:opacity-50"
              disabled={!formData.cardNumber || !formData.expiryDate || !formData.securityCode}
            >
              Complete Payment
            </button>
          </div>
        )}
        {(formData.paymentMethod === 'googlepay' || formData.paymentMethod === 'paypal') && (
          <button
            onClick={handlePayment}
            className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Pay with {formData.paymentMethod === 'googlepay' ? 'Google Pay' : 'PayPal'}
          </button>
        )}
      </div>
      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-teal-800/50 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-teal-300">Create Account</h2>
            <p className="mb-4 text-gray-300">To track your order, we'll create an account for you.</p>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => onUpdate({ firstName: e.target.value })}
                  placeholder="First Name"
                  className="w-1/2 p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => onUpdate({ lastName: e.target.value })}
                  placeholder="Last Name"
                  className="w-1/2 p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
                />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => onUpdate({ email: e.target.value })}
                placeholder="Email"
                className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
              <input
                type="email"
                value={formData.confirmEmail}
                onChange={(e) => onUpdate({ confirmEmail: e.target.value })}
                placeholder="Confirm Email"
                className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => onUpdate({ phone: e.target.value })}
                placeholder="Phone"
                className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Back
              </button>
              <button
                onClick={handleConfirmAccount}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition disabled:opacity-50"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.confirmEmail || !formData.phone || formData.email !== formData.confirmEmail}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepSix;