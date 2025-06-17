// FilmOneLogo.tsx
import React from "react";

const FilmOneLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 160 60"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    {...props}
  >
    <text
      x="0"
      y="40"
      fontFamily="'Arial Black', sans-serif"
      fontSize='32'
      fontWeight="bold"
    >
      film
    </text>
    <text x="70" y="40" fontFamily="'Arial', sans-serif" fontSize="32">
      One
    </text>
    <text x="0" y="58" fontFamily="'Arial', sans-serif" fontSize="12">
      entertainment
    </text>
  </svg>
);

export default FilmOneLogo;
