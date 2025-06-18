import React, { useState } from 'react';
import { motion } from 'framer-motion';

const StepTwo = ({ formData, onUpdate, navigate }) => {
  const [wasteTypes, setWasteTypes] = useState(formData.wasteTypes || []);

  const handleWasteTypeChange = (e) => {
    const value = e.target.value;
    const updatedWasteTypes = wasteTypes.includes(value)
      ? wasteTypes.filter((item) => item !== value)
      : [...wasteTypes, value];
    setWasteTypes(updatedWasteTypes);
    onUpdate({ ...formData, wasteTypes: updatedWasteTypes });
  };

  const handleContinue = () => {
    if (wasteTypes.length > 0) {
      const nextStep = formData.step + 1;
      onUpdate({ ...formData, step: nextStep });
      navigate(`/users/raise-request/step/${nextStep}`);
    }
  };

  const isContinueDisabled = wasteTypes.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex flex-col"
    >
      <div className="bg-teal-900/50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4 text-center">Select Waste Type</h2>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto">
          <label className="block">
            <input
              type="checkbox"
              value="General Waste"
              onChange={handleWasteTypeChange}
              checked={wasteTypes.includes('General Waste')}
              className="mr-2"
            />
            <span className="ml-2">General Waste</span>
          </label>
          <label className="block">
            <input
              type="checkbox"
              value="Recyclable"
              onChange={handleWasteTypeChange}
              checked={wasteTypes.includes('Recyclable')}
              className="mr-2"
            />
            <span className="ml-2">Recyclable</span>
          </label>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => {
              const prevStep = formData.step - 1;
              onUpdate({ ...formData, step: prevStep });
              navigate(`/users/raise-request/step/${prevStep}`);
            }}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
            disabled={formData.step === 1}
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
      </div>
    </motion.div>
  );
};

export default StepTwo;