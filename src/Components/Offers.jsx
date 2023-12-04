import React from 'react';

const Offers = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Exclusive Offers</h2>
      <div className="flex items-center bg-yellow-200 text-yellow-700 py-3 px-4 rounded-lg mb-4">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 0v2m0-2h2m-2 0H9a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2h-2zm3 0V7h-6v2m6 0h-2v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8H5v-2h14z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Flat 30% OFF</p>
          <p className="text-xs">Use code: SWIGGY30</p>
        </div>
      </div>
      <div className="flex items-center bg-blue-200 text-blue-700 py-3 px-4 rounded-lg mb-4">
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 0v2m0-2h2m-2 0H9a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2h-2zm3 0V7h-6v2m6 0h-2v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8H5v-2h14z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-xs">On orders above $30</p>
        </div>
      </div>
      {/* Add more offers here */}
    </div>
  );
};

export default Offers;
