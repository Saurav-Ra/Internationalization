import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Child from './Child';

const Approutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/c" element={<Child />} />
        </Routes>
      </Router>
    </>
  );
};

export default Approutes;
