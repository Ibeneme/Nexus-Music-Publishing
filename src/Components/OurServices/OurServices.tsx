import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFilm,
  FaFileContract,
  FaGavel,
  FaGlobe,
  FaUsers,
  FaTags,
  FaShieldAlt,
  FaBalanceScale,
  FaChartLine,
  FaHandshake,
  FaHeadset,
  FaMusic,
} from "react-icons/fa";
import "./OurServices.css";

const services = [
  {
    title: "Sync & Media Licensing",
    description:
      "Want your song in a film, series, ad, or video game? Our sync team connects your music with the world. We’re constantly pitching to music supervisors, executive producers, game developers, agencies, and content creators to secure meaningful placements.",
    icon: <FaFilm />,
  },
  {
    title: "Administration & Rights Management",
    description:
      "We handle the backend so you can stay front and center. From accurate royalty tracking and complete rights registration to global royalty collection, we ensure your music is fully accounted for.",
    icon: <FaFileContract />,
  },
  {
    title: "Advocacy & Representation",
    description:
      "We represent our songwriters across the industry. From legislation and industry events to trade organizations, our legal team ensures your voice is heard and your rights are safeguarded.",
    icon: <FaGavel />,
  },
  {
    title: "Global Royalty Collection",
    description:
      "Through international partners and societies, we collect your royalties globally, ensuring no performance or mechanical right goes unclaimed.",
    icon: <FaGlobe />,
  },
  {
    title: "Creative Collaboration",
    description:
      "We actively facilitate songwriting camps, co-writing sessions, and creative pairings to help you grow your catalog and collaborate with other top talent.",
    icon: <FaUsers />,
  },
  {
    title: "Metadata & Catalogue Management",
    description:
      "Accurate metadata is crucial in today’s industry. We tag, track, and update your catalog to ensure every song is discoverable and properly credited.",
    icon: <FaTags />,
  },
  {
    title: "Copyright Protection",
    description:
      "We ensure your works are registered with the appropriate societies and provide legal protection in the case of disputes or unauthorized usage.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Music Policy Influence",
    description:
      "Our team participates in music legislation, public hearings, and lobbying efforts to shape the future of creator rights and streaming fairness.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Tailored Career Strategy",
    description:
      "Whether you're an emerging songwriter or an established composer, we build personalized development plans to expand your impact and income.",
    icon: <FaChartLine />,
  },
  {
    title: "Licensing Negotiation",
    description:
      "We negotiate favorable sync, master, and mechanical licenses on your behalf—ensuring fair rates and long-term value for your work.",
    icon: <FaHandshake />,
  },
  {
    title: "Client Support & Reporting",
    description:
      "Our artist relations team provides ongoing support with transparent and regular financial and usage reports tailored to your needs.",
    icon: <FaHeadset />,
  },
  {
    title: "Music Supervision Support",
    description:
      "We help music supervisors discover and license the right tracks from our catalog, matching sound to story in film, TV, and games.",
    icon: <FaMusic />,
  },
];

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="our-services-page" data-aos="fade-up">
      <div className="intro" data-aos="fade-up" >
      <h1 style={{fontWeight: 700, }}>Our Services</h1>
        <p>
          At <strong>Nexus Music Publishing</strong>, we do more than manage
          your music—we champion it. Whether you're just starting or building a
          legacy, we tailor our services to amplify your voice, protect your
          rights, and get your work the attention it deserves.
        </p>
        <p>It’s personal. It’s strategic. It’s built around you.</p>
      </div>
      <br />
      <br />
      <div className="catalogue-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon-container">{service.icon}</div>
            <h3 style={{fontWeight: 700, }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
