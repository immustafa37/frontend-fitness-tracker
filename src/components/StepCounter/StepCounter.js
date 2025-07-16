import React, { useState, useEffect } from 'react';
import ActivityRing from '../ActivityRing/ActivityRing';
import GlassCard from '../GlassCard/GlassCard';
import './StepCounter.css';

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000);
  const progress = Math.min(Math.round((steps / goal) * 100), 100);

  useEffect(() => {
    // Simulate step data - in a real app, this would come from a health API
    const interval = setInterval(() => {
      setSteps(prev => {
        const newSteps = prev + Math.floor(Math.random() * 100);
        return newSteps > goal ? goal : newSteps;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [goal]);

  return (
    <GlassCard title="Step Counter">
      <div className="step-counter">
        <ActivityRing 
          progress={progress} 
          color="#4CAF50" 
          size={180} 
          label="Steps" 
        />
        <div className="step-details">
          <div className="step-count">{steps.toLocaleString()}</div>
          <div className="step-goal">Goal: {goal.toLocaleString()}</div>
          <div className="step-progress-bar">
            <div 
              className="step-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default StepCounter;