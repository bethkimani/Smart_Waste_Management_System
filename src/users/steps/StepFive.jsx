import React from 'react';

const StepFive = ({ formData, onUpdate }) => {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-300">Select your preferred skip delivery date. We'll aim to deliver between 7am and 6pm.</p>
      <div className="bg-teal-800/50 p-4 rounded-lg">
        <input
          type="date"
          value={formData.deliveryDate}
          onChange={(e) => {
            const delivery = e.target.value;
            const collection = new Date(new Date(delivery).setDate(new Date(delivery).getDate() + 14)).toISOString().split('T')[0];
            onUpdate({ deliveryDate: delivery, collectionDate: collection });
          }}
          className="w-full p-3 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <p className="text-gray-400">Collection Date: {formData.collectionDate || 'TBD'}</p>
    </div>
  );
};

export default StepFive;