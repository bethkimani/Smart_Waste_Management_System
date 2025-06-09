import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SkipBooking = () => {
  const [step, setStep] = useState(1);
  const [postcode, setPostcode] = useState('LE10 1SH');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [wasteType, setWasteType] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [placement, setPlacement] = useState('');
  const [photo, setPhoto] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [collectionDate, setCollectionDate] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skips, setSkips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkips = async () => {
      const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
      const data = await response.json();
      setSkips(data);
    };
    fetchSkips();
  }, []);

  const handleNext = () => {
    if (step === 1 && !postcode) return setError('Please enter a postcode');
    if (step === 2 && wasteType.length === 0) return setError('Please select at least one waste type');
    if (step === 3 && !selectedSkip) return setError('Please select a skip size');
    if (step === 4 && !placement) return setError('Please choose a placement option');
    if (step === 5 && placement === 'Public Road' && !photo) return setError('Photo upload is required for public road placement');
    if (step === 6 && !deliveryDate) return setError('Please select a delivery date');
    setError('');
    setStep(step + 1);
  };

  const handlePayment = () => {
    if (!cardNumber || !expiryDate || !securityCode || !firstName || !lastName || !email || !phone) {
      setError('Please fill in all payment and account details');
      return;
    }
    alert('Payment successful! Order placed and 5 points awarded.');
    navigate('/dashboard');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Enter Postcode</h2>
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
              placeholder="Enter postcode"
            />
            <select
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            >
              <option value="">Select Address</option>
              <option value="195 Ashby Road, Hinckley LE10 1SH">195 Ashby Road, Hinckley LE10 1SH</option>
            </select>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Waste Type</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Plastic', 'Paper', 'Glass', 'Metal', 'Organic'].map(type => (
                <label key={type} className="flex items-center bg-gray-700 p-2 rounded">
                  <input
                    type="checkbox"
                    checked={wasteType.includes(type)}
                    onChange={(e) => setWasteType(e.target.checked ? [...wasteType, type] : wasteType.filter(t => t !== type))}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Select Skip</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skips.map(skip => (
                <div key={skip.size} className={`bg-gray-700 p-4 rounded ${skip.size >= 10 && skip.size <= 40 ? 'opacity-50' : ''}`}>
                  <h3 className="text-lg font-semibold">{skip.size} Yard Skip</h3>
                  <p>{skip.hirePeriod} hire period</p>
                  <p className="text-green-400">£{skip.price}</p>
                  {skip.size >= 10 && skip.size <= 40 && <p className="text-red-500">Not Allowed On The Road</p>}
                  <button
                    onClick={() => setSelectedSkip(skip)}
                    disabled={skip.size >= 10 && skip.size <= 40}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2 disabled:bg-gray-500"
                  >
                    Select This Skip
                  </button>
                </div>
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4" disabled={!selectedSkip}>
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Permit Check</h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPlacement('Private Property')}
                className={`bg-gray-700 p-4 rounded ${placement === 'Private Property' ? 'border-2 border-green-400' : ''}`}
              >
                Private Property<br />Driveway or private land<br />No permit required
              </button>
              <button
                onClick={() => setPlacement('Public Road')}
                className={`bg-gray-700 p-4 rounded ${placement === 'Public Road' ? 'border-2 border-green-400' : ''}`}
              >
                Public Road<br />Council or public property<br />Permit required
              </button>
            </div>
            {placement === 'Public Road' && (
              <div className="mt-4 bg-gray-700 p-4 rounded">
                <p>Please upload a photo of the placement area.</p>
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className="mt-2" />
                <button onClick={() => setPhoto(null)} className="bg-red-500 text-white px-2 py-1 rounded mt-2">Skip</button>
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4" disabled={!placement}>
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Choose Date</h2>
            <input
              type="date"
              value={deliveryDate}
              onChange={(e) => {
                setDeliveryDate(e.target.value);
                setCollectionDate(new Date(new Date(e.target.value).setDate(new Date(e.target.value).getDate() + 14)).toISOString().split('T')[0]);
              }}
              className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
            />
            <p>Collection Date: {collectionDate || 'TBD'}</p>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleNext} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4" disabled={!deliveryDate}>
              Next
            </button>
          </div>
        );
      case 6:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-400">Payment</h2>
            <div className="bg-gray-700 p-4 rounded mb-4">
              <h3>Order Summary</h3>
              <p>Delivery Address: {address}</p>
              <p>Delivery: {deliveryDate}, Collection: {collectionDate}</p>
              <p>{selectedSkip?.size} Yard Skip: £{selectedSkip?.price} + VAT £{(selectedSkip?.price * 0.2).toFixed(2)}</p>
              <p>Subtotal (excl. VAT): £{selectedSkip?.price}</p>
              <p>VAT (20%): £{(selectedSkip?.price * 0.2).toFixed(2)}</p>
              <p>Total: £{(selectedSkip?.price * 1.2).toFixed(2)}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded mb-4">
              <h3>Payment Details</h3>
              <input type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <input type="text" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <input type="text" placeholder="CVC" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Save this card as default payment method
              </label>
            </div>
            <div className="bg-gray-700 p-4 rounded mb-4">
              <h3>Create Account</h3>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
              <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full p-2 mb-2 bg-gray-600 text-white rounded" />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
              Complete Payment
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-green-900 p-4 flex justify-between">
        <div className="flex space-x-4">
          <span className={step === 1 ? 'text-green-400' : ''}>Postcode</span>
          <span className={step === 2 ? 'text-green-400' : ''}>Waste Type</span>
          <span className={step === 3 ? 'text-green-400' : ''}>Select Skip</span>
          <span className={step === 4 ? 'text-green-400' : ''}>Permit Check</span>
          <span className={step === 5 ? 'text-green-400' : ''}>Choose Date</span>
          <span className={step === 6 ? 'text-green-400' : ''}>Payment</span>
        </div>
        <button onClick={() => setStep(step > 1 ? step - 1 : 1)} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Back
        </button>
      </nav>
      {renderStep()}
    </div>
  );
};

export default SkipBooking;