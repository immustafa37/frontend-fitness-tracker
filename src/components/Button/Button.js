import React from 'react';
import './Button.css';

const Button = ({ children, type = 'primary', styleType = 'neu', onClick }) => {
  const buttonClass = `button ${styleType}-button ${type}`;
  
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;