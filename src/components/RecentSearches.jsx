import "./RecentSearches.css";

function RecentSearches({ cities, onSelect }) {
  return (
    <div className="recent-container">

      <h3 className="recent-title">Recent</h3>

      {cities.length === 0 ? (
        <p className="empty">No recent searches</p>
      ) : (
        <div className="recent-list">
          {cities.map((city, index) => (
            <button
              key={index}
              className="recent-item"
              onClick={() => onSelect(city)}
            >
              {city}
            </button>
          ))}
        </div>
      )}

    </div>
  );
}

export default RecentSearches;