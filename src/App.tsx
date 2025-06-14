import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Public Pages
import Home from "./Pages/Home/Home";
import FAQsPage from "./Pages/FaqPage/FAQsPage";
import AboutUsPage from "./Pages/AboutUs/AboutUsPage";
import OurTeamPage from "./Pages/OurTeam/OurTeamPage";
import OurServicesPage from "./Pages/OurServicesPage/OurServicesPage";
import WhatsNewPage from "./Pages/WhatsNewPage/WhatsNewPage";
import BlogDetail from "./Components/WhatsNew/BlogDetail";
import NotFound from "./Pages/NotFound";

// Admin Auth
import LoginPage from "./Admin/Auth/Login";
import ResetPasswordPage from "./Admin/Auth/PasswordReset/ResetPasswordPage";
import PasswordResetSuccessPage from "./Admin/Auth/PasswordReset/PasswordResetSuccessPage";

// Admin Pages
import LegalInsightsComponent from "./Admin/Pages/LegalInsights/LegalInsightsComponent";
import BlogDetailPageById from "./Components/Blog/BlogByID";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./PrivateRoute";

// import PrivateRoute from "./utils/PrivateRoute"; // if you implement authentication
// import Header from "./Admin/Layout/Header"; // optional: admin header

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/whats-new" element={<WhatsNewPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Admin Auth */}
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/password-reset-success"
            element={<PasswordResetSuccessPage />}
          />

          {/* Admin Routes */}
          <Route
            path="/admin-news"
            element={
              <PrivateRoute>
                <LegalInsightsComponent />
              </PrivateRoute>
            }
          />
          <Route path="/blog-details/:id" element={<BlogDetailPageById />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
