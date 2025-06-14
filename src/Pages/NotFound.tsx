import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="section-header">404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <button onClick={() => navigate("/")} className="home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
