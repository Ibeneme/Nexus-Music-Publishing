import React from "react";
import { SiPrimevideo } from "react-icons/si";
import "./TrustedByPage.css";

import FilmOneLogo from "./FilmOneLogo";
import PremierMusicLogo from "./PremierMusicLogo";
import red from "../../assets/movies/red.png";

const partners = [
  {
    name: "Prime Video",
    logo: <SiPrimevideo size={150} color="white" />,
  },
  {
    name: "FilmOne Entertainment",
    logo: <FilmOneLogo width={150} height={80} />,
  },

  {
    name: "Red Bull Music",
    logo: red, // Image path instead of JSX
  },
  {
    name: "Premier Music",
    logo: <PremierMusicLogo width={180} height={48} />,
  },
  {
    name: "+ more",
    logo: <span className="more-text">+ more</span>,
  },
];

const TrustedByPage: React.FC = () => {
  return (
    <div className="trusted-page">
      <h2 className="trusted-heading">Trusted By</h2>
      <div className="trusted-grid">
        {partners.map((partner, index) => (
          <div className="trusted-item" key={index}>
            {typeof partner.logo === "string" ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="trusted-img"
                style={{
                  width: 320,
                }}
              />
            ) : (
              partner.logo
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedByPage;
