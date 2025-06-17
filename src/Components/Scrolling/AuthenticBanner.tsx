import React from "react";
import "./AuthenticBanner.css";

const AuthenticBanner: React.FC = () => {
  return (
    <section className="authentic-banner">
      <div className="authentic-overlay">
        <h1>Our Publishing Catalogue </h1>
        <h2>The bridge for African composers.</h2>
      </div>
    </section>
  );
};

export default AuthenticBanner;
