import React from 'react';
import { Link } from 'react-router-dom';
import NeumoButton from '../NeumoButton/NeumoButton';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">HealthTracker</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard"><NeumoButton>Dashboard</NeumoButton></Link>
        <Link to="/activities"><NeumoButton>Activities</NeumoButton></Link>
        <Link to="/nutrition"><NeumoButton>Nutrition</NeumoButton></Link>
        <Link to="/settings"><NeumoButton>Settings</NeumoButton></Link>
      </div>
      <div className="navbar-theme">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;