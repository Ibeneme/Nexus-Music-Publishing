import Hero from "../../Components/Hero/Hero";
import SlidingPage from "../../Components/SlidingPage/SlidingPage";
import TaglineSection from "../../Components/TaglineSection/TaglineSection";
import TestimonialsPage from "../../Components/Testimonials/Testimonial";
import Catalogue from "../../Components/Catalogue/Catalogue";
import ScrollingCards from "../../Components/Scrolling/ScrollingCards";
import TrustedByPage from "../../Components/Scrolling/TrustedByPage";
import CatalogueText from "../../Components/Catalogue/CatalogueText";
import AuthenticBanner from "../../Components/Scrolling/AuthenticBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <TaglineSection />
      <ScrollingCards />
      <SlidingPage />
      <TrustedByPage />
      <AuthenticBanner />
      <SlidingPage />
      <TestimonialsPage />
      <CatalogueText />
      <Catalogue />
    </div>
  );
};

export default Home;
