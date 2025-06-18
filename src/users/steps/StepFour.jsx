import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const StepFour = ({ formData, onUpdate, navigate }) => {
  const handleContinue = () => {
    if (formData.placement && (formData.placement === 'Private Property' || (formData.placement === 'Public Road' && formData.photo))) {
      const nextStep = formData.step + 1;
      onUpdate({ ...formData, step: nextStep });
      navigate(`/users/raise-request/step/${nextStep}`);
    }
  };

  const isContinueDisabled = !formData.placement || (formData.placement === 'Public Road' && !formData.photo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="bg-gray-800 text-white">
        <CardHeader>
          <CardTitle className="text-teal-300">Permit Check</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">Where will the skip be placed? This helps us determine if you need a permit.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {[
              { value: 'Private Property', desc: 'Driveway or private land', note: 'No permit required' },
              { value: 'Public Road', desc: 'Council or public property', note: 'Permit required' },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex-1 p-4 rounded-lg border-2 ${formData.placement === option.value ? 'border-teal-300' : 'border-transparent'} hover:border-teal-300 cursor-pointer transition`}
                onClick={() => onUpdate({ ...formData, placement: option.value, photo: option.value === 'Private Property' ? null : formData.photo })}
              >
                <p className="text-white font-medium">{option.value}</p>
                <p className="text-gray-400">{option.desc}</p>
                <p className="text-gray-400">{option.note}</p>
                {formData.placement === option.value && (
                  <div className="mt-2 bg-purple-500 text-white text-center py-1 rounded">Selected</div>
                )}
              </motion.div>
            ))}
          </div>
          {formData.placement === 'Public Road' && (
            <Input
              type="file"
              onChange={(e) => onUpdate({ ...formData, photo: e.target.files[0] })}
              className="bg-gray-700 text-white"
            />
          )}
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

export default StepFour;