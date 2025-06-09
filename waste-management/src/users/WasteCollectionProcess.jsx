import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';
import StepSix from './steps/StepSix';

const WasteCollectionProcess = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);

  useEffect(() => {
    if (step && parseInt(step) !== currentStep) {
      setCurrentStep(parseInt(step));
    }
  }, [step, currentStep]);

  const steps = [
    { name: 'Enter Postcode', component: <StepOne /> },
    { name: 'Select Waste Type', component: <StepTwo /> },
    { name: 'Choose Skip Size', component: <StepThree /> },
    { name: 'Permit Check', component: <StepFour /> },
    { name: 'Schedule Collection', component: <StepFive /> },
    { name: 'Payment Information', component: <StepSix /> },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      navigate(`/users/waste-collection-process/step/${currentStep + 1}`);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      navigate(`/users/waste-collection-process/step/${currentStep - 1}`);
    }
  };

  const handleComplete = () => {
    alert('Waste collection process completed! Redirecting to Dashboard.');
    navigate('/users/dashboard');
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
        {currentStep === 0 || !steps[currentStep - 1] ? (
          <div>Please start the process from the sidebar or ensure a valid step is selected.</div>
        ) : (
          <>
            <nav className="bg-green-900 p-4 flex justify-between mb-4">
              <div className="flex space-x-4 text-white">
                <span className={currentStep === 1 ? 'text-blue-400' : ''}>Postcode</span>
                <span className={currentStep === 2 ? 'text-blue-400' : ''}>Waste Type</span>
                <span className={currentStep === 3 ? 'text-blue-400' : ''}>Choose Skip Size</span>
                <span className={currentStep === 4 ? 'text-blue-400' : ''}>Permit Check</span>
                <span className={currentStep === 5 ? 'text-blue-400' : ''}>Schedule Collection</span>
                <span className={currentStep === 6 ? 'text-blue-400' : ''}>Payment Information</span>
              </div>
            </nav>
            <h2 className="text-2xl font-bold mb-4 text-green-400">{steps[currentStep - 1].name}</h2>
            <div className="mb-6">{steps[currentStep - 1].component}</div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:opacity-50"
                disabled={currentStep === 1}
              >
                Back
              </button>
              {currentStep === steps.length ? (
                <button
                  onClick={handleComplete}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Complete
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  Next
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WasteCollectionProcess;