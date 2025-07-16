import React, { useState } from 'react';
import GlassCard from '../GlassCard/GlassCard';
import './SleepTracker.css';

const SleepTracker = () => {
  const [sleepHours, setSleepHours] = useState(7.5);
  const [sleepGoal, setSleepGoal] = useState(8);
  const progress = Math.min(Math.round((sleepHours / sleepGoal) * 100), 100);

  const addSleep = () => {
    setSleepHours(prev => (prev < 24 ? prev + 0.5 : 24));
  };

  const subtractSleep = () => {
    setSleepHours(prev => (prev > 0 ? prev - 0.5 : 0));
  };

  return (
    <GlassCard title="Sleep Tracker">
      <div className="sleep-tracker">
        <div className="sleep-visual">
          <div className="sleep-moon">🌙</div>
          <div className="sleep-stars">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="sleep-star">⭐</div>
            ))}
          </div>
        </div>
        <div className="sleep-details">
          <div className="sleep-hours">
            <span className="sleep-value">{sleepHours}</span>
            <span className="sleep-unit">hours</span>
          </div>
          <div className="sleep-goal">
            <span>Goal: </span>
            <span>{sleepGoal} hours</span>
          </div>
          <div className="sleep-progress">
            <div 
              className="sleep-progress-bar" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="sleep-controls">
            <button onClick={subtractSleep} className="sleep-button">-</button>
            <button onClick={addSleep} className="sleep-button">+</button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default SleepTracker;