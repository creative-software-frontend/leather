import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProductsPreviewSection from '../components/sections/ProductsPreviewSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import PageTransition from '../components/PageTransition';

const LandingPage: React.FC = () => (
  <PageTransition id="landing-page">
    <main className="bg-[#FAF9F6] text-[#2C2520]">
      {/* 1. Immersive Hero/Slider Showcase */}
      <HeroSection />
      
      {/* 2. Legacy Corporate Narrative & Processing Facility Frame */}
      <AboutSection />
      
      {/* 3. Core Grid Categories (Wet Blue Splits, Cow Crust, Goat Crust, Finished) */}
      <ProductsPreviewSection />
      
      {/* 4. Fine-Grain Detail and Product Sub-Specifications Grid */}
      <GallerySection />
      
      {/* 5. Direct Price Request & Global Contact Terminal */}
      <ContactSection />
    </main>
  </PageTransition>
);

export default LandingPage;
