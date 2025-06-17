import React from "react";

const PremierMusicLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="white"
  >
    <title>Premier Music</title>
    <rect width="1092" height="512" fill="transparent" />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="'Bebas Neue', sans-serif"
      fontWeight="bold"
      fontSize="150"
      letterSpacing="0.1em"
      fill="white"
    >
      PREMIER MUSIC
    </text>
  </svg>
);

export default PremierMusicLogo;
