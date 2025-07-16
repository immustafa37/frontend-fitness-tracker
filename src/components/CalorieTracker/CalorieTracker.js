import React, { useState } from 'react';
import ActivityRing from '../ActivityRing/ActivityRing';
import GlassCard from '../GlassCard/GlassCard';
import './CalorieTracker.css';

const CalorieTracker = () => {
  const [caloriesConsumed, setCaloriesConsumed] = useState(1200);
  const [caloriesBurned, setCaloriesBurned] = useState(450);
  const [calorieGoal, setCalorieGoal] = useState(2000);
  
  const remainingCalories = calorieGoal - caloriesConsumed + caloriesBurned;
  const progress = Math.min(Math.round((caloriesConsumed / calorieGoal) * 100), 100);

  const addCalories = () => {
    setCaloriesConsumed(prev => prev + 50);
  };

  const subtractCalories = () => {
    setCaloriesConsumed(prev => (prev > 0 ? prev - 50 : 0));
  };

  return (
    <GlassCard title="Calorie Tracker">
      <div className="calorie-tracker">
        <ActivityRing 
          progress={progress} 
          color="#FF5722" 
          size={150} 
          label="Consumed" 
        />
        <div className="calorie-details">
          <div className="calorie-metric">
            <span className="calorie-value">{caloriesConsumed}</span>
            <span className="calorie-label">Consumed</span>
          </div>
          <div className="calorie-metric">
            <span className="calorie-value">{caloriesBurned}</span>
            <span className="calorie-label">Burned</span>
          </div>
          <div className="calorie-metric">
            <span className="calorie-value">{remainingCalories}</span>
            <span className="calorie-label">Remaining</span>
          </div>
          <div className="calorie-controls">
            <button onClick={subtractCalories} className="calorie-button">-</button>
            <button onClick={addCalories} className="calorie-button">+</button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default CalorieTracker;