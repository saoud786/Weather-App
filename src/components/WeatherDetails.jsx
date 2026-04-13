import "./WeatherDetails.css";

function WeatherDetails({ data }) {
  if (!data) return null;

  return (
    <div className="details-container">

    

      <div className="detail-card">
        <p>💧 Humidity</p>
        <h3>{data.humidity}%</h3>
      </div>

      <div className="detail-card">
        <p>🌬 Wind</p>
        <h3>{data.wind} km/h</h3>
      </div>

      <div className="detail-card">
        <p>🔻 Min Temp</p>
        <h3>{Math.round(data.min)}°</h3>
      </div>

      <div className="detail-card">
        <p>🔺 Max Temp</p>
        <h3>{Math.round(data.max)}°</h3>
      </div>

    </div>
  );
}

export default WeatherDetails;