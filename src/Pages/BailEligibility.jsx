// src/components/BailEligibility.jsx

import React from 'react';

const BailEligibility = () => {
  // Placeholder for eligibility status data
  const eligibility = true;  // This would be dynamic based on actual data

  return (
    <div className="bg-white border-2 border-primary p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary mb-2">Bail Eligibility Status</h2>
      <p className={`text-lg ${eligibility ? 'text-green-500' : 'text-red-500'}`}>
        {eligibility ? 'Eligible for Bail' : 'Not Eligible for Bail'}
      </p>
    </div>
  );
};

export default BailEligibility;
