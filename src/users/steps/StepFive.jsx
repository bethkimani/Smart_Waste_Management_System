import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const StepFive = ({ formData, onUpdate, navigate }) => {
  const handleContinue = () => {
    if (formData.deliveryDate && formData.collectionDate) {
      const nextStep = formData.step + 1;
      onUpdate({ ...formData, step: nextStep });
      navigate(`/users/raise-request/step/${nextStep}`);
    }
  };

  const isContinueDisabled = !formData.deliveryDate || !formData.collectionDate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-teal-300">Schedule Collection</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">Select your preferred skip delivery date. We'll aim to deliver between 7am and 6pm.</p>
          <Input
            type="date"
            value={formData.deliveryDate}
            onChange={(e) => {
              const delivery = e.target.value;
              const collection = new Date(new Date(delivery).setDate(new Date(delivery).getDate() + 14)).toISOString().split('T')[0];
              onUpdate({ ...formData, deliveryDate: delivery, collectionDate: collection });
            }}
            className="bg-gray-700 text-white"
            min={new Date().toISOString().split('T')[0]}
          />
          <p className="text-gray-400">Collection Date: {formData.collectionDate || 'TBD'}</p>
        </CardContent>
      </Card>
      <div className="flex justify-between">
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
        <button
          onClick={handleContinue}
          disabled={isContinueDisabled}
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded disabled:bg-gray-500"
        >
          Continue
        </button>
      </div>
    </motion.div>
  );
};

export default StepFive;