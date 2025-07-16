import React from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Diet.css';

const Diet = () => {
  return (
    <div className="diet-page">
      <h2>Diet Tracker</h2>
      
      <div className="diet-cards">
        <Card type="glass" title="Today's Meals">
          <ul className="meal-list">
            <li>Breakfast: Oatmeal</li>
            <li>Lunch: Grilled Chicken</li>
            <li>Dinner: Salmon</li>
          </ul>
        </Card>
        
        <Card type="neu" title="Quick Log">
          <div className="button-group">
            <Button styleType="glass">Add Meal</Button>
            <Button styleType="neu" type="secondary">Add Water</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Diet;