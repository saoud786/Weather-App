import "./CurrentWeather.css";

// 🔥 PRO ICONS
import { WiTime1, WiThermometer } from "react-icons/wi";
import { FaGlobeAsia } from "react-icons/fa";

function CurrentWeather({ data }) {
  if (!data) return null;

  return (
    <div className="weather-card">

      {/* 🔝 TOP */}
      <div className="top">
        <h2 className="city">{data.name}</h2>
        <span className="condition">{data.condition}</span>
      </div>

      {/* 🔥 CENTER */}
      <div className="middle">
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="weather"
          className="weather-icon"
        />

        <h1 className="ttemp">{Math.round(data.temp)}°</h1>

        <p className="date">
          {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* 📊 BOTTOM */}
      <div className="bottom">

        {/* 🕒 Time */}
        <div className="item">
          <p>
            <WiTime1 className="pro-icon" />
            Time
          </p>
          <h4>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h4>
        </div>

        {/* 🌍 Country */}
        <div className="item">
          <p>
            <FaGlobeAsia className="pro-icon" />
            Country
          </p>
          <h4>{data.country}</h4>
        </div>

        {/* 🌡 Feels Like */}
        <div className="item">
          <p>
            <WiThermometer className="pro-icon" />
            Feels Like
          </p>
          <h4>{Math.round(data.feels)}°</h4>
        </div>

      </div>

    </div>
  );
}

export default CurrentWeather;