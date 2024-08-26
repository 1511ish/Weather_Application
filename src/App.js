// import React, { useState, useEffect } from 'react';
// // import dotenv from 'dotenv';
// import axios from 'axios';
// import Nav from './components/Nav/Nav.js';
// import CurrentWeather from './components/CurrentWeather/CurrentWeather.js';
// import ForecastDay from './components/ForecastDay/ForecastDay.js';
// import drizzle from "./Icons/drizzle.png";
// import haze from "./Icons/haze.png";
// import rain_storm from "./Icons/rain_storm.png";
// import rainy_day from "./Icons/rainy-day.png";
// import smog from "./Icons/smog.png";
// import sun from "./Icons/sun.png";
// import windstorm from "./Icons/windstorm.png";

// // dotenv.config();

// // import windstorm from "./Icons/windstorm.png";
// import sunny_Background from "./Background/tree-sun.jpg";
// // import litle_cloud from "./Background/litile_clouds.jpg";
// import cloud_Background from "./Background/cloud.jpg";
// import drizzle_Background from "./Background/drizle.jpg";
// import haze_Background from "./Background/haze.jpg";
// import heavyRain_Background from "./Background/heavy-rain.jpg";
// import snow_Background from "./Background/snow.jpg";
// import thunderStrom_Background from "./Background/thunderStrom.jpg";
// import tonado_Background from "./Background/tornado.jpg";
// import whiteStrom_Background from "./Background/whitestrom.jpg";
// import scatteredClouds_Background from "./Background/scattered-clouds.jpg";

// import "./App.css";


// const weatherIcons = new Map([
//   ["Clear", sun],
//   ["Haze", haze],
//   ["Clouds", haze],
//   ["Rain", rainy_day],
//   ["Mist", smog],
//   ["Snow", smog],
//   ["Dust", smog],
//   ["Drizzle", drizzle],
//   ["Fog", smog],
//   ["Smoke", smog],
//   ["Tornado", windstorm]
// ]);

// const weatherBackgrounds = {
//   Clear: `url(${sunny_Background})`,
//   Rain: `url(${heavyRain_Background})`,
//   Clouds: `url(${cloud_Background})`,
//   Snow: `url(${snow_Background})`,
// };
// console.log(process.env.REACT_APP_Api_Key);
// const WeatherApp = () => {

//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState([]);
//   const [weatherCondition, setWeatherCondition] = useState('');
//   const [backgroundImage, setBackgroundImage] = useState('');

//   useEffect(() => {
//     if (weatherCondition) {
//       // const newBackground = weatherBackgrounds[weatherCondition] || "url('/images/default.jpg')";
//       // const newBackground = weatherBackgrounds[weatherCondition] || weatherBackgrounds[sunny];
//       const newBackground = weatherBackgrounds[weatherCondition] || weatherBackgrounds["Clear"];
//       setBackgroundImage(newBackground);
//     }
//   }, [weatherCondition]);

//   const fetchWeatherData = async (city) => {
//     const apiKey = process.env.REACT_APP_Api_Key;
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

//     try {
//       const weatherResponse = await axios.get(weatherUrl);
//       const forecastResponse = await axios.get(forecastUrl);

//       const weather = weatherResponse.data;
//       setWeatherCondition(weather.weather[0].main);

//       // Get the day of the week as a number (0 = Sunday, 6 = Saturday)
//       const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//       const date = new Date(weather.dt* 1000);
//       setWeatherData({
//         temp: weather.main.temp,
//         min_temp: weather.main.temp_min,
//         max_temp: weather.main.temp_max,
//         city: weather.name,
//         country: weather.sys.country,
//         day: daysOfWeek[date.getDay()],
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//         windSpeed: weather.wind.speed,
//         humidity: weather.main.humidity,
//         heatIndex: weather.main.feels_like,
//         description: weather.weather[0].description,
//         icon: weatherIcons.get(weather.weather[0].main),
//         status: weather.weather[0].main
//       });

//       const forecast = forecastResponse.data.list.filter((_, index) => index % 8 === 0).map(forecast => ({
//         // name: new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
//         name: daysOfWeek[new Date(forecast.dt * 1000).getDay()],
//         temp: (forecast.main.temp_min + forecast.main.temp_max)/2,
//         description: forecast.weather[0].description,
//         icon: weatherIcons.get(forecast.weather[0].main)
//       }));

//       // console.log(weather);
//       // console.log(forecastResponse.data.list);

//       setForecastData(forecast);

//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   return (
//     <div className="weather-app" style={{ backgroundImage: backgroundImage }}>
//       <Nav onSearch={fetchWeatherData} />
//       <div className='main_content'>
//         {weatherData && <CurrentWeather weatherData={weatherData} />}
//         <div className="forecast">
//           {forecastData.map((day, index) => (
//             <ForecastDay key={index} day={day} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default WeatherApp;






















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Nav from './components/Nav/Nav.js';
// import CurrentWeather from './components/CurrentWeather/CurrentWeather.js';
// import ForecastDay from './components/ForecastDay/ForecastDay.js';
// import drizzle from "./Icons/drizzle.png";
// import haze from "./Icons/haze.png";
// import rain_storm from "./Icons/rain_storm.png";
// import rainy_day from "./Icons/rainy-day.png";
// import smog from "./Icons/smog.png";
// import sun from "./Icons/sun.png";
// import windstorm from "./Icons/windstorm.png";
// import sunny_Background from "./Background/tree-sun.jpg";
// import cloud_Background from "./Background/cloud.jpg";
// import heavyRain_Background from "./Background/heavy-rain.jpg";
// import snow_Background from "./Background/snow.jpg";

// import "./App.css";

// const weatherIcons = new Map([
//   ["Clear", sun],
//   ["Haze", haze],
//   ["Clouds", haze],
//   ["Rain", rainy_day],
//   ["Mist", smog],
//   ["Snow", smog],
//   ["Dust", smog],
//   ["Drizzle", drizzle],
//   ["Fog", smog],
//   ["Smoke", smog],
//   ["Tornado", windstorm]
// ]);

// const weatherBackgrounds = {
//   Clear: `url(${sunny_Background})`,
//   Rain: `url(${heavyRain_Background})`,
//   Clouds: `url(${cloud_Background})`,
//   Snow: `url(${snow_Background})`,
// };

// const convertTemperature = (temp, unit) => {
//   if (unit === 'C') {
//     return temp;
//   }
//   return (temp * 9/5) + 32; // Convert Celsius to Fahrenheit
// };

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [forecastData, setForecastData] = useState([]);
//   const [weatherCondition, setWeatherCondition] = useState('');
//   const [backgroundImage, setBackgroundImage] = useState('');
//   const [temperatureUnit, setTemperatureUnit] = useState('C');

//   useEffect(() => {
//     if (weatherCondition) {
//       const newBackground = weatherBackgrounds[weatherCondition] || weatherBackgrounds["Clear"];
//       setBackgroundImage(newBackground);
//     }
//   }, [weatherCondition]);

//   useEffect(() => {
//     if (weatherData) {
//       // Re-fetch weather data to update temperatures when the unit changes
//       fetchWeatherData(weatherData.city);
//     }
//   }, [temperatureUnit]);

//   const fetchWeatherData = async (city) => {
//     const apiKey = process.env.REACT_APP_Api_Key;
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//     const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

//     try {
//       const weatherResponse = await axios.get(weatherUrl);
//       const forecastResponse = await axios.get(forecastUrl);

//       const weather = weatherResponse.data;
//       setWeatherCondition(weather.weather[0].main);

//       // Get the day of the week as a number (0 = Sunday, 6 = Saturday)
//       const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//       const date = new Date(weather.dt * 1000);
//       setWeatherData({
//         temp: convertTemperature(weather.main.temp, temperatureUnit),
//         min_temp: convertTemperature(weather.main.temp_min, temperatureUnit),
//         max_temp: convertTemperature(weather.main.temp_max, temperatureUnit),
//         city: weather.name,
//         country: weather.sys.country,
//         day: daysOfWeek[date.getDay()],
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//         windSpeed: weather.wind.speed,
//         humidity: weather.main.humidity,
//         heatIndex: convertTemperature(weather.main.feels_like, temperatureUnit),
//         description: weather.weather[0].description,
//         icon: weatherIcons.get(weather.weather[0].main),
//         status: weather.weather[0].main
//       });

//       const forecast = forecastResponse.data.list.filter((_, index) => index % 8 === 0).map(forecast => ({
//         name: daysOfWeek[new Date(forecast.dt * 1000).getDay()],
//         temp: convertTemperature((forecast.main.temp_min + forecast.main.temp_max) / 2, temperatureUnit),
//         description: forecast.weather[0].description,
//         icon: weatherIcons.get(forecast.weather[0].main)
//       }));

//       setForecastData(forecast);

//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const toggleTemperatureUnit = () => {
//     setTemperatureUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
//   };

//   return (
//     <div className="weather-app" style={{ backgroundImage: backgroundImage }}>
//       <Nav onSearch={fetchWeatherData} />
//       <button onClick={toggleTemperatureUnit}>
//         Switch to {temperatureUnit === 'C' ? 'Fahrenheit' : 'Celsius'}
//       </button>
//       <div className='main_content'>
//         {weatherData && <CurrentWeather weatherData={weatherData} />}
//         <div className="forecast">
//           {forecastData.map((day, index) => (
//             <ForecastDay key={index} day={day} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;





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
  ["Winter", winter]
]);

const weatherBackgrounds = {
  "clear sky": `url(${sunny_Background})`,
  "heavy intensity rain": `url(${heavyRain_Background})`,
  "very heavy rain": `url(${heavyRain_Background})`,
  "extreme rain": `url(${heavyRain_Background})`,
  "freezing rain": `url(${heavyRain_Background})`,
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
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [temperatureUnit, setTemperatureUnit] = useState('C'); // Initial temperature unit

  // Default city
  const defaultCity = 'Shimla';

  // For default city
  useEffect(() => {
    fetchWeatherData(defaultCity);
  }, []);

  useEffect(() => {
    if (weatherCondition) {
      const newBackground = weatherBackgrounds[weatherCondition] || weatherBackgrounds["Clear Sky"];
      setBackgroundImage(newBackground);
    }
  }, [weatherCondition]);

  // Apply temperature conversion when the unit changes
  useEffect(() => {
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
      if (error.response.status === '404') {
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



