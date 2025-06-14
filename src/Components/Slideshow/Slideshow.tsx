import React, { useEffect, useState } from "react";
import "./Slideshow.css";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { FaInstagram, FaTwitter, FaLink } from "react-icons/fa";
import sw1 from "../../assets/artists/Tehga.jpg";
import sw2 from "../../assets/artists/Graham.jpeg";
import sw3 from "../../assets/artists/Drizz.jpeg";
import sw4 from "../../assets/artists/Aramide.jpeg";

interface Artist {
  name: string;
  image: string;
  instagram?: string;
  twitter?: string;
  linktree?: string;
}

const artists: Artist[] = [
  {
    name: "Tegha",
    image: sw1,
    instagram: `https://www.instagram.com/i_amtehga?igsh=d3VvZjBqcDNidXJ0`,
  },
  {
    name: "Graham BMG",
    image: sw2,
    instagram: "https://www.instagram.com/graham.bmg?igsh=MTltZGNjZ2s3dThobA==",
  },
  {
    name: "Drizz SD",
    image: sw3,
    instagram: "https://www.instagram.com/drizz_sd?igsh=OGNtNGcwb2VpYjB1",
  },
  {
    name: "Aramide",
    image: sw4,
    instagram: `https://www.instagram.com/aramidemusic?igsh=OHBvZXMydzMwOXR1`,
  },
];

const Slideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % artists.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % artists.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + artists.length) % artists.length);

  const artist = artists[current];

  return (
    <div
      className="slideshow"
      style={{ backgroundImage: `url(${artist.image})` }}
    >
      <div className="overlay" />

      <div className="centered-content">
        <h1>Nexus Music Publishing</h1>
        <p>The bridge for African composers</p>
      </div>

      <div className="artist-info">
        <h2>{artist.name}</h2>
        <div className="social-links">
          {artist.instagram && (
            <a
              href={artist.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          )}
          {artist.twitter && (
            <a href={artist.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          )}
          {artist.linktree && (
            <a href={artist.linktree} target="_blank" rel="noopener noreferrer">
              <FaLink />
            </a>
          )}
        </div>
      </div>

      <IoArrowBackCircleSharp className="icon left" onClick={prev} />
      <IoArrowForwardCircleSharp className="icon right" onClick={next} />
    </div>
  );
};

export default Slideshow;
