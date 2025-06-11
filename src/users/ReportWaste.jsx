import React, { useState } from 'react';

const ReportWaste = () => {
  const [reportPhoto, setReportPhoto] = useState(null);
  const [verifiedWaste, setVerifiedWaste] = useState('');
  const [estimatedAmount, setEstimatedAmount] = useState('');
  const [error, setError] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);

  const handleReportWaste = () => {
    if (!reportPhoto) {
      setError('Please upload a waste photo');
      return;
    }
    setVerifiedWaste('Mixed waste (plastic, paper, glass, metal, organic)');
    setEstimatedAmount('Approximately 100 kg');
    setRewardPoints(prev => prev + 10);
    alert('Waste reported! Driver notified and 10 points awarded.');
    console.log('Admin notified for pickup');
  };

  return (
    <main className="p-1 sm:p-4 sm:ml-64 bg-gray-900 text-white flex-1 overflow-hidden h-full">
      <div className="bg-gray-800 rounded-xl p-1 sm:p-4 shadow-lg h-full overflow-hidden">
        <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-4 text-green-400">Report Waste</h2>
        <div className="bg-white text-black p-2 sm:p-4 rounded-lg shadow-lg h-full">
          <div className="border-dashed border-2 border-green-300 p-2 sm:p-4 mb-1 sm:mb-2">
            <input type="file" onChange={(e) => setReportPhoto(e.target.files[0])} className="mb-1 w-full" />
            <button onClick={handleReportWaste} className="bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-green-600 w-full sm:w-auto">
              Verify Waste
            </button>
          </div>
          {verifiedWaste && (
            <div className="bg-green-100 p-1 sm:p-2 rounded mb-1 sm:mb-2 text-black">
              <p>Verification Successful</p>
              <p>Waste Type: {verifiedWaste}</p>
              <p>Estimated Amount: {estimatedAmount}</p>
              <p>Reward Points: {rewardPoints}</p>
            </div>
          )}
          {error && <p className="text-red-500 text-xs sm:text-base">{error}</p>}
        </div>
      </div>
    </main>
  );
};

export default ReportWaste;