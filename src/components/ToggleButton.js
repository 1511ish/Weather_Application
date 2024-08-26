import React from "react";

const ToggleButton = ({ temperatureUnit, toggleTemperatureUnit }) => (
    <button onClick={toggleTemperatureUnit} className='toggle-button'>
        Switch to {temperatureUnit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </button>
);

export default ToggleButton;


