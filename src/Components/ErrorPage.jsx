import React from 'react';
import error from '../img/error.jpg';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src={error}
        alt="Error"
        className="mb-8 w-96"
        
      />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">
        We're sorry, but there seems to be an issue. Please try again later.
      </p>
        <p className="text-gray-700 mb-8 text-2xl font-bold">
            Error: {err.status} : {err.statusText}
        </p>
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Go back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
