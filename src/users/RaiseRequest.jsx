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
    city: '',
    street: '',
    house_flat_number: '',
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
    step: 1,
  });

  useEffect(() => {
    const parsedStep = parseInt(step);
    if (step && !isNaN(parsedStep) && parsedStep >= 1 && parsedStep <= 6) {
      setCurrentStep(parsedStep);
      setFormData((prev) => ({ ...prev, step: parsedStep }));
    } else {
      navigate('/users/raise-request/step/1', { replace: true });
      setCurrentStep(1);
      setFormData((prev) => ({ ...prev, step: 1 }));
    }
  }, [step, navigate]);

  const steps = [
    { name: 'Enter Postcode', component: <StepOne formData={formData} onUpdate={setFormData} navigate={navigate} /> },
    { name: 'Select Waste Type', component: <StepTwo formData={formData} onUpdate={setFormData} navigate={navigate} /> },
    { name: 'Choose Your Skip Size', component: <StepThree formData={formData} onUpdate={setFormData} navigate={navigate} /> },
    { name: 'Permit Check', component: <StepFour formData={formData} onUpdate={setFormData} navigate={navigate} /> },
    { name: 'Schedule Collection', component: <StepFive formData={formData} onUpdate={setFormData} navigate={navigate} /> },
    { name: 'Payment Information', component: <StepSix formData={formData} onUpdate={setFormData} onComplete={() => navigate('/users/dashboard')} navigate={navigate} /> },
  ];

  return (
    <div className="flex-1 p-4 sm:p-8 bg-gradient-to-br from-purple-900 to-teal-900 text-white min-h-screen ml-64">
      <nav className="bg-teal-800 p-4 rounded-lg mb-6 flex justify-center">
        <div className="flex space-x-6 text-lg font-medium flex-wrap">
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
      <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg">
        {currentStep === 0 || !steps[currentStep - 1] ? (
          <div>Please start the process from the sidebar or ensure a valid step is selected.</div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-6 text-teal-300">{steps[currentStep - 1].name}</h2>
            <div className="mb-8">{steps[currentStep - 1].component}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default RaiseRequest;