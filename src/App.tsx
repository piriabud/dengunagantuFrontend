import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Homepage from './Homepage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
    );
  };

export default App;

