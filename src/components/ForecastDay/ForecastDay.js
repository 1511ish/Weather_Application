import React from 'react';
import "./ForecastDay.css";

const ForecastDay = ({ day }) => {
  return (
    <div className="forecast-day">
      <p>{day.name}</p>
      <div className='current-weather-gap'></div>
      <img src={day.icon} alt="Weather Icon" />
      <div className='current-weather-gap'></div>
      <p>{day.temp}°{day.unit}</p>
      <div className='current-weather-gap'></div>
      <hr />
      <div className='current-weather-gap'></div>
      <div className="forecast_status">{day.description}</div>
    </div>
  );
};

export default ForecastDay;





