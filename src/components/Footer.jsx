import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 WeatherApp • Built by Saoud Ali</p>

      <div className="footer-links">
        <a href="https://github.com/saoud786" target="_blank" rel="noreferrer">
          <FaGithub className="footer-icon" />
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/saoud-ali-1b40022b6/" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-icon" />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;