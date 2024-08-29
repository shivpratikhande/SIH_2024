import React from 'react';
import caseDetails from "../../public/data/CaseDetails.json";

const CaseDetails = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 border-2 border-[#03346E] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-[#1E3A8A] mb-6">Case Details</h2>
      
      <p className="text-[#1E40AF] text-lg mb-4">
        <strong className="font-semibold">Case ID:</strong> {caseDetails.caseId}
      </p>
      
      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Charges:</h3>
      <ul className="list-disc list-inside mb-6 text-[#1E40AF]">
        {caseDetails.charges.map((charge, index) => (
          <li key={index} className="mb-3 bg-gray-100 p-4 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105">
            <strong className="font-semibold">{charge.section} - {charge.title}:</strong> {charge.description}
            <br />
            <em className="text-sm text-gray-600">Penalty:</em> {charge.penalty}
          </li>
        ))}
      </ul>

      <p className="text-[#1E40AF] text-lg mb-4">
        <strong className="font-semibold">Imprisonment Duration:</strong> {caseDetails.imprisonmentDuration}
      </p>
      <p className="text-[#1E40AF] text-lg mb-4">
        <strong className="font-semibold">Hearing Dates:</strong> {caseDetails.hearingDates.join(', ')}
      </p>
      <p className="text-[#1E40AF] text-lg mb-6">
        <strong className="font-semibold">Judge:</strong> {caseDetails.judge}
      </p>
      
      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Bail Status:</h3>
      <p className="text-[#DC2626] text-xl mb-6 font-semibold">{caseDetails.bailStatus}</p>

      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Bail History:</h3>
      <ul className="list-disc list-inside mb-6 text-[#1E40AF]">
        {caseDetails.bailHistory.map((entry, index) => (
          <li key={index} className="mb-3 bg-gray-100 p-4 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105">
            <strong className="font-semibold">Date:</strong> {entry.date} - <strong className="font-semibold">Status:</strong> {entry.status}
            <br />
            <em className="text-sm text-gray-600">Remarks:</em> {entry.remarks}
          </li>
        ))}
      </ul>

      <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-4">Lawyer:</h3>
      <p className="text-[#1E40AF] text-lg">
        <strong className="font-semibold">Name:</strong> {caseDetails.lawyer.name} <br />
        <strong className="font-semibold">Contact:</strong> {caseDetails.lawyer.contact}
      </p>
    </div>
  );
};

export default CaseDetails;
