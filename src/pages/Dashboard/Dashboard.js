import React from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import StepCounter from '../../components/StepCounter/StepCounter';
import CalorieTracker from '../../components/CalorieTracker/CalorieTracker';
import SleepTracker from '../../components/SleepTracker/SleepTracker';
import ActivityRing from '../../components/ActivityRing/ActivityRing';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">Your Dashboard</h1>
      
      <div className="dashboard-grid">
        <GlassCard className="summary-card">
          <div className="summary-stats">
            <ActivityRing progress={75} color="#4CAF50" size={120} label="Today" />
            <div className="summary-details">
              <h3>Daily Summary</h3>
              <div className="stat-item">
                <span className="stat-label">Steps:</span>
                <span className="stat-value">8,542</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Calories:</span>
                <span className="stat-value">1,850</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Sleep:</span>
                <span className="stat-value">7.5h</span>
              </div>
            </div>
          </div>
        </GlassCard>

        <StepCounter />
        <CalorieTracker />
        <SleepTracker />

        <GlassCard className="water-card">
          <h3>Water Intake</h3>
          <div className="water-tracker">
            <ActivityRing progress={60} color="#2196F3" size={120} label="Glasses" />
            <div className="water-controls">
              <button className="water-button">-</button>
              <span className="water-count">6/10</span>
              <button className="water-button">+</button>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="heart-card">
          <h3>Heart Rate</h3>
          <div className="heart-rate">
            <ActivityRing progress={85} color="#FF5252" size={120} label="BPM" />
            <div className="heart-details">
              <div className="heart-value">72</div>
              <div className="heart-status">Resting</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;