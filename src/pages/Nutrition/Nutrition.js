import React, { useState } from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import ActivityRing from '../../components/ActivityRing/ActivityRing';
import './Nutrition.css';

const Nutrition = () => {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Breakfast', calories: 450, protein: 25, carbs: 45, fat: 15 },
    { id: 2, name: 'Lunch', calories: 650, protein: 35, carbs: 55, fat: 20 },
    { id: 3, name: 'Dinner', calories: 550, protein: 30, carbs: 40, fat: 25 },
    { id: 4, name: 'Snacks', calories: 200, protein: 5, carbs: 25, fat: 10 },
  ]);

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const calorieGoal = 2000;
  const calorieProgress = Math.min(Math.round((totalCalories / calorieGoal) * 100), 100);

  const macronutrients = {
    protein: meals.reduce((sum, meal) => sum + meal.protein, 0),
    carbs: meals.reduce((sum, meal) => sum + meal.carbs, 0),
    fat: meals.reduce((sum, meal) => sum + meal.fat, 0),
  };

  const addMeal = () => {
    const newMeal = {
      id: meals.length + 1,
      name: `Meal ${meals.length + 1}`,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
    setMeals([...meals, newMeal]);
  };

  return (
    <div className="nutrition-page">
      <h1>Nutrition Tracker</h1>
      
      <GlassCard className="nutrition-summary">
        <div className="summary-header">
          <h2>Today's Nutrition</h2>
          <div className="summary-date">{new Date().toLocaleDateString()}</div>
        </div>
        <div className="summary-content">
          <div className="calorie-summary">
            <ActivityRing progress={calorieProgress} color="#FF9800" size={120} />
            <div className="calorie-details">
              <div className="calorie-total">{totalCalories}</div>
              <div className="calorie-goal">/ {calorieGoal} kcal</div>
              <div className="calorie-remaining">{calorieGoal - totalCalories} kcal remaining</div>
            </div>
          </div>
          <div className="macro-summary">
            <div className="macro-item">
              <div className="macro-label">Protein</div>
              <div className="macro-value">{macronutrients.protein}g</div>
              <div className="macro-bar">
                <div 
                  className="macro-fill protein" 
                  style={{ width: `${(macronutrients.protein / 150) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="macro-item">
              <div className="macro-label">Carbs</div>
              <div className="macro-value">{macronutrients.carbs}g</div>
              <div className="macro-bar">
                <div 
                  className="macro-fill carbs" 
                  style={{ width: `${(macronutrients.carbs / 250) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="macro-item">
              <div className="macro-label">Fat</div>
              <div className="macro-value">{macronutrients.fat}g</div>
              <div className="macro-bar">
                <div 
                  className="macro-fill fat" 
                  style={{ width: `${(macronutrients.fat / 70) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      <div className="meals-section">
        <div className="meals-header">
          <h2>Meals</h2>
          <button onClick={addMeal} className="add-meal-button">+ Add Meal</button>
        </div>
        
        <div className="meals-grid">
          {meals.map(meal => (
            <GlassCard key={meal.id} className="meal-card">
              <div className="meal-header">
                <h3>{meal.name}</h3>
                <div className="meal-calories">{meal.calories} kcal</div>
              </div>
              <div className="meal-macros">
                <div className="macro">
                  <div className="macro-label">Protein</div>
                  <div className="macro-value">{meal.protein}g</div>
                </div>
                <div className="macro">
                  <div className="macro-label">Carbs</div>
                  <div className="macro-value">{meal.carbs}g</div>
                </div>
                <div className="macro">
                  <div className="macro-label">Fat</div>
                  <div className="macro-value">{meal.fat}g</div>
                </div>
              </div>
              <div className="meal-actions">
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;