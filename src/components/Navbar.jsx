import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      
      <div className="logo">


        
        
<svg className="logo-icon" viewBox="0 0 48 48" fill="none">
  <defs>
    {/* 🔥 Gradient Background */}
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#8a5cf6da" />
      <stop offset="100%" stopColor="#6365f1e2" />
    </linearGradient>

    {/* 🔥 Inner Light */}
    <radialGradient id="shine" cx="0.3" cy="0.3" r="0.8">
      <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
      <stop offset="100%" stopColor="transparent" />
    </radialGradient>
  </defs>

  {/* 🔥 Base */}
  <rect
    x="4"
    y="4"
    width="40"
    height="40"
    rx="12"
    fill="url(#bg)"
  />

  {/* 🔥 Glass Shine */}
  <rect
    x="4"
    y="4"
    width="40"
    height="40"
    rx="12"
    fill="url(#shine)"
  />

  {/* 🔥 Border subtle */}
  <rect
    x="4"
    y="4"
    width="40"
    height="40"
    rx="12"
    stroke="rgba(255,255,255,0.2)"
  />

  {/* 🔥 Text */}
  <text
    x="50%"
    y="52%"
    dominantBaseline="middle"
    textAnchor="middle"
    fill="white"
    fontSize="20"
    fontWeight="700"
    fontFamily="Poppins, Arial"
    letterSpacing="1"
  >
    W
  </text>
</svg>


        <span>WeatherApp</span>
      </div>

    </div>
  );
}

export default Navbar;