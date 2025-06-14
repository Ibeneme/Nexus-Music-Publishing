import { FaFilm, FaServer, FaBalanceScale } from "react-icons/fa";
import "./WhatWeDoSection.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const whatWeDoPoints = [
  {
    icon: <FaFilm size={24} />,
    title: "Sync & Media Licensing",
    description:
      "Want your song in a film, series, ad, or video game? Our sync team pitches your music to music supervisors, executive producers, game developers, agencies, and content creators.",
  },
  {
    icon: <FaServer size={24} />,
    title: "Administration & Rights Management",
    description:
      "We handle the backend so you can stay front and center — from accurate royalty tracking to global royalty collection and complete metadata management.",
  },
  {
    icon: <FaBalanceScale size={24} />,
    title: "Advocacy & Representation",
    description:
      "We actively represent our songwriters in legislation, trade bodies, and industry forums. Our in-house legal team protects and advocates for your rights.",
  },
];

const WhatWeDoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="what-we-do-section" data-aos="fade-up">
      <h2
        className="section-title"
        style={{ textAlign: "left", fontWeight: 700 }}
      >
        What Do We Do?
      </h2>
      <div className="cards-container-a" style={{ margin: -16 }}>
        {whatWeDoPoints.map((item, index) => (
          <div key={index} className="tagline-card" data-aos="fade-up">
            <div className="icon-container">{item.icon}</div>
            <h3 style={{ fontWeight: 700 }}>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
