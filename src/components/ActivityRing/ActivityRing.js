import React from 'react';
import './ActivityRing.css';

const ActivityRing = ({ progress, color, size = 150, strokeWidth = 10, label }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="activity-ring-container">
      <svg className="activity-ring" width={size} height={size}>
        <circle
          className="activity-ring-bg"
          stroke="#e0e5ec"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="activity-ring-progress"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="activity-ring-label">
        <span className="activity-ring-value">{progress}%</span>
        {label && <span className="activity-ring-text">{label}</span>}
      </div>
    </div>
  );
};

export default ActivityRing;