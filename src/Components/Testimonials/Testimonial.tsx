import "./Testimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Tunde Adebayo",
    role: "Afrobeats Producer",
    feedback:
      "Nexus helped me secure placements with international brands. They're not just publishers, they're partners in growth.",
  },
  {
    name: "Ngozi Ibekwe",
    role: "Film Director",
    feedback:
      "As a filmmaker, I needed a reliable music partner. Nexus delivered every time — no copyright drama, just excellence.",
  },
  {
    name: "Chidi Okonkwo",
    role: "Songwriter",
    feedback:
      "They made sure my royalties were tracked globally. Nexus made me feel like my music mattered.",
  },
  {
    name: "Zainab Yusuf",
    role: "TV Producer",
    feedback:
      "Sync licensing was always a hassle until I found Nexus. They handled our entire soundtrack effortlessly.",
  },
  {
    name: "Emeka Eze",
    role: "Composer & Sound Engineer",
    feedback:
      "I finally found a team that understands metadata and copyright from a Nigerian perspective. Respect!",
  },
  {
    name: "Aisha Suleiman",
    role: "Legal Consultant",
    feedback:
      "Nexus' legal team is solid. They advocate for local creators and know the music industry's legal terrain in and out.",
  },
];

const TestimonialsPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 style={{fontWeight: 700, }}>
          Voices from the <span className="decorated-text">Creative Scene</span>
        </h2>
        <p>
          Hear from Nigerian producers, composers, and filmmakers who trust
          Nexus with their music rights and royalties.
        </p>
      </div>

      <div className="testimonials-scroll-container" ref={scrollRef}>
        <div className="testimonials-row">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="testimonial-card"
              data-aos="fade-up"
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"{item.feedback}"</p>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-arrows">
        <IoArrowBackCircleSharp
          className="scroll-arrow"
          onClick={() => scroll("left")}
        />
        <IoArrowForwardCircleSharp
          className="scroll-arrow"
          onClick={() => scroll("right")}
        />
      </div>
    </section>
  );
};

export default TestimonialsPage;