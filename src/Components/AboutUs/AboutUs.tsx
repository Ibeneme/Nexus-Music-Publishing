import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import childonglasses from "../../assets/songw3.jpg";
import WhatWeDoSection from "./WhatWeDoSection";

interface AboutUsProps {
  showCta?: boolean;
}

const AboutUs: React.FC<AboutUsProps> = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true }); // Ensures animation runs once
  }, []);

  return (
    <section className="about-page">
      <br /> <br />
      {/* WHO WE ARE */}
      <div
        className=""
        style={{ maxWidth: 900 , }}
        data-aos="fade-up"
      >
       <h2 style={{fontWeight: 700, }}>
          Who <span className="decorated-text-b">we are?</span>
        </h2>
        <p style={{ maxWidth: 900, fontSize: 14 }} data-aos="fade-up">
          Welcome to Nexus Music Publishing the home of bold sounds, big dreams,
          and unstoppable songwriters and composers. We are here to build
          bridges for breakthrough. At Nexus, we don’t just manage music; we
          amplify your music, protect your rights, and make sure your work earns
          what it truly deserves. Whether you’re just starting out or sharpening
          your legacy, we offer hands-on support tailored to your journey as a
          songwriter. From creative collaboration to publishing and handling
          your administrative work, we are in your corner, constantly
          representing and advocating for you. This isn’t a one-size-fits-all
          deal. It’s personal. It’s strategic. It’s built around you. Your sound
          is your power. Our job? To ensure the world hears it and pays
          attention as we build something legendary, one catalogue at a time.
        </p>
      </div>
      <div className="about-image" data-aos="fade-up">
        <img src={childonglasses} alt="Who We Are" />
      </div>
      <br /> <br />
      <div data-aos="fade-up">
        <WhatWeDoSection />
      </div>
    </section>
  );
};

export default AboutUs;
