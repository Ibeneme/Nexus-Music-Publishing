import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./MovieCarousel.css";
import Gang from '../../assets/movies/gang.jpeg'
import Book from '../../assets/movies/Book.jpeg'
import Christmas from '../../assets/movies/Christmas.webp'
import brotherhood from '../../assets/movies/brotherhood.jpeg'
import after from '../../assets/movies/after.jpeg'


const movies = [
  { title: "Gangs of Lagos", img: Gang },
  { title: "Black Book", img: Book },
  { title: "After 30", img:after },
  { title: "Brotherhood", img: brotherhood },
  { title: "Christmas in Lagos", img: Christmas},
];

const MovieCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="movie-carousel-section">
      <h2 className="carousel-heading">🎬 Movie Carousel</h2>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>
        <div className="carousel" ref={scrollRef}>
          {movies.map((movie, index) => (
            <div key={index} className="carousel-item">
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieCarousel;