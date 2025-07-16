import React from 'react';
import './NeumoButton.css';

const NeumoButton = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button 
      type={type}
      className={`neumo-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NeumoButton;