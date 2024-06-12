import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import AnimationLoader from './Pages/animator';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  // useEffect to simulate loading time, you can replace it with your actual loading logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Example: Simulate 3 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          {loading ? (
            <AnimationLoader />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
