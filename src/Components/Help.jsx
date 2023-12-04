import React from "react";

const Help = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          For any queries or assistance:
        </p>
        <p className="text-blue-500 font-semibold">support@yourwebsite.com</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Call us at:</p>
        <p className="text-blue-500 font-semibold">+1234567890</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Operating hours:</p>
        <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
      </div>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
        Chat with us
      </button>
    </div>
  );
};

export default Help;
