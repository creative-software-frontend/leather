import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import img0 from '../../assets/image/0.jfif';
import img1 from '../../assets/image/1.jfif';
import img2 from '../../assets/image/2.jfif';
import img3 from '../../assets/image/3.jfif';
import img4 from '../../assets/image/4.jfif';
import img5 from '../../assets/image/5.jfif';
import img6 from '../../assets/image/6.jfif';
import img7 from '../../assets/image/7.jfif';
import img8 from '../../assets/image/8.jfif';
import img9 from '../../assets/image/9.jfif';

const GALLERY = [
  { src: img8, title: 'Padma Grand — Aerial Night View', tag: 'Hotel' },
  { src: img9, title: 'Bay Sands — Sunset Elevation', tag: 'Hotel' },
  { src: img5, title: 'Padma Grand — Golden Hour Facade', tag: 'Hotel' },
  { src: img6, title: 'Bay Sands — Dusk Exterior', tag: 'Hotel' },
  { src: img4, title: 'Kuakata Hotel — Bird\'s Eye', tag: 'Hotel' },
  { src: img1, title: 'Infinity Pool Deck', tag: 'Amenity' },
  { src: img2, title: 'Luxury Suite Interior', tag: 'Suite' },
  { src: img3, title: 'Padma Bridge Hotel — Overview', tag: 'Hotel' },
  { src: img7, title: 'Street-Level Facade', tag: 'Hotel' },
  { src: img0, title: 'Penthouse Living Room', tag: 'Suite' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GallerySection: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((p) => p !== null ? (p - 1 + GALLERY.length) % GALLERY.length : 0);
  const next = () => setLightbox((p) => p !== null ? (p + 1) % GALLERY.length : 0);

  // Keyboard navigation for better UX
  useEffect(() => {
    if (lightbox === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <section id="gallery" className="pt-0 pb-12" style={{ background: 'linear-gradient(180deg,#ffffff 0%,#f0f4ff 100%)' }}>
      <div className="gs-container">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-label">Visual Showcase</span>
          <h2 className="section-title">Project Image Gallery</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4">
            Explore our stunning collection of architectural renders and real imagery from our premium hotel and Hotel developments.
          </p>
        </motion.div>

        {/* Masonry-style gallery grid */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {GALLERY.map((item, idx) => (
            <motion.div
              key={idx}
              id={`gallery-item-${idx}`}
              variants={fadeInUp}
              className="group relative break-inside-avoid mb-4 rounded-2xl overflow-hidden cursor-pointer
                         shadow-card hover:shadow-card-lg transition-all duration-400"
              onClick={() => setLightbox(idx)}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover origin-center"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400
                              flex flex-col items-start justify-end p-4"
                style={{ background: 'linear-gradient(0deg, rgba(13,13,26,0.85) 0%, rgba(26,35,126,0.40) 60%, transparent 100%)' }}>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold mb-2 tracking-wider uppercase"
                  style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                  {item.tag}
                </span>
                <p className="text-white text-sm font-semibold leading-tight">{item.title}</p>
                <span className="text-white/60 text-xs mt-1">Click to expand ↗</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Wrapper */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
            style={{ background: 'rgba(13,13,26,0.92)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative max-w-5xl w-full cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={GALLERY[lightbox].src}
                alt={GALLERY[lightbox].title}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-card-lg"
              />

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mr-3 tracking-wider uppercase"
                    style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                    {GALLERY[lightbox].tag}
                  </span>
                  <span className="text-white font-semibold">{GALLERY[lightbox].title}</span>
                </div>
                <span className="text-white/50 text-sm">{lightbox + 1} / {GALLERY.length}</span>
              </div>

              {/* Close Button */}
              <button
                onClick={close}
                id="gallery-lightbox-close"
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-black/60 text-white text-xl
                           flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
              >
                ×
              </button>

              {/* Prev Button */}
              <button
                onClick={prev}
                id="gallery-lightbox-prev"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                           bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white text-2xl
                           flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={next}
                id="gallery-lightbox-next"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full
                           bg-white/15 hover:bg-white/30 backdrop-blur-sm text-white text-2xl
                           flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;