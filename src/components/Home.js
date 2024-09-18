// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home= () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Welcome to the Postal App</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Home;
