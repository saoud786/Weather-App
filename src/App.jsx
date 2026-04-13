import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import RecentSearches from "./components/RecentSearches";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

import { getWeather } from "./services/weatherApi";

import "./App.css";

function App() {
  const [recentCities, setRecentCities] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bg, setBg] = useState("default");

  // 🔥 LOAD SAVED DATA + FETCH NEW
  useEffect(() => {
    // ✅ Load cached weather (instant UI)
    const savedWeather = JSON.parse(localStorage.getItem("weather"));
    if (savedWeather) {
      setWeather(savedWeather);

      // 🔥 background bhi set karo
      const condition = savedWeather.condition?.toLowerCase() || "";
      if (condition.includes("cloud")) setBg("cloud");
      else if (condition.includes("rain")) setBg("rain");
      else if (condition.includes("clear")) setBg("clear");
      else if (condition.includes("fog") || condition.includes("haze"))
        setBg("fog");
      else setBg("default");
    }

    // ✅ Load recent cities
    const savedRecent =
      JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentCities(savedRecent);

    // ✅ Fetch fresh data
    const savedCity = localStorage.getItem("city") || "Kerala";
    handleSearch(savedCity);
  }, []);

  // 🔍 SEARCH FUNCTION
  const handleSearch = async (city) => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);
      setWeather(data);

      // ✅ Save weather cache
      localStorage.setItem("weather", JSON.stringify(data));

      // ✅ Save last city
      localStorage.setItem("city", city);

      // ✅ Update recent cities safely
      setRecentCities((prev) => {
        let updated = [
          city,
          ...prev.filter(
            (c) => c.toLowerCase() !== city.toLowerCase()
          ),
        ];

        updated = updated.slice(0, 5);
        localStorage.setItem("recentCities", JSON.stringify(updated));
        return updated;
      });

      // 🔥 dynamic background
      const condition = data.condition?.toLowerCase() || "";

      if (condition.includes("cloud")) setBg("cloud");
      else if (condition.includes("rain")) setBg("rain");
      else if (condition.includes("clear")) setBg("clear");
      else if (condition.includes("fog") || condition.includes("haze"))
        setBg("fog");
      else setBg("default");

    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${bg}`}>

      {/* 🔥 Navbar */}
      <Navbar />

      {/* 🔥 Main Content */}
      <div className="main-content">

        {/* 🔍 Search */}
        <SearchBar onSearch={handleSearch} />

        {/* 🔄 LOADER */}
        {loading && (
          <div className="loader">
            <div className="spinner"></div>
            <p>Fetching weather...</p>
          </div>
        )}

        {/* ❌ Error */}
        {error && <p className="status error">{error}</p>}

        {/* 🌦 Weather UI */}
        {weather && (
          <>
            {/* 🔥 TOP GRID */}
            <div className="weather-layout">

              <RecentSearches
                cities={recentCities}
                onSelect={handleSearch}
              />

              <CurrentWeather data={weather} />

              <WeatherDetails data={weather} />

            </div>

            {/* 🔥 FORECAST */}
            <Forecast />
          </>
        )}

      </div>

      {/* ✅ FOOTER */}
      <Footer />

    </div>
  );
}

export default App;