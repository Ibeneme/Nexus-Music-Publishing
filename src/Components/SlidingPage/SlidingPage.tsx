import React from "react";
import "./SlidingPage.css";
import { useTheme } from "../../contexts/ThemeContext";

const slidingText = " Trusted By FilmOne Entertainment | Prime Video | Red Bull Music Library | Premier Music | + more. ";

const SlidingPage: React.FC = () => {
  return (
    <div
      className="sliding-page"
      style={{ backgroundColor: `var(--primary-color)`, color: "#fff" }}
    >
      <div className="sliding-track">
        <span className="sliding-text">{slidingText.repeat(26)}</span>
        <span className="sliding-text">{slidingText.repeat(26)}</span>
      </div>
    </div>
  );
};

export default SlidingPage;
