import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/nx.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = (): void => setIsOpen(!isOpen);
  const closeNavbar = (): void => setIsOpen(false);

  // ✅ Don't render if the route starts with "/admin"
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <nav className="navbar" style={{ padding: 16, position: "fixed" }}>
      {isOpen && <div className="backdrop" onClick={closeNavbar}></div>}

      <div className="logo" onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="logo"
          style={{ width: 120, height: 36, cursor: "pointer" }}
        />
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={closeNavbar}>
          Home
        </NavLink>
        <NavLink to="/about-us" className="nav-link" onClick={closeNavbar}>
          About Us
        </NavLink>
        <NavLink to="/our-team" className="nav-link" onClick={closeNavbar}>
          Our Team
        </NavLink>
        <NavLink to="/services" className="nav-link" onClick={closeNavbar}>
          Our Services
        </NavLink>
        <NavLink to="/faqs" className="nav-link" onClick={closeNavbar}>
          FAQs
        </NavLink>
        <NavLink to="/whats-new" className="nav-link" onClick={closeNavbar}>
          What’s New
        </NavLink>
      </div>

      <div className="menu-icon" onClick={toggleNavbar}>
        {isOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;
