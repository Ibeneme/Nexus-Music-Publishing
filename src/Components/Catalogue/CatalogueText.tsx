import "./Catalogue.css";
import { Typewriter } from "react-simple-typewriter";

const CatalogueText = () => {
  return (
    <section className="catalogueText-section">
      <div className="catalogue-header">
        <h2 style={{ fontWeight: 700 }}>
          Explore Our <span className="decorated-text-b"> Song list</span>
        </h2>
        <p>
          <Typewriter
            words={[
              "Explore our collection of synced tracks, bold songs, and standout Nigerian composers.",
              "From Afrobeat anthems to cinematic scores...",
              "Discover the sounds shaping Africa’s creative future.",
              "All available on top streaming platforms.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={45}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </p>
      </div>
    </section>
  );
};

export default CatalogueText;
