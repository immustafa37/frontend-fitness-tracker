import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/diet" className="nav-link">Diet</Link>
        <Link to="/exercise" className="nav-link">Exercise</Link>
        <Link to="/fasting" className="nav-link">Fasting</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;