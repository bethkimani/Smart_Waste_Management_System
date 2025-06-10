import React, { useState, useEffect } from 'react';

const StepThree = ({ formData, onUpdate }) => {
  const [skips, setSkips] = useState([]);

  useEffect(() => {
    fetch('/skips.json')
      .then(response => response.json())
      .then(data => setSkips(data.filter(skip => skip.allowed_on_road && skip.allows_heavy_waste)))
      .catch(error => console.error('Error fetching skips:', error));
  }, []);

  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-300">Select the skip size that best suits your needs.</p>
      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
        {skips.map(skip => (
          <div
            key={skip.id}
            className="min-w-[200px] bg-teal-800/50 p-4 rounded-lg border-2 border-transparent hover:border-teal-300 transition"
          >
            <h3 className="font-semibold text-white">{skip.size} Yard Skip</h3>
            <p className="text-gray-400">{skip.hire_period_days} day hire period</p>
            <p className="text-teal-300">£{(skip.price_before_vat + (skip.price_before_vat * skip.vat / 100)).toFixed(2)}</p>
            <button
              onClick={() => onUpdate({ skipSize: skip })}
              className={`mt-2 w-full px-2 py-1 rounded ${formData.skipSize?.id === skip.id ? 'bg-purple-500' : 'bg-teal-500'} text-white hover:bg-${formData.skipSize?.id === skip.id ? 'purple-600' : 'teal-600'} transition`}
            >
              {formData.skipSize?.id === skip.id ? 'Selected' : 'Select This Skip'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;