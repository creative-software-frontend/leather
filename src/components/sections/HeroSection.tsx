import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_SLIDES } from '../../data/landingData';
import type { HeroSlide } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const HeroSection: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
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
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
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
            alt={typeof slide.title === 'string' ? slide.title : pick(slide.title, lang)}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient — rust brown brand tones */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(135deg, rgba(169,74,26,0.82) 0%, rgba(18,18,18,0.60) 60%, rgba(176,90,40,0.25) 100%)' }}
      />

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
              className="badge-modern-primary mb-6 text-sm"
            >
              ✦ {typeof slide.badge === 'string' ? slide.badge : pick(slide.badge, lang)}
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-white font-black mb-4 max-w-4xl mx-auto ${lang === 'BN' ? 'leading-tight' : ''}`}
              style={{ fontFamily: lang === 'BN' ? 'Hind Siliguri, sans-serif' : 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            >
              {typeof slide.title === 'string' ? slide.title : pick(slide.title, lang)}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8"
            >
              {typeof slide.subtitle === 'string' ? slide.subtitle : pick(slide.subtitle, lang)}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={slide.ctaLink}
                onClick={(e) => {
                  if (slide.ctaLink.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(slide.ctaLink)?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                id={`hero-cta-${slide.id}`}
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary-rust) 0%, var(--color-primary-rust-light) 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 20px var(--color-primary-rust-glow)'
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base tracking-wide transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              >
                {typeof slide.cta === 'string' ? slide.cta : pick(slide.cta, lang)}
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide border-2 border-white/60 text-white hover:bg-white/20 transition-all duration-300"
              >
                {pick(UI.hero.whoWeAre, lang)}
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
            style={i === current ? { background: 'var(--color-primary-rust-light)', width: '2rem', height: '0.625rem' } : {}}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? 'w-8 h-2.5'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        id="hero-prev"
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
      >
        ‹
      </button>
      <button
        onClick={next}
        id="hero-next"
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
      >
        ›
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 mb-2">
          {pick(UI.hero.scrollDown, lang)}
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;