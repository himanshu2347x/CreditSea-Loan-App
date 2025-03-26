import React, { useState } from 'react';
import LoanApplicationForm from './LoanApplicationForm';

const HomeActions = () => {
  const [activeTab, setActiveTab] = useState('Borrow Cash');
  const [isLoanApplicationFormOpen, setIsApplicationFormOpen] = useState(false);
  const tabs = ['Borrow Cash', 'Transact', 'Deposit Cash'];

  const handleGetLoanClick = () => {
    setIsApplicationFormOpen(true);
  };

  return (
    <div className="flex justify-center items-center h-60 bg-gray-100">
      <div className="w-[500px] space-y-4">
        {/* Full-Screen Loan Application Form */}
        {isLoanApplicationFormOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div  className="bg-white w-full h-full p-6 rounded-lg overflow-auto shadow-lg">
              <button 
                onClick={() => setIsApplicationFormOpen(false)} 
                className="absolute top-4 right-4 text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
              <LoanApplicationForm setIsApplicationFormOpen={setIsApplicationFormOpen}  />
            </div>
          </div>
        )}

        {/* Deficit and Get A Loan Section */}
        <div className="bg-green-50 p-4 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600 uppercase">Deficit</div>
            <div className="text-2xl font-bold text-green-700">₦0.0</div>
          </div>
          <button
            onClick={handleGetLoanClick}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Get A Loan
          </button>
        </div>

        {/* Action Tabs */}
        <div className="flex border rounded-lg overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-center transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-green-100 text-green-700 font-semibold'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div>
          <input
            type="text"
            placeholder="Search for loans"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeActions;
