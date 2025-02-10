import React from 'react';
import { useNavigate } from 'react-router-dom';

const Err = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-600">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={handleBackHome}
          className="mt-6 rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Err;
