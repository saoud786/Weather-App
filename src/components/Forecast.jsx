import { useState } from "react";
import "./Forecast.css";

const forecastData = [
  { day: "Mon", temp: 30, condition: "Sunny", wind: "5 km/h" },
  { day: "Tue", temp: 32, condition: "Cloudy", wind: "7 km/h" },
  { day: "Wed", temp: 29, condition: "Rainy", wind: "10 km/h" },
  { day: "Thu", temp: 31, condition: "Clear", wind: "4 km/h" },
  { day: "Fri", temp: 33, condition: "Hot", wind: "6 km/h" },
];

function Forecast() {
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = forecastData[activeIndex];

  return (
    <div className="forecast-container">
      <h3 className="forecast-title">5-Day Forecast</h3>

      {/* 🔥 Days */}
      <div className="forecast-list">
        {forecastData.map((item, index) => (
          <div
            key={index}
            className={`forecast-item ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <p className="day">{item.day}</p>
            <p className="temp">{item.temp}°</p>
          </div>
        ))}
      </div>

      {/* 🔥 Detail Section */}
      <div className="forecast-detail">
        <h4>{selected.day} Details</h4>
        <p>🌡 Temperature: {selected.temp}°</p>
        <p>🌤 Condition: {selected.condition}</p>
        <p>💨 Wind: {selected.wind}</p>
      </div>
    </div>
  );
}

export default Forecast;