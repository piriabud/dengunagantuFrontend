import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = '/homepage';
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleGuest = async () => {
    const response = await axios.post('http://localhost:5000/guest');
    localStorage.setItem('token', response.data.token);
    window.location.href = '/homepage';
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGuest}>Continue as Guest</button>
    </div>
  );
};

export default Login;
