import React, { useState } from 'react';

const ReportWaste = () => {
  const [reportPhoto, setReportPhoto] = useState(null);
  const [verifiedWaste, setVerifiedWaste] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [error, setError] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);

  const handleReportWaste = () => {
    if (!reportPhoto) return setError('Please upload a waste photo');
    setVerifiedWaste('Mixed waste (plastic, paper, glass, metal, organic)');
    setEstimatedAmount('Approximately 100 kg');
    setRewardPoints(prev => prev + 10);
    alert('Waste reported! Driver notified and 10 points awarded.');
    console.log('Admin notified for pickup');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-400">Report Waste</h2>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <div className="border-dashed border-2 border-green-300 p-4 mb-4">
          <input type="file" onChange={(e) => setReportPhoto(e.target.files[0])} className="mb-2" />
          <button onClick={handleReportWaste} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Verify Waste</button>
        </div>
        {verifiedWaste && (
          <div className="bg-green-100 p-4 rounded mb-4">
            <p>Verification Successful</p>
            <p>Waste Type: {verifiedWaste}</p>
            <p>Estimated Amount: {estimatedAmount}</p>
            <p>Reward Points: {rewardPoints}</p>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ReportWaste;