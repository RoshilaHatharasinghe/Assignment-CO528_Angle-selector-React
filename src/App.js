import React, { useState } from 'react';
import './App.css';

function App() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    const value = Math.max(0, Math.min(360, Number(e.target.value)));
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(Number(e.target.value));
  };

  const handleRadioChange = (e) => {
    setAngle(Number(e.target.value));
  };

  return (
    <div className="App">
      <h1>Angle Selector</h1>
      <input
        type="number"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
      />
      <br />
      <input
        type="range"
        min="0"
        max="360"
        value={angle}
        onChange={handleSliderChange}
      />
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="commonValue"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          /> 0
        </label>
        <label>
          <input
            type="radio"
            name="commonValue"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          /> 45
        </label>
        <label>
          <input
            type="radio"
            name="commonValue"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          /> 60
        </label>
        <label>
          <input
            type="radio"
            name="commonValue"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          /> 90
        </label>
        <label>
          <input
            type="radio"
            name="commonValue"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          /> 180
        </label>
      </div>
    </div>
  );
}

export default App;
