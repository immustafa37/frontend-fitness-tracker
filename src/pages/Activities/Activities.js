import React from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import ActivityRing from '../../components/ActivityRing/ActivityRing';
import './Activities.css';

const Activities = () => {
  const activities = [
    { name: 'Walking', duration: '45 min', calories: 210, progress: 80 },
    { name: 'Running', duration: '30 min', calories: 320, progress: 65 },
    { name: 'Cycling', duration: '60 min', calories: 450, progress: 90 },
    { name: 'Swimming', duration: '40 min', calories: 280, progress: 70 },
  ];

  return (
    <div className="activities-page">
      <h1>Your Activities</h1>
      
      <GlassCard className="activity-summary">
        <div className="summary-header">
          <h2>Weekly Summary</h2>
          <div className="summary-period">Jun 12 - Jun 18</div>
        </div>
        <div className="summary-stats">
          <div className="stat-item">
            <ActivityRing progress={72} color="#4CAF50" size={100} />
            <div className="stat-details">
              <div className="stat-value">72%</div>
              <div className="stat-label">Goal Completion</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-value">5.2h</div>
            <div className="stat-label">Active Time</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2,450</div>
            <div className="stat-label">Calories Burned</div>
          </div>
        </div>
      </GlassCard>

      <div className="activities-grid">
        {activities.map((activity, index) => (
          <GlassCard key={index} className="activity-card">
            <div className="activity-header">
              <h3>{activity.name}</h3>
              <ActivityRing 
                progress={activity.progress} 
                color={getActivityColor(activity.name)} 
                size={80} 
              />
            </div>
            <div className="activity-details">
              <div className="detail-item">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">{activity.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Calories:</span>
                <span className="detail-value">{activity.calories}</span>
              </div>
            </div>
            <button className="activity-button">View Details</button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

function getActivityColor(activityName) {
  const colors = {
    'Walking': '#4CAF50',
    'Running': '#FF5722',
    'Cycling': '#2196F3',
    'Swimming': '#9C27B0'
  };
  return colors[activityName] || '#607D8B';
}

export default Activities;