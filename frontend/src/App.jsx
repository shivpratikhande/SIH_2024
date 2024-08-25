// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './UndertrialComponents/Dashboard';
import LawyerDashboard from "./lawerComponents/components/Pages/LawyerDashboard.jsx"
import Home from './lawerComponents/components/Pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/utp/*" element={<Dashboard />} /> {/* Wildcard route to handle all paths in Dashboard */}
        <Route path="/lawyer/*" element={<LawyerDashboard />} /> {/* Wildcard route to handle all paths in Dashboard */}
        <Route path='/' element={<Home/>} />

      </Routes>
    </Router>
  );
};

export default App;
