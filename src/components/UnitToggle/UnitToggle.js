// src/components/UnitToggle.js
import React from 'react';

const UnitToggle = ({ unit, onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>
        {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
    </div>
  );
};

export default UnitToggle;
