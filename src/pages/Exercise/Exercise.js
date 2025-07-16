import React from 'react';
import Card from '../../components/Card/Card';
import './Exercise.css';

const Exercise = () => {
  return (
    <div className="exercise-page">
      <h2>Exercise Tracker</h2>
      
      <div className="exercise-cards">
        <Card type="neu" title="Workout Plan">
          <div className="workout-item">
            <h4>Morning Routine</h4>
            <p>30 min Yoga</p>
          </div>
          <div className="workout-item">
            <h4>Evening Routine</h4>
            <p>45 min Weight Training</p>
          </div>
        </Card>
        
        <Card type="glass" title="Progress">
          <div className="progress-circle">
            <div className="circle">
              <span>75%</span>
            </div>
            <p>Weekly Goal</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Exercise;