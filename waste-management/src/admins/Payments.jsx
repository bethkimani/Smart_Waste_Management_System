import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';

const Payments = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPayments([
      {
        id: 1,
        address: '195 Ashby Road, Hinckley LE10 1SH',
        deliveryDate: '2025-06-20',
        collectionDate: '2025-06-26',
        skipSize: 5,
        total: 289.20,
        paymentMethod: 'card',
        date: '2025-06-09',
      },
    ]);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl p-8">
          <h1 className="text-3xl font-bold mb-4">Payments</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">ID</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Delivery Date</th>
                  <th className="p-2">Collection Date</th>
                  <th className="p-2">Skip Size</th>
                  <th className="p-2">Total (£)</th>
                  <th className="p-2">Method</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(pay => (
                  <tr key={pay.id} className="border-b">
                    <td className="p-2">{pay.id}</td>
                    <td className="p-2">{pay.address}</td>
                    <td className="p-2">{new Date(pay.deliveryDate).toLocaleDateString('en-GB')}</td>
                    <td className="p-2">{new Date(pay.collectionDate).toLocaleDateString('en-GB')}</td>
                    <td className="p-2">{pay.skipSize} Yard</td>
                    <td className="p-2">£{pay.total.toFixed(2)}</td>
                    <td className="p-2">{pay.paymentMethod}</td>
                    <td className="p-2">{new Date(pay.date).toLocaleDateString('en-GB')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;