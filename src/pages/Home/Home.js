import React from 'react';
import Card from '../../components/Card/Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="cards-container">
        <Card type="glass" title="Daily Stats">
          <p>Track your daily progress here</p>
        </Card>
        <Card type="neu" title="Quick Actions">
          <button className="neu-button">Log Workout</button>
          <button className="neu-button">Add Meal</button>
        </Card>
      </div>
    </div>
  );
};

export default Home;