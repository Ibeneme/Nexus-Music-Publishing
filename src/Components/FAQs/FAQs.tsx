import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./FAQs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import AddIcon from "../Icons/AddIcon";

const faqs = [
  {
    question: "What is Nexus Music Publishing?",
    answer:
      "Nexus is the home of bold sounds, big dreams, and unstoppable songwriters and composers. We don’t just manage music—we amplify it, protect rights, and ensure your work earns what it truly deserves.",
  },
  {
    question: "What services does Nexus provide?",
    answer:
      "We offer sync & media licensing, administration & rights management, and advocacy & representation for songwriters and composers at all stages of their careers.",
  },
  {
    question: "What is sync licensing?",
    answer:
      "Sync licensing means placing your music in films, ads, series, and video games. Our team actively pitches your songs to producers, agencies, and creatives to secure high-impact placements.",
  },
  {
    question: "How does Nexus manage rights and royalties?",
    answer:
      "We handle all administrative work including accurate royalty tracking, rights registration, and global royalty collection. Our systems ensure your catalogue and metadata are precisely managed.",
  },
  {
    question: "How does Nexus represent its songwriters?",
    answer:
      "We advocate for you across the music industry, from legal representation and trade organizations to policy development. Our in-house legal team defends your rights and helps shape the future of music.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleToggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div className="faq-container">
        <br /> <br /> <br />
        <h1 className="faq-header" data-aos="fade-up">
          Frequently Asked Questions
        </h1>
        <p className="faq-subtext" data-aos="fade-up" data-aos-delay="100">
          Got questions about Nexus Music Publishing? We’ve answered the most
          common ones here.
        </p>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            // data-aos="fade-up"
            // data-aos-delay={`${(index + 1) * 100}`}
          >
            <div
              className="faq-question"
              onClick={() => handleToggleAnswer(index)}
              aria-expanded={activeIndex === index}
            >
              <h3 style={{ fontWeight: 700 }} className="faq-title">
                {faq.question}
              </h3>
              <span
                style={{
                  marginLeft: 12,
                  backgroundColor: "var(--primary-color)",
                  border: "1px solid var(--primary-color)",
                  borderRadius: "50%",
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddIcon width={16} height={16} color="#fff" />
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
