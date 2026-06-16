import React from 'react';
import PageTransition from '../components/PageTransition';
import GallerySection from '../components/sections/GallerySection';

const GalleryPage: React.FC = () => {
  return (
    <PageTransition id="gallery-page">
      <main className="min-h-screen pt-28 bg-[#120800]" style={{ background: 'linear-gradient(180deg, #1a0f06 0%, #120800 100%)' }}>
        <GallerySection />
      </main>
    </PageTransition>
  );
};

export default GalleryPage;
