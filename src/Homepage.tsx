import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Homepage: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:5000/homepage', {
          headers: { Authorization: token },
        });
        setMessage(response.data.message);
      } catch (error) {
        alert('Access Denied');
        window.location.href = '/';
      }
    };

    fetchMessage();
  }, []);

  return <h1>{message}</h1>;
};

export default Homepage;
