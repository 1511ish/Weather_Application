import React from 'react';
import "./CurrentWeather.css";

const CurrentWeather = ({ weatherData }) => {
  console.log(weatherData);
  let base = '../../Icons';
  return (
    <div className="current-weather">
      <div className='current-weather-day'>
        <p>{weatherData.day}</p>
      </div>
      <div className='current-weather-gap'></div>
      <div className="weather-icon">
        <img src={weatherData.icon} alt="Weather Icon" />
      </div>
      <div className='current-weather-gap'></div>
      <div className="temperature">
        <h1>{weatherData.temp}°{weatherData.unit}</h1>
        <p style={{ fontWeight: 900, fontSize: '160%' }}>{weatherData.city}, {weatherData.country}</p>
        <div>
          <p>{weatherData.date}</p>
          <p>{weatherData.time}</p>
        </div>
      </div>
      <div className='current-weather-gap'></div>
      <div className="additional-info">
        <div className="info-box temp">
          <p>Min temp</p>
          <h2>{weatherData.min_temp}°{weatherData.unit}</h2>
        </div>
        <div className="info-box temp">
          <p>Max temp</p>
          <h2>{weatherData.max_temp}°{weatherData.unit}</h2>
        </div>
      </div>
      <div className='current-weather-gap'></div>
      <div className="additional-info">
        <div className="info-box">
          <p>Wind speed</p>
          <h2>{weatherData.windSpeed} Km/h</h2>
        </div>
        <div className="info-box">
          <p>Humidity</p>
          <h2>{weatherData.humidity} gm/m<sup>3</sup></h2>
        </div>
        <div className="info-box">
          <p>Heat Index</p>
          <h2>{weatherData.heatIndex}</h2>
        </div>
      </div>
      <div className='current-weather-gap'></div>
      <hr />
      <div className='current-weather-gap'></div>
      <div className='current-weather-gap'></div>
      <div className="status">{weatherData.description}</div>
    </div>
  );
};

export default CurrentWeather;
