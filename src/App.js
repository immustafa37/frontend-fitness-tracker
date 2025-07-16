import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Diet from './pages/Diet/Diet';
import Exercise from './pages/Exercise/Exercise';
import Fasting from './pages/Fasting/Fasting';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/diet" className="nav-link">Diet</Link>
            <Link to="/exercise" className="nav-link">Exercise</Link>
            <Link to="/fasting" className="nav-link">Fasting</Link>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/fasting" element={<Fasting />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;