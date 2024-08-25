// src/components/ApplicationAssistance.jsx

import React from 'react';

const ApplicationAssistance = () => {
  return (
    <div className="bg-white border-2 border-[#00008B] p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#00008B] mb-4">Application Assistance</h2>
      
      <p className="text-[#03346E] mb-4">
        Follow these steps to prepare and submit your bail application:
      </p>

      <ol className="list-decimal list-inside text-[#03346E] space-y-2">
        <li>
          <strong>Gather necessary documents:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Identification proof (Aadhar, Passport, etc.)</li>
            <li>Previous court orders or judgments</li>
            <li>Proof of residence</li>
            <li>Character certificates, if available</li>
          </ul>
        </li>
        <li>
          <strong>Complete the bail application form:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Fill in personal details accurately</li>
            <li>State the charges and details of the case</li>
            <li>Provide information on prior criminal records, if any</li>
            <li>Mention any special circumstances or requests</li>
          </ul>
        </li>
        <li>
          <strong>Submit the application:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Submit to the relevant court registry</li>
            <li>Alternatively, hand it over to your legal representative</li>
            <li>Ensure to get a receipt or acknowledgment</li>
          </ul>
        </li>
        <li>
          <strong>Track application status:</strong>
          <ul className="list-disc list-inside ml-6 mt-1">
            <li>Follow up with the court registry for updates</li>
            <li>Check for notifications from your lawyer</li>
          </ul>
        </li>
      </ol>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#03346E] mb-2">Common Mistakes to Avoid:</h3>
        <ul className="list-disc list-inside text-[#03346E] ml-6">
          <li>Not signing the application where required</li>
          <li>Missing deadlines for submission</li>
          <li>Providing incorrect or incomplete information</li>
          <li>Failing to attach necessary documents</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#03346E] mb-2">Resources:</h3>
        <ul className="list-disc list-inside text-[#03346E] ml-6">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Download Bail Application Form
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              View Example of Filled Application
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Guide to Bail Process
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ApplicationAssistance;
