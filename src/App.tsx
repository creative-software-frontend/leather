import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import Navbar       from './components/Navbar';
import Footer       from './components/Footer';
import ScrollToTop  from './components/ScrollToTop';
import LandingPage  from './pages/LandingPage';
import CareerPage   from './pages/CareerPage';
import AboutPage    from './pages/AboutPage';
import NewsPage     from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage     from './pages/TeamPage';
import ContactPage  from './pages/ContactPage';
import DownloadBrochure from './pages/DownloadBrochure';
import SendMessagePage from './pages/SendMessagePage';
import WhyUsPage from './pages/WhyUsPage';
import CategoryPage from './pages/CategoryPage';
import ShoeSectionPage from './pages/ShoeSectionPage';
import GalleryPage from './pages/GalleryPage';

// Helper component to handle scrolling to hash elements
const ScrollToHashElement: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/download-brochure" element={<DownloadBrochure />} />
        <Route path="/downloads" element={<DownloadBrochure />} />
        <Route path="/send-message" element={<SendMessagePage />} />
        {/* Category routes */}
        <Route path="/category/wet-blue-splits" element={<CategoryPage />} />
        <Route path="/category/cow-crust-leather" element={<CategoryPage />} />
        <Route path="/category/goat-crust-leather" element={<CategoryPage />} />
        <Route path="/category/finish-leather" element={<CategoryPage />} />
        <Route path="/category/shoe-section" element={<ShoeSectionPage />} />
        <Route path="/quality" element={<WhyUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => (
  <LanguageProvider>
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
