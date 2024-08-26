import React, { useState } from 'react';
import "./Nav.css";

const Nav = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim().length === 0) {
      alert("Please enter the city name.");
      return; // Return if the input is empty
    }
    onSearch(city);
  };

  return (
    <nav>
      <h1>Weather Application</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Nav;
