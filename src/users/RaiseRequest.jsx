import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';
import StepSix from './steps/StepSix';

const RaiseRequest = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);
  const [formData, setFormData] = useState({
    postcode: '',
    address: '',
    wasteTypes: [],
    skipSize: null,
    placement: '',
    photo: null,
    deliveryDate: '',
    collectionDate: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
    country: 'Kenya',
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    phone: '',
  });

  useEffect(() => {
    const parsedStep = parseInt(step);
    if (step && !isNaN(parsedStep) && parsedStep !== currentStep) {
      setCurrentStep(parsedStep);
    } else if (!step || isNaN(parsedStep)) {
      navigate(`/users/raise-request/step/1`, { replace: true });
    }
    console.log('Current Step:', currentStep, 'Form Data:', formData); // Debug log
  }, [step, currentStep, navigate, formData]);

  const steps = [
    { name: 'Enter Postcode', component: <StepOne formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} /> },
    { name: 'Select Waste Type', component: <StepTwo formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} /> },
    { name: 'Choose Skip Size', component: <StepThree formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} /> },
    { name: 'Permit Check', component: <StepFour formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} /> },
    { name: 'Schedule Collection', component: <StepFive formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} /> },
    { name: 'Payment Information', component: <StepSix formData={formData} onUpdate={(data) => setFormData(prev => ({ ...prev, ...data }))} onComplete={() => navigate('/users/dashboard')} /> },
  ];

  const handleNext = () => {
    console.log('handleNext called, currentStep:', currentStep); // Debug log
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      navigate(`/users/raise-request/step/${nextStep}`, { replace: false });
      setCurrentStep(nextStep); // Force state update
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      navigate(`/users/raise-request/step/${currentStep - 1}`);
    } else {
      navigate('/users/dashboard');
    }
  };

  const handleComplete = () => {
    alert('Waste collection request completed! Redirecting to Dashboard.');
    navigate('/users/dashboard');
  };

  const isStepValid = () => {
    console.log('Validating Step', currentStep, 'with Form Data:', formData); // Debug validation
    switch (currentStep) {
      case 1:
        return formData.postcode.trim() && formData.address.trim();
      case 2:
        return formData.wasteTypes.length > 0;
      case 3:
        return formData.skipSize !== null;
      case 4:
        return formData.placement && (formData.placement !== 'Public Road' || formData.photo);
      case 5:
        return formData.deliveryDate;
      case 6:
        return formData.paymentMethod && 
               (formData.paymentMethod === 'card' ? formData.cardNumber && formData.expiryDate && formData.securityCode : true) &&
               formData.firstName && formData.lastName && formData.email && formData.confirmEmail && formData.phone &&
               formData.email === formData.confirmEmail;
      default:
        return false;
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-8 overflow-auto bg-gradient-to-br from-purple-900 to-teal-900 text-white min-h-screen">
      <nav className="bg-teal-800 p-4 rounded-lg mb-6 flex justify-center">
        <div className="flex space-x-6 text-lg font-medium">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`cursor-pointer ${currentStep === index + 1 ? 'text-teal-300' : 'text-gray-400 hover:text-teal-200'}`}
              onClick={() => navigate(`/users/raise-request/step/${index + 1}`)}
            >
              {step.name}
            </span>
          ))}
        </div>
      </nav>
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
        {currentStep === 0 || !steps[currentStep - 1] ? (
          <div>Please start the process from the sidebar or ensure a valid step is selected.</div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-teal-300">{steps[currentStep - 1].name}</h2>
            <div className="mb-8">{steps[currentStep - 1].component}</div>
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition disabled:opacity-50"
                disabled={currentStep === 1 && !formData.postcode && !formData.address}
              >
                Back
              </button>
              {currentStep === steps.length ? (
                <button
                  onClick={handleComplete}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition disabled:opacity-50"
                  disabled={!isStepValid()}
                >
                  Complete
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-400 transition disabled:opacity-50"
                  disabled={!isStepValid()}
                >
                  Continue
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RaiseRequest;