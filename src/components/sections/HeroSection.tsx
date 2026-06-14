import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../../data/landingData';
import type { HeroSlide } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const HeroSection: React.FC = () => {
  const [current,   setCurrent]   = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { lang } = useLanguage();

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % HERO_SLIDES.length);
  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const slide: HeroSlide = HERO_SLIDES[current];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{ zIndex: 1 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10"
           style={{ background: 'linear-gradient(135deg, rgba(26,35,126,0.78) 0%, rgba(13,13,26,0.55) 60%, rgba(201,168,76,0.20) 100%)' }} />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Badge */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="gs-badge mb-6 text-sm"
            >
              ✦ {slide.badge}
            </motion.span>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white font-black mb-4 max-w-4xl mx-auto"
              style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            >
              {slide.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8"
            >
              {slide.subtitle}
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href={slide.ctaLink}
                 onClick={(e) => {
                   if (slide.ctaLink.startsWith('#')) {
                     e.preventDefault();
                     document.querySelector(slide.ctaLink)?.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
                 id={`hero-cta-${slide.id}`}
                 className="btn-gold font-bold text-base px-8 py-4">
                {slide.cta}
              </a>
              <a href="#about"
                 onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
                 className="btn-outline text-white border-white/60 hover:bg-white/20 hover:text-white font-semibold">
                Who We Are
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            id={`hero-dot-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? 'w-8 h-2.5 bg-gold-400'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button onClick={prev} id="hero-prev"
              aria-label="Previous slide"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm
                         flex items-center justify-center text-white text-xl
                         transition-all duration-300 hover:scale-110">
        ‹
      </button>
      <button onClick={next} id="hero-next"
              aria-label="Next slide"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm
                         flex items-center justify-center text-white text-xl
                         transition-all duration-300 hover:scale-110">
        ›
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 mb-2">{pick(UI.hero.scrollDown, lang)}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
