import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to HashRouter
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import '../css/app.css';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);
