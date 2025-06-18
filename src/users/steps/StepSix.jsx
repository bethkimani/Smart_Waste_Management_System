import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import jsPDF from 'jspdf';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

const StepSix = ({ formData, onUpdate, onComplete, navigate }) => {
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
    if (
      (formData.paymentMethod === 'card' && formData.cardNumber && formData.expiryDate && formData.securityCode) ||
      formData.paymentMethod === 'googlepay' ||
      formData.paymentMethod === 'paypal'
    ) {
      setIsConfirmModalOpen(true);
    } else {
      alert('Please select a payment method and fill required details.');
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
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.confirmEmail &&
      formData.phone &&
      formData.email === formData.confirmEmail
    ) {
      alert(`Confirmation email sent to ${formData.email}! Account created. Payment processed via ${formData.paymentMethod}.`);
      generateReceipt();
      onComplete();
    } else {
      alert('Please fill all fields and ensure emails match.');
    }
    setIsConfirmModalOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6"
    >
      <Card className="w-full sm:w-1/2 bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-teal-300">Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Delivery Address: {orderSummary.address}</p>
          <p className="mb-2">Delivery: {new Date(orderSummary.deliveryDate).toLocaleDateString('en-GB')}</p>
          <p className="mb-2">Collection: {new Date(orderSummary.collectionDate).toLocaleDateString('en-GB')}</p>
          <p className="mb-2">{orderSummary.skipSize} Yard Skip - {orderSummary.hirePeriod}</p>
          <p className="mb-2">Subtotal: £{orderSummary.price.toFixed(2)}</p>
          <p className="mb-2">VAT (20%): £{orderSummary.vat.toFixed(2)}</p>
          <p className="font-bold">Total: £{orderSummary.total.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card className="w-full sm:w-1/2 bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-teal-300">Payment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2 mb-4 flex-wrap">
            {['card', 'googlepay', 'paypal'].map(method => (
              <Button
                key={method}
                onClick={() => onUpdate({ ...formData, paymentMethod: method })}
                variant={formData.paymentMethod === method ? 'default' : 'outline'}
                className={`flex-1 ${formData.paymentMethod === method ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </Button>
            ))}
          </div>
          {formData.paymentMethod === 'card' && (
            <div className="space-y-4">
              <Input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => onUpdate({ ...formData, cardNumber: e.target.value })}
                placeholder="Card Number"
                className="bg-gray-700 text-white"
              />
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => onUpdate({ ...formData, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  className="w-1/2 bg-gray-700 text-white"
                />
                <Input
                  type="text"
                  value={formData.securityCode}
                  onChange={(e) => onUpdate({ ...formData, securityCode: e.target.value })}
                  placeholder="CVC"
                  className="w-1/2 bg-gray-700 text-white"
                />
              </div>
              <Select value={formData.country} onValueChange={(value) => onUpdate({ ...formData, country: value })}>
                <SelectTrigger className="bg-gray-700">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Kenya">Kenya</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center">
                <Checkbox
                  id="saveAsDefault"
                  checked={formData.saveAsDefault}
                  onCheckedChange={(checked) => onUpdate({ ...formData, saveAsDefault: checked })}
                />
                <Label htmlFor="saveAsDefault" className="ml-2 text-gray-300">
                  Save as default payment method
                </Label>
              </div>
              <Button
                onClick={handlePayment}
                disabled={!formData.cardNumber || !formData.expiryDate || !formData.securityCode}
                className="w-full bg-purple-500 hover:bg-purple-600"
              >
                Complete Payment
              </Button>
            </div>
          )}
          {(formData.paymentMethod === 'googlepay' || formData.paymentMethod === 'paypal') && (
            <Button
              onClick={handlePayment}
              className="w-full bg-purple-500 hover:bg-purple-600"
            >
              Pay with {formData.paymentMethod === 'googlepay' ? 'Google Pay' : 'PayPal'}
            </Button>
          )}
        </CardContent>
      </Card>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            const prevStep = formData.step - 1;
            onUpdate({ ...formData, step: prevStep });
            navigate(`/users/raise-request/step/${prevStep}`);
          }}
          className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          Back
        </button>
      </div>
      <AnimatePresence>
        {isConfirmModalOpen && (
          <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
            <DialogContent className="bg-gray-800 text-white">
              <DialogHeader>
                <DialogTitle className="text-teal-300">Create Account</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => onUpdate({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                    className="w-1/2 bg-gray-700 text-white"
                  />
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => onUpdate({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                    className="w-1/2 bg-gray-700 text-white"
                  />
                </div>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => onUpdate({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  className="bg-gray-700 text-white"
                />
                <Input
                  type="email"
                  value={formData.confirmEmail}
                  onChange={(e) => onUpdate({ ...formData, confirmEmail: e.target.value })}
                  placeholder="Confirm Email"
                  className="bg-gray-700 text-white"
                />
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => onUpdate({ ...formData, phone: e.target.value })}
                  placeholder="Phone"
                  className="bg-gray-700 text-white"
                />
              </div>
              <DialogFooter>
                <Button
                  variant="secondary"
                  onClick={() => setIsConfirmModalOpen(false)}
                  className="bg-gray-600 hover:bg-gray-500"
                >
                  Back
                </Button>
                <Button
                  onClick={handleConfirmAccount}
                  disabled={
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.confirmEmail ||
                    !formData.phone ||
                    formData.email !== formData.confirmEmail
                  }
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StepSix;