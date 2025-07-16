import React, { useState } from 'react';
import GlassCard from '../../components/GlassCard/GlassCard';
import NeumoButton from '../../components/NeumoButton/NeumoButton';
import './Settings.css';

const Settings = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    height: 175,
    weight: 70,
    dailyStepGoal: 10000,
    dailyCalorieGoal: 2000,
    sleepGoal: 8,
    waterGoal: 8,
    notifications: true,
    darkMode: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      <GlassCard className="settings-card">
        <form onSubmit={handleSubmit}>
          <div className="settings-section">
            <h2>Profile</h2>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="settings-section">
            <h2>Health Metrics</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h2>Daily Goals</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Steps</label>
                <input
                  type="number"
                  name="dailyStepGoal"
                  value={formData.dailyStepGoal}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Calories (kcal)</label>
                <input
                  type="number"
                  name="dailyCalorieGoal"
                  value={formData.dailyCalorieGoal}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Sleep (hours)</label>
                <input
                  type="number"
                  name="sleepGoal"
                  value={formData.sleepGoal}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Water (glasses)</label>
                <input
                  type="number"
                  name="waterGoal"
                  value={formData.waterGoal}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="settings-section">
            <h2>Preferences</h2>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleChange}
              />
              <label htmlFor="notifications">Enable Notifications</label>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="darkMode"
                name="darkMode"
                checked={formData.darkMode}
                onChange={handleChange}
              />
              <label htmlFor="darkMode">Dark Mode</label>
            </div>
          </div>

          <div className="form-actions">
            <NeumoButton type="submit" className="save-button">
              Save Changes
            </NeumoButton>
          </div>
        </form>
      </GlassCard>
    </div>
  );
};

export default Settings;