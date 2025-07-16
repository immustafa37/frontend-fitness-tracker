import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;