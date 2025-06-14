import React from "react";
import Hero from "../../Components/Hero/Hero";
import SlidingPage from "../../Components/SlidingPage/SlidingPage";
import TaglineSection from "../../Components/TaglineSection/TaglineSection";
import TestimonialsPage from "../../Components/Testimonials/Testimonial";
import Catalogue from "../../Components/Catalogue/Catalogue";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <TaglineSection />
      <SlidingPage />
      <TestimonialsPage />
      <Catalogue />
    </div>
  );
};

export default Home;
