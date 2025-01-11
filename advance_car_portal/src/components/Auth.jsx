import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden">
        <div className={`absolute inset-0 transform transition-transform duration-500 ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
          <Login />
        </div>
        <div className={`absolute inset-0 transform transition-transform duration-500 ${isLogin ? 'translate-x-full' : 'translate-x-0'}`}>
          <Register />
        </div>
        <button
          onClick={toggleAuth}
          className="absolute top-4 right-4 bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isLogin ? 'Register' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;