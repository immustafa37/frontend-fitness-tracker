import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Fasting.css';

const Fasting = () => {
  const [isFasting, setIsFasting] = useState(false);
  const [timer, setTimer] = useState('00:00:00');

  const toggleFasting = () => {
    setIsFasting(!isFasting);
  };

  return (
    <div className="fasting-page">
      <h2>Fasting Tracker</h2>
      
      <div className="fasting-cards">
        <Card type="glass" title="Current Fast">
          <div className="fasting-status">
            <h3>{isFasting ? 'Fasting In Progress' : 'Not Fasting'}</h3>
            <div className="timer">{timer}</div>
            <Button 
              onClick={toggleFasting}
              type={isFasting ? 'secondary' : 'primary'}
            >
              {isFasting ? 'End Fast' : 'Start Fast'}
            </Button>
          </div>
        </Card>
        
        <Card type="neu" title="Fasting History">
          <ul className="fasting-history">
            <li>Yesterday: 16 hours</li>
            <li>Monday: 14 hours</li>
            <li>Sunday: 18 hours</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Fasting;