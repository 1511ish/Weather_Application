import React from "react";
import "./Forecast";
import ForecastDay from "./ForecastDay/ForecastDay";
const Forecast = ({ forecastData }) => (
    <div className="forecast">
        {forecastData.map((day, index) => (
            <ForecastDay key={index} day={day} />
        ))}
    </div>
);

export default Forecast;