import React from "react";
import "./SlidingPage.css";

const tags = [
  "Nexus Music Publishing",
  "Artists",
  "Songwriters",
  "Music Producers",
  "Composers",
  "Entertainment",
  "Sound Designers",
];

const repeatedTags = Array(20).fill(tags).flat(); // Adjust number to control length

const SlidingPage: React.FC = () => {
  return (
    <div
      className="sliding-page"
      style={{ backgroundColor: `var(--primary-color)`, color: "#fff" }}
    >
      <div className="sliding-track">
        {repeatedTags.map((tag, index) => (
          <span className="sliding-text" key={index}>
            {tag}
 
          </span>
        ))}
      </div>
    </div>
  );
};

export default SlidingPage;