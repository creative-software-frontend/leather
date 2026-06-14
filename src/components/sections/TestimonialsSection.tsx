'use client';
import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { TESTIMONIALS } from '../../data/landingData';
import testimonialsBg from '../../assets/image/3.jfif';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const { lang } = useLanguage();
  const tm = UI.testimonials;

  return (
    <section id="testimonials" className="gs-section" style={{ background: 'linear-gradient(180deg, #120800 0%, #1a0f06 100%)' }}>
      <div className="gs-container">
        <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(tm.label, lang)}</span>
          <h2 className="text-3xl font-bold mb-4 text-white">{pick(tm.title, lang)}</h2>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              onClick={() => setActive(idx)}
              variants={fadeInUp}
              className={`p-6 cursor-pointer transition-all duration-300 rounded-2xl border bg-white/5 hover:-translate-y-1
                ${active === idx ? 'border-primary-rust scale-[1.02] shadow-lg' : 'border-white/10'}`}
              style={active === idx ? { boxShadow: '0 0 30px var(--color-primary-rust-glow)' } : {}}
            >
              {t.badge && (
                <span className="badge-modern-primary inline-block mb-4">
                  ✦ {t.badge}
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-rust" />
                <div>
                  <h4 className="font-bold text-sm text-primary-rust-light">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={`${t.id}-star-${i}`} className="text-primary-rust-light text-base">★</span>
                ))}
              </div>
              <blockquote className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Subscribe Strip */}
        <motion.div
          className="relative rounded-3xl overflow-hidden h-56 md:h-72 shadow-2xl"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            src={testimonialsBg} alt="Leather Export House production" className="w-full h-full object-cover image-motion-matrix" />
          <div className="absolute inset-0" style={{ background: 'rgba(176,90,40,0.15)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-panel-overlay">
            <div>
              <p className="text-white font-bold text-lg font-serif">{pick(tm.subscribe, lang)}</p>
              <p className="text-white/70 text-xs">{pick(tm.subscribeSubtitle, lang)}</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input type="email" placeholder={pick(tm.placeholder, lang)}
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:border-primary-rust transition-colors" />
              <button
                className="badge-modern-primary text-sm px-5 py-2.5 whitespace-nowrap rounded-full">
                {pick(tm.subscribeBtnLabel, lang)}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
