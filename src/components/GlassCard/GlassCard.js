import React from 'react';
import './GlassCard.css';

const GlassCard = ({ children, title, className = '' }) => {
  return (
    <div className={`glass-card ${className}`}>
      {title && <h3 className="glass-card-title">{title}</h3>}
      <div className="glass-card-content">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;