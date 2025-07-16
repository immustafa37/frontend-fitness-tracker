import React from 'react';
import './Card.css';

const Card = ({ type = 'glass', title, children }) => {
  const cardClass = type === 'glass' ? 'glass-card' : 'neu-card';
  
  return (
    <div className={`card ${cardClass}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;