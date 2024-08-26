// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './UndertrialComponents/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Dashboard />} /> {/* Wildcard route to handle all paths in Dashboard */}
      </Routes>
    </Router>
  );
};

export default App;
