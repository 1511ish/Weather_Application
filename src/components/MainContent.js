import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Forecast from "./Forecast.js";

const MainContent = ({ weatherData, forecastData }) => (
    <div className='main_content'>
        {weatherData && Object.keys(weatherData).length > 0 && <CurrentWeather weatherData={weatherData} />}
        <Forecast forecastData={forecastData} />
    </div>
);

export default MainContent;  