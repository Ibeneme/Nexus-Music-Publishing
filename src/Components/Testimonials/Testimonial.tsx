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
    name: "Graham",
    role: "Artist",
    feedback:
      "One thing I love about Nexus is how hands-on they are. This has allowed me to focus on my music while they handle the administration of my publishing.",
  },
  {
    name: "Tehga",
    role: "Composer & Writer",
    feedback:
      "My experience at Nexus Camp was definitely one for the books. I met many talented writers and composers, and working with them was amazing. It allowed me to be as creative as possible throughout the camp.",
  },
  {
    name: "Drizz SD",
    role: "Recording Artist",
    feedback:
      "Joining Nexus has been a smooth and rewarding experience. Their team is responsive, professional, and genuinely committed to helping artists grow and protect their work.",
  },

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
        <h2 style={{ fontWeight: 700 }}>
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
            <div key={i} className="testimonial-card" data-aos="fade-up">
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
