import React from 'react';

const BailOptions = () => {
  // Placeholder for bail options data with descriptions
  const bailOptions = [
    {
      name: 'Surety Bond',
      description: 'A third party, often a bail bondsman, pays the bail amount on behalf of the defendant, charging a fee for the service.'
    },
    {
      name: 'Personal Bond',
      description: 'The defendant is released based on their promise to appear in court, without the need to pay bail upfront.'
    },
    {
      name: 'Cash Bail',
      description: 'The full bail amount is paid in cash by the defendant or someone on their behalf, refundable after court appearances.'
    },
    {
      name: 'Property Bond',
      description: 'The defendant or a third party pledges property (e.g., real estate) as collateral to secure bail, which can be forfeited if the defendant fails to appear in court.'
    },
    {
      name: 'Release on Recognizance (ROR)',
      description: 'The defendant is released without any bail amount, based solely on their written promise to return to court.'
    },
    {
      name: 'Immigration Bond',
      description: 'Specific to immigration cases, this bond allows a detained immigrant to be released while their case is pending.'
    },
    {
      name: 'Federal Bond',
      description: 'A type of bail for federal cases, which often requires a higher standard of surety or collateral.'
    },
  ];

  return (
    <div className="bg-white border-2 border-primary p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary mb-2">Bail Options</h2>
      <ul className="list-disc list-inside text-primary">
        {bailOptions.map((option, index) => (
          <li key={index}>
            <strong>{option.name}</strong>: {option.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BailOptions;
