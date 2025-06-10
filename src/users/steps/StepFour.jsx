import React from 'react';

const StepFour = ({ formData, onUpdate }) => {
  return (
    <div className="space-y-6">
      <p className="text-lg text-gray-300">Where will the skip be placed? This helps us determine if you need a permit.</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div
          onClick={() => onUpdate({ placement: 'Private Property', photo: null })}
          className="bg-teal-800/50 p-4 rounded-lg border-2 border-transparent hover:border-teal-300 cursor-pointer transition"
        >
          <p className="text-white font-medium">Private Property</p>
          <p className="text-gray-400">Driveway or private land</p>
          <p className="text-gray-400">No permit required</p>
          {formData.placement === 'Private Property' && <div className="mt-2 bg-purple-500 text-white text-center py-1 rounded">Selected</div>}
        </div>
        <div
          onClick={() => onUpdate({ placement: 'Public Road' })}
          className="bg-teal-800/50 p-4 rounded-lg border-2 border-transparent hover:border-teal-300 cursor-pointer transition"
        >
          <p className="text-white font-medium">Public Road</p>
          <p className="text-gray-400">Council or public property</p>
          <p className="text-gray-400">Permit required</p>
          {formData.placement === 'Public Road' && <div className="mt-2 bg-purple-500 text-white text-center py-1 rounded">Selected</div>}
        </div>
      </div>
      {formData.placement === 'Public Road' && (
        <div className="bg-teal-800/50 p-4 rounded-lg">
          <input
            type="file"
            onChange={(e) => onUpdate({ photo: e.target.files[0] })}
            className="w-full p-2 bg-white/10 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
          />
        </div>
      )}
    </div>
  );
};

export default StepFour;