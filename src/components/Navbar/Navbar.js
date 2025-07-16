import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeumoButton from '../NeumoButton/NeumoButton';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="menu-toggle" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <Link to="/">HealthTracker</Link>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="desktop-links">
          <Link to="/dashboard"><NeumoButton>Dashboard</NeumoButton></Link>
          <Link to="/activities"><NeumoButton>Activities</NeumoButton></Link>
          <Link to="/nutrition"><NeumoButton>Nutrition</NeumoButton></Link>
          <Link to="/settings"><NeumoButton>Settings</NeumoButton></Link>
        </div>
        
        <div className="navbar-theme">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-links">
          <Link to="/dashboard" onClick={() => setIsSidebarOpen(false)}>
            <NeumoButton className="sidebar-button">Dashboard</NeumoButton>
          </Link>
          <Link to="/activities" onClick={() => setIsSidebarOpen(false)}>
            <NeumoButton className="sidebar-button">Activities</NeumoButton>
          </Link>
          <Link to="/nutrition" onClick={() => setIsSidebarOpen(false)}>
            <NeumoButton className="sidebar-button">Nutrition</NeumoButton>
          </Link>
          <Link to="/settings" onClick={() => setIsSidebarOpen(false)}>
            <NeumoButton className="sidebar-button">Settings</NeumoButton>
          </Link>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Navbar;