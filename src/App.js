import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";
import Nav from './components/Nav/Nav.js';
import MainContent from './components/MainContent.js';
import ToggleButton from './components/ToggleButton.js';

import drizzle from "./Icons/drizzle.png";
import haze from "./Icons/haze.png";
import rainy_day from "./Icons/rainy-day.png";
import clouds from "./Icons/clouds.png";
import smog from "./Icons/smog.png";
import sun from "./Icons/sun2.png";
import tornado from "./Icons/tornado.png";
import winter from "./Icons/winter.png";
import rain_strom from "./Icons/rain_storm.png";


import sunny_Background from "./Background/sunny.jpg";
import cloud_Background from "./Background/cloud.jpg";
import heavyRain_Background from "./Background/heavy-rain.jpg";
import snow_Background from "./Background/snow.jpg";
import drizzle_Background from "./Background/drizzle.jpg";
import haze_Background from "./Background/haze.jpg";
import scatteredClouds_Background from "./Background/scattered-clouds.jpg";
import thunderStrom_Background from "./Background/thunderStrom.jpg";
import tornado_Background from "./Background/tornado.jpg";
import windStrom_Background from "./Background/windstrom.jpg";


const weatherIcons = new Map([
  ["Clear", sun],
  ["Haze", haze],
  ["Clouds", clouds],
  ["Rain", rainy_day],
  ["Mist", smog],
  ["Snow", winter],
  ["Dust", smog],
  ["Drizzle", drizzle],
  ["Fog", smog],
  ["Tornado", tornado],
  ["Winter", winter],
  ["Thunderstorm", rain_strom]
]);

const weatherBackgrounds = {
  "clear sky": `url(${sunny_Background})`,
  "heavy intensity rain": `url(${heavyRain_Background})`,
  "very heavy rain": `url(${heavyRain_Background})`,
  "extreme rain": `url(${heavyRain_Background})`,
  "freezing rain": `url(${heavyRain_Background})`,
  "thunderstorm with rain": `url(${heavyRain_Background})`,
  "light rain": `url(${drizzle_Background})`,
  "moderate rain": `url(${drizzle_Background})`,
  "overcast clouds": `url(${cloud_Background})`,
  "shower snow": `url(${snow_Background})`,
  "light shower snow": `url(${snow_Background})`,
  "heavy shower snow": `url(${snow_Background})`,
  "mist": `url(${haze_Background})`,
  "haze": `url(${haze_Background})`,
  "fog": `url(${haze_Background})`,
  "thunderstorm": `url(${thunderStrom_Background})`,
  "windstorm": `url(${windStrom_Background})`,
  "sandstorm": `url(${windStrom_Background})`,
  "dust storm": `url(${windStrom_Background})`,
  "drizzle": `url(${drizzle_Background})`,
  "tornado": `url(${tornado_Background})`,
  "few clouds": `url(${scatteredClouds_Background})`,
  "broken clouds": `url(${scatteredClouds_Background})`,
  "scattered clouds": `url(${scatteredClouds_Background})`,
};

// Convert temperature function
const convertTemperature = (temp, unit) => {
  let convertedTemp;
  if (unit === 'C') {
    convertedTemp = 5 * (temp - 32) / 9;
  }
  else {
    convertedTemp = (temp * 9 / 5) + 32;
  }

  return parseFloat(convertedTemp.toFixed(2));
};

const calculteAvg = (a, b) => {
  return parseFloat(((a + b) / 2).toFixed(2));
}

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(sunny_Background);
  const [temperatureUnit, setTemperatureUnit] = useState('C'); // Initial temperature unit

  useEffect(() => {
    if (weatherCondition && weatherData) {
      // Check if the weather condition is available in the weatherBackgrounds object
      const newBackground = weatherBackgrounds[weatherCondition] || weatherBackgrounds["clear sky"];
      setBackgroundImage(newBackground);
    }
  }, [weatherCondition, weatherData]);

  // Apply temperature conversion when the unit changes
  useEffect(() => {
    if (weatherData && weatherData.temp !== undefined) {
      const updatedWeatherData = {
        ...weatherData,
        temp: convertTemperature(weatherData.temp, temperatureUnit),
        min_temp: convertTemperature(weatherData.min_temp, temperatureUnit),
        max_temp: convertTemperature(weatherData.max_temp, temperatureUnit),
        heatIndex: convertTemperature(weatherData.heatIndex, temperatureUnit),
        unit: temperatureUnit
      };
      setWeatherData(updatedWeatherData);
  
      const updatedForecastData = forecastData.map(day => ({
        ...day,
        temp: convertTemperature(day.temp, temperatureUnit),
        unit: temperatureUnit
      }));
      setForecastData(updatedForecastData);
    }
  }, [temperatureUnit]);
  

  const fetchWeatherData = async (city) => {
    const apiKey = process.env.REACT_APP_Api_Key;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const forecastResponse = await axios.get(forecastUrl);

      const weather = weatherResponse.data;
      setWeatherCondition(weather.weather[0].description);

      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const date = new Date(weather.dt * 1000);

      // Store raw data for temperature conversion later
      setWeatherData({
        temp: parseFloat(weather.main.temp.toFixed(2)),
        min_temp: parseFloat(weather.main.temp_min.toFixed(2)),
        max_temp: parseFloat(weather.main.temp_max.toFixed(2)),
        city: weather.name,
        country: weather.sys.country,
        day: daysOfWeek[date.getDay()],
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        windSpeed: weather.wind.speed,
        humidity: weather.main.humidity,
        heatIndex: weather.main.feels_like,
        description: weather.weather[0].description,
        icon: weatherIcons.get(weather.weather[0].main) || weatherIcons.get("Clear"),
        status: weather.weather[0].main,
        unit: temperatureUnit
      });

      const forecast = forecastResponse.data.list.filter((_, index) => index % 8 === 0).map(forecast => ({
        name: daysOfWeek[new Date(forecast.dt * 1000).getDay()],
        temp: calculteAvg(forecast.main.temp_min, forecast.main.temp_max),
        description: forecast.weather[0].description,
        icon: weatherIcons.get(forecast.weather[0].main),
        unit: temperatureUnit
      }));

      setForecastData(forecast);

    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("Please enter the correct name.");
      } else {
        alert("Something went wrong.");
      }
    }
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  return (
    <div className="weather-app" style={{ backgroundImage: backgroundImage }}>
      <Nav onSearch={fetchWeatherData} />
      <div className='current-weather-gap'></div>
      <ToggleButton temperatureUnit={temperatureUnit} toggleTemperatureUnit={toggleTemperatureUnit} />
      <MainContent weatherData={weatherData} forecastData={forecastData} />
    </div>
  );
};

export default WeatherApp;



