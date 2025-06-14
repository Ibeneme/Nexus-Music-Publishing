import  { useEffect } from "react";
import Slideshow from "../Slideshow/Slideshow";
import AOS from "aos";
import "aos/dist/aos.css";



const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div style={{ marginTop: 12 }}>
      <Slideshow />
    </div>
  );
};

export default Hero;
