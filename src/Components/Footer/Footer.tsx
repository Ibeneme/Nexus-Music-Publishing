import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

import "./Footer.css";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CenteredTextSection from "../CenteredTextSection/CenteredTextSection";

const Footer: React.FC = () => {
  const location = useLocation();
  const isBlogDetail = matchPath("/blog-details/:id", location.pathname);
  const isAdminRoute = location.pathname.startsWith("/admin"); // ✅ new

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <>
      {!isBlogDetail && !isAdminRoute && <CenteredTextSection />}

      <footer className="footer" data-aos="fade-up">
        <div className="footer-container">
          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ marginRight: 48 }}
          >
            <h3>Nexus Music Publishing</h3>
            <ul style={{ marginTop: 8, lineHeight: 2, color: "#ffffff90" }}>
              <li>
                The bridge for African composer: Nexus Music Publishing empowers
                songwriters and composers by amplifying their music, protecting
                their rights, and ensuring they earn what they deserve. With
                personalized, hands-on support—from creative collaboration to
                publishing and admin they help artists grow and build lasting
                legacies. At Nexus, your sound is your power, and their mission
                is to make the world listen.
              </li>
            </ul>
          </div>

          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/our-team">Our Team</a>
              </li>
              <li>
                <a href="/library">Production Music Library</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div
            className="footer-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Contact Us</h3>
            <div className="social-icons">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/nexusmusicpublishing?igsh=MTY3N3VsMHEwOGIwZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                //href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                //href="https://linkedin.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                //href="https://wa.me/yourwhatsapplink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="social-icon" />
              </a>
              <a
                //href="https://t.me/yourtelegramlink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="social-icon" />
              </a>
            </div>
            <div className="footer-email">
              <a
                style={{ color: "#fff" }}
                href="mailto:contact@nexusmusicpublishing.com"
              >
                contact@nexusmusicpublishing.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>For Nexus Music Publishing</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
