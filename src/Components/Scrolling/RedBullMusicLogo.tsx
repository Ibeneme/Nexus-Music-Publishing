import React from "react";

const RedBullMusicLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="white"
  >
    <title>Red Bull Music</title>
    <circle cx="256" cy="256" r="256" fill="black" />
    <path
      d="M150 256c0-55.2 50-100 106-100s106 44.8 106 100-50 100-106 100-106-44.8-106-100zm132-84v-44h-20v44l-30 12v16l30-12v92h20v-92l30 12v-16l-30-12z"
      fill="white"
    />
    <path
      d="M125 256c0-73 59-132 131-132s131 59 131 132-59 132-131 132-131-59-131-132zm240 0c0-60-49-108-109-108s-109 48-109 108 49 108 109 108 109-48 109-108z"
      fill="white"
    />
  </svg>
);

export default RedBullMusicLogo;
