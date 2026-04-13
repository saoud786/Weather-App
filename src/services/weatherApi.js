const API_KEY = "a049ee68e4c40323a8f8063066bd6eda";

export const getWeather = async (city) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    // 🔥 country full name mapping (optional pro feature)
    const countryNames = {
      IN: "India",
      US: "USA",
      GB: "United Kingdom",
      CA: "Canada",
      AU: "Australia",
    };

    return {
      name: data.name,
      temp: data.main.temp,
      feels: data.main.feels_like,
      min: data.main.temp_min,
      max: data.main.temp_max,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      pressure: data.main.pressure,

      condition: data.weather[0].main,
      icon: data.weather[0].icon,

      // 🔥 NEW
      country: countryNames[data.sys.country] || data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };

  } catch (error) {
    throw error;
  }
};