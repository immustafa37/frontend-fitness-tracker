import React from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import NeumoButton from '../../components/NeumoButton/NeumoButton';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <GlassCard className="hero-card">
        <h1>Welcome to HealthTracker</h1>
        <p>Your personal health and fitness companion</p>
        <div className="hero-buttons">
          <NeumoButton className="primary-button">Get Started</NeumoButton>
          <NeumoButton className="secondary-button">Learn More</NeumoButton>
        </div>
      </GlassCard>

      <div className="features-grid">
        <GlassCard className="feature-card">
          <h3>Activity Tracking</h3>
          <p>Monitor your daily steps, distance, and active minutes.</p>
        </GlassCard>
        
        <GlassCard className="feature-card">
          <h3>Nutrition Log</h3>
          <p>Track your calories and maintain a balanced diet.</p>
        </GlassCard>
        
        <GlassCard className="feature-card">
          <h3>Sleep Analysis</h3>
          <p>Understand your sleep patterns for better rest.</p>
        </GlassCard>
        
        <GlassCard className="feature-card">
          <h3>Personalized Goals</h3>
          <p>Set and achieve your health objectives.</p>
        </GlassCard>
      </div>
    </div>
  );
};

export default Home;