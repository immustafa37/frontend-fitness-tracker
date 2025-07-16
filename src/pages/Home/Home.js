import React from 'react';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import Card from '../../components/Card/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <ThemeToggle />
      <h1>Fitness Tracker</h1>
      
      <div className="cards-container">
        <Card type="glass" title="Daily Stats" />
        <Card type="neu" title="Quick Actions" />
      </div>
    </div>
  );
};

export default Home;