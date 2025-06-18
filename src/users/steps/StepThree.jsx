import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StepThree = ({ formData, onUpdate, navigate }) => {
  const [skips, setSkips] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/skips.json')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch skips.json');
        return response.json();
      })
      .then((data) => {
        setSkips(data);
        setError(null);
      })
      .catch((error) => {
        setError('Error fetching skip data. Please try again later.');
        console.error('Error fetching skips.json:', error);
      });
  }, []);

  const handleSkipSelect = (skip) => {
    onUpdate({ ...formData, skipSize: skip });
  };

  const handleContinue = () => {
    if (formData.skipSize) {
      const nextStep = formData.step + 1;
      onUpdate({ ...formData, step: nextStep });
      navigate(`/users/raise-request/step/${nextStep}`);
    }
  };

  const isContinueDisabled = !formData.skipSize;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 flex flex-col"
    >
      <div className="bg-teal-900/50 p-6 rounded-lg shadow-lg flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-6 text-center">Choose Your Skip Size</h2>
        <p className="text-gray-300 text-center mb-6">Select the skip size that best suits your needs</p>
        {error ? (
          <p className="text-red-400 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto">
            {skips.map((skip) => {
              const totalPrice = skip.price_before_vat + (skip.price_before_vat * skip.vat / 100);
              const isDisabled = !skip.allowed_on_road || !skip.allows_heavy_waste;
              const buttonText = formData.skipSize?.id === skip.id ? 'Selected' : 'Select This Skip';

              return (
                <motion.div
                  key={skip.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-24 bg-gray-700 rounded-t-lg flex items-center justify-center mb-4">
                      <span className="text-xl font-semibold">{skip.size} Yards</span>
                    </div>
                    <p className="text-gray-400 mb-2">{skip.hire_period_days} day hire period</p>
                    <p className="text-teal-300 font-bold mb-4">£{totalPrice.toFixed(2)}</p>
                    {isDisabled && <p className="text-red-400 text-sm mb-2">Not Allowed On The Road</p>}
                    <button
                      onClick={() => !isDisabled && handleSkipSelect(skip)}
                      disabled={isDisabled}
                      className={`w-full py-2 rounded ${formData.skipSize?.id === skip.id ? 'bg-purple-500 hover:bg-purple-600' : isDisabled ? 'bg-gray-600 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-600'} text-white font-semibold transition-colors`}
                    >
                      {buttonText}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
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

export default StepThree;