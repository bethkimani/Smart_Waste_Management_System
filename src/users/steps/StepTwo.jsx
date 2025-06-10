import React from 'react';

const StepTwo = ({ formData, onUpdate }) => {
  const wasteTypesOptions = ['Construction Waste', 'Household Waste', 'Garden Waste', 'Commercial Waste'];

  return (
    <div className="space-y-4">
      <p className="text-lg text-gray-300">What type of waste are you disposing of? (Select all that apply)</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {wasteTypesOptions.map(type => (
          <div
            key={type}
            className="bg-teal-800/50 p-4 rounded-lg border-2 border-transparent hover:border-teal-300 transition"
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.wasteTypes.includes(type)}
                onChange={(e) => {
                  const updatedWasteTypes = e.target.checked
                    ? [...formData.wasteTypes, type]
                    : formData.wasteTypes.filter(t => t !== type);
                  onUpdate({ wasteTypes: updatedWasteTypes });
                }}
                className="text-teal-400 focus:ring-teal-400"
              />
              <span className="text-white">{type}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;