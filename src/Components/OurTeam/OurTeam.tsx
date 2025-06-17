import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurTeam.css";
import sampleImage from "../../../src/assets/eguy.jpg";
import moteni from "../../../src/assets/moteniola.jpg";

const teamMembers = [
  {
    name: "Germaine Umanah",
    title: "Head of Legal, Nexus Music Publishing Ltd",
    image: sampleImage,
    bio: `Germaine Umanah is a passionate legal professional specializing in intellectual property and entertainment law. As Head of Legal at Nexus Music Publishing Ltd, he leads contract negotiation, rights management, and legal compliance across music publishing and sub-publishing activities. With a keen understanding of the music industry, Germaine ensures songwriters and composers are protected and empowered. His work spans publishing and sub-publishing agreements, sync licensing, and collective rights management, positioning Nexus as a trusted partner for rights holders.
    Fun fact: Germaine has a unique party trick; he can mimic wind instruments using the space between his index finger and thumb.`,
  },
  {
    name: "Moteniola Akingbade",
    title: "Operations Manager, Nexus Music Publishing Ltd",
    image: moteni,
    bio: `Moteniola Akingbade is the Operations Manager at Nexus Music Publishing Ltd, where she streamlines daily operations and ensures smooth management of music publishing, licensing, and sync processes. With a legal background and a master’s degree in Media and Communication, she advocates for composers' rights and fosters relationships with key stakeholders globally. Fun fact: she loves curating events.`,
  },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <section className="our-team" data-aos="fade-up">
      <h2 className="section-header-teams" data-aos="fade-up">
        Meet Our Team
      </h2>
      <p className="section-paragraph-teams" data-aos="fade-up">
        The passionate minds behind Nexus Music Publishing.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index} data-aos="fade-up">
            <div className="team-member-image" data-aos="fade-up">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info" data-aos="fade-up">
              <h3 style={{ fontWeight: 700 }}>{member.name}</h3>
              <p className="team-title">{member.title}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
