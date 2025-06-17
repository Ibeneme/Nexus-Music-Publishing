import React from "react";
import "./ScrollingCards.css";
import Gang from "../../assets/movies/gang.jpeg";
import Book from "../../assets/movies/book.jpeg";
import After from "../../assets/movies/after.jpeg";
import Brotherhood from "../../assets/movies/brotherhood.jpeg";

// Only Christmas has WebP
import ChristmasWebp from "../../assets/movies/Christmas.webp";

const cardsData = [
  {
    title: "Gangs of Lagos",
    image: Gang,
    isWebp: false,
  },
  {
    title: "Black Book",
    image: Book,
    isWebp: false,
  },
  {
    title: "After 30",
    image: After,
    isWebp: false,
  },
  {
    title: "Brotherhood",
    image: Brotherhood,
    isWebp: false,
  },
  {
    title: "Christmas in Lagos",
    image: ChristmasWebp,
    isWebp: true,
  },
];

const ScrollingCards: React.FC = () => {
  return (
    <div className="scrolling-container">
      <div className="scrolling-track">
        {[...cardsData, ...cardsData].map((card, index) => (
          <div
            className="scroll-card"
            key={index}
            style={{
              backgroundImage: `url(${card.image})`,
            //  marginTop: index % 2 === 0 ? "-64px" : "0",
            }}
          >
            <div className="card-overlay">
              <h3>{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCards;
