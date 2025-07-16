import React from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Diet.css';

const Diet = () => {
  return (
    <div className="diet-page">
      <Card type="glass" title="Today's Meals">
        <ul className="meal-list">
          <li>Breakfast: Oatmeal (300 cal)</li>
          <li>Lunch: Grilled Chicken (450 cal)</li>
          <li>Dinner: Salmon (400 cal)</li>
        </ul>
        <div className="button-group">
          <Button styleType="glass">Add Meal</Button>
          <Button type="secondary">Add Water</Button>
        </div>
      </Card>
    </div>
  );
};

export default Diet;