import React from "react"
import './App.css';
import WeatherCard from "./WeatherFetch"

function App() {
  return (
    <div className="App">
      <header className="header">
      <h1>Weather App</h1>
      </header>
      <WeatherCard/>
    </div>
  );
}

export default App;
