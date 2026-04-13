import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
    setCity("");
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

     <button type="submit" className="search-btn">

  <svg
    className="search-icon"
    viewBox="0 0 24 24"
    fill="none"
  >
    <circle
      cx="11"
      cy="11"
      r="7"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="16.5"
      y1="16.5"
      x2="21"
      y2="21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>

</button>

    </form>
  );
}

export default SearchBar;