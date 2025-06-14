import {
  FaMusic, // general music icon
  FaCoins, // income/royalties
  FaCopyright, // copyright protection
} from "react-icons/fa";
import "./TaglineSection.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MusicBeatVisualizer from "./MusicBeatVisualizer";

const supportPoints = [
  {
    icon: <FaMusic size={20} />,
    title: "Track Your Royalties",
    description:
      "We ensure every penny you deserve is accounted for. You’ll always know where your money comes from.",
  },
  {
    icon: <FaCoins size={20} />,
    title: "Secure Your Income",
    description:
      "Multiple revenue streams, including our music library, sync licensing, and publishing royalties.",
  },
  {
    icon: <FaCopyright size={20} />,
    title: "Protect Your Rights",
    description:
      "Your copyrights are safe. We handle the admin so you can focus on creating.",
  },
];

const TaglineSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="tagline-section" data-aos="zoom-out">
      <section className="tagline-header">
        <h2 className="animated-header">
          We Don’t Just Manage <span className="decorated-texts">Songs</span>; We Build{" "}
          <span className="decorated-text" >Legacies</span>
        </h2>
        <p className="animated-description">
          Here’s how we help our songwriters win:
        </p>
      </section>

      <div className="cards-container">
        {supportPoints.map((item, i) => (
          <div key={i} className="tagline-card" data-aos="fade-up">
            <div className="icon-container">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <MusicBeatVisualizer />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaglineSection;
