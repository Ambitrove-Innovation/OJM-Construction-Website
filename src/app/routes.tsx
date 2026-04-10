
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import AccessibilityWidget from '../components/AccessibilityWidget';
import Home from '../pages/home/Home';
import AboutPage from '../pages/about/AboutPage';
import ServicesPage from '../pages/services/ServicesPage';
import ProjectsPage from '../pages/project/ProjectsPage';
import ContactPage from '../pages/contact/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Routespath = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-brand-gold selection:text-white bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <AccessibilityWidget />
      </div>
    </Router>
  );
}
