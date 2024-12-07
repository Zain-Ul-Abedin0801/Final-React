import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for login, e.g., checking with an API or local state
    alert('Logged in successfully');
  };

  return (
    <div className="login-block">
      <p className="text">Login</p>
      <input
        className="loginbar"
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="text">Password</p>
      <input
        className="loginbar"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="register">Don't Have an Account?</p>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <p className="reg">Register Here</p>
      </Link>
      <div className="login-button">
        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
