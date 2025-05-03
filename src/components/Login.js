import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Referral application </h1>
      <div className="space-x-4">
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
