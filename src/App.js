import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);
  const onWeightChange = (event) => {
    setWeight(event.target.value)
  }
  const onHeightChange = (event) => {
    setHeight(event.target.value)
  }
  const bmi = (weight / (Math.pow(height / 100, 2))).toFixed(1);
  return (
    <div>
      <main>
        <h1>Project 4: BMI CALCULATOR</h1>
        <div className="input-section">
          <p className='slider-output'>Weight {weight} kg</p>
          <input className='input-slider' type="range" step="0.1" min="40" max="200" onChange={onWeightChange} />
          <p className='slider-output'>Height {height} cm</p>
          <input className='input-slider' type='range' min="140" max="220" onChange={onHeightChange} />
        </div>
        <div className='output-section'>
          <p>Your BMI is</p>
          <p className='output'>{bmi}</p>
        </div>

      </main>
    </div>
  );
};

export default App;