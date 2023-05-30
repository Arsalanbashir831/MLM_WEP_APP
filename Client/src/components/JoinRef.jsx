import React, { useState } from 'react';

const JoinRef = () => {
  const [referralCode, setReferralCode] = useState('');
  const [joiningLink, setJoiningLink] = useState('');

  const generateJoiningLink = () => {
    const link = `https://example.com/join?ref=${referralCode}`;
    setJoiningLink(link);
  };

  const handleInputChange = (event) => {
    setReferralCode(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Referral Joining Link Generator</h1>

      <div className="mb-4">
        <label htmlFor="referralCode" className="block text-gray-700 font-bold mb-2">
          Referral Code:
        </label>
        <input
          type="text"
          id="referralCode"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={referralCode}
          onChange={handleInputChange}
          placeholder="Enter referral code"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={generateJoiningLink}
      >
        Generate Joining Link
      </button>

      {joiningLink && (
        <div className="mt-4">
          <label htmlFor="joiningLink" className="block text-gray-700 font-bold mb-2">
            Joining Link:
          </label>
          <input
            type="text"
            id="joiningLink"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={joiningLink}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default JoinRef;
