import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { UI, pick } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { img4, img5, img6 } from '../data/landingData';
import PageHero from '../components/PageHero';
import PageTransition from '../components/PageTransition';

// Integrated Lucide Icons
import { CheckCircle, TrendingUp, Layers, Target, Shield, Heart, Lightbulb, Award } from 'lucide-react';

import designerImg from '../assets/image/cow-crust222.jpg';
import expertise2Img from '../assets/image/chrome-free-goat1.jpg';
import empowerImg from '../assets/image/about.jpg';

// Core structural hardware-accelerated motion variations
const floatingAnimation: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Value Icons Array Map matching the structure loop order
const VALUE_ICONS = [
  <Shield className="w-6 h-6 stroke-[1.5]" />,
  <Lightbulb className="w-6 h-6 stroke-[1.5]" />,
  <Heart className="w-6 h-6 stroke-[1.5]" />,
  <Award className="w-6 h-6 stroke-[1.5]" />
];

const WhyUsPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = UI.whyUs;

  return (
    <PageTransition id="why-us-page">
      <div className="bg-[#120800] pt-24 text-white antialiased select-none selection:bg-primary-rust selection:text-white">

        {/* SECTION 1: HERO BANNER */}
        <PageHero
          title={pick(t.heroTitle, lang)}
          subtitle={typeof t.heroSubtitle !== 'undefined' ? pick(t.heroSubtitle, lang) : "Discover why we are the best choice for your investment"}
          imageSrc={img4}
        />

        {/* SECTION 2: EMPOWER SOLUTIONS */}
        <section className="gs-section border-b border-white/5 py-8 md:py-12" style={{ background: '#1a0f06' }}>
          <div className="gs-container flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              className="flex-1 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-[1.15] mb-6 font-serif tracking-tight">
                {pick(t.empower.title, lang)}
              </h2>
              <div className="gold-divider w-20 h-[3px] bg-primary-rust mb-8 rounded-full" />
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal">
                {pick(t.empower.desc, lang)}
              </p>
            </motion.div>

            <div className="flex-1 flex justify-center w-full">
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                style={{ willChange: 'transform' }}
                className="w-full max-w-[540px] aspect-[4/3] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm"
              >
                <img
                  src={empowerImg}
                  alt="Empower solutions architecture graphic"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = img4; }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 & 4: AREA OF EXPERTISE */}
        <section className="gs-section relative overflow-hidden py-12 md:py-16" style={{ background: '#120800' }}>
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary-rust/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="gs-container text-center flex flex-col items-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl"
            >
              <span className="section-label inline-block text-xs font-bold tracking-[0.2em] text-primary-rust-light uppercase mb-4">
                {pick(t.expertise.label, lang)}
              </span>
              <h2 className="section-title text-3xl md:text-5xl font-bold font-serif text-white tracking-tight mb-6">
                {pick(t.expertise.title, lang)}
              </h2>
              <div className="w-16 h-1 rounded-full mx-auto bg-primary-rust mb-8" />
            </motion.div>

            <motion.div
              className="mt-8 relative w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] flex justify-center rounded-2xl overflow-hidden border border-white/10"
              variants={floatingAnimation}
              animate="animate"
              style={{ animationDelay: '0.5s', willChange: 'transform', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
            >
              <div className="absolute inset-0 bg-black/20 z-10 hover:bg-transparent transition-colors duration-500" />
              <img
                src={expertise2Img}
                alt="Modern analytical blueprints dynamic map infrastructure map"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = img5; }}
              />
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: TEAM PROFESSIONALS */}
        <section
          className="gs-section relative text-white overflow-hidden py-12 md:py-16"
          style={{ background: 'linear-gradient(135deg, #120800 0%, #803d16 100%)' }}
        >
          {/* Performance optimized absolute graphic context overlays */}
          <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none">
            <img
              src={expertise2Img}
              alt="Background pattern grid layout context"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/5 to-transparent skew-x-12 -ml-32 pointer-events-none" />

          <div className="gs-container flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="flex-1 flex justify-center w-full relative">
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                style={{ willChange: 'transform' }}
                className="relative z-10 w-full max-w-[480px]"
              >
                <img
                  src={designerImg}
                  alt="Corporate execution interface operations architecture illustration"
                  className="w-full h-auto object-contain drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)] rounded-xl border border-white/10"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = img6; }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-primary-rust/20 blur-[120px] rounded-full transform scale-75 z-0 pointer-events-none" />
            </div>

            <motion.div
              className="flex-1 lg:max-w-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-serif font-light leading-relaxed mb-10 text-white/90">
                {pick(t.team.desc, lang)}
              </motion.p>

              <motion.ul variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base">
                {t.team.list.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3.5 bg-black/20 backdrop-blur-md px-5 py-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary-rust/40 transition-all duration-300 group"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-primary-rust-light transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-white/90 font-medium tracking-wide">{pick(item, lang)}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6: PROJECT DETAILING */}
        <section className="gs-section text-center py-10 md:py-16 border-b border-white/5" style={{ background: '#120800' }}>
          <div className="gs-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-16"
            >
              <span className="section-label inline-block text-xs font-bold tracking-[0.2em] text-primary-rust-light uppercase mb-3">
                {typeof t.detailing.label !== 'undefined' ? pick(t.detailing.label, lang) : "Our Process"}
              </span>
              <h2 className="section-title text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
                {pick(t.detailing.title, lang)}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { text: t.detailing.box1, img: img4, icon: <TrendingUp className="w-5 h-5" /> },
                { text: t.detailing.box2, img: img5, icon: <Layers className="w-5 h-5" /> },
                { text: t.detailing.box3, img: img6, icon: <Target className="w-5 h-5" /> }
              ].map((box, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="gs-card group overflow-hidden relative min-h-[360px] flex flex-col justify-end rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10"
                >
                  <div className="absolute inset-0 img-overlay z-0">
                    <img
                      src={box.img}
                      alt="Process cycle deployment backdrop"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                  </div>

                  <div className="relative z-10 p-8 text-left">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-md text-white flex items-center justify-center rounded-xl mb-5 border border-white/20 transform group-hover:-translate-y-2.5 transition-all duration-300 group-hover:bg-primary-rust group-hover:border-transparent group-hover:text-white">
                      {box.icon}
                    </div>
                    <p className="text-white text-lg md:text-xl font-bold font-serif leading-snug tracking-wide">
                      {pick(box.text, lang)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: OUR VALUES */}
        <section className="gs-section py-10 md:py-16" style={{ background: 'linear-gradient(to bottom, #1a0f06, #120800)' }}>
          <div className="gs-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="section-label inline-block text-xs font-bold tracking-[0.2em] text-primary-rust-light uppercase mb-3">
                {typeof t.values.label !== 'undefined' ? pick(t.values.label, lang) : "Core Principles"}
              </span>
              <h2 className="section-title text-3xl md:text-5xl font-bold font-serif text-white tracking-tight">
                {pick(t.values.title, lang)}
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {t.values.items.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="gs-card p-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 hover:border-primary-rust transition-all duration-300 group hover:-translate-y-1.5 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center text-primary-rust mb-6 transition-all duration-300 group-hover:bg-primary-rust group-hover:text-white">
                    {VALUE_ICONS[idx % VALUE_ICONS.length]}
                  </div>
                  <h4 className={`text-xl font-bold font-serif tracking-tight mb-3 transition-colors duration-300 ${('isHighlighted' in value && value.isHighlighted)
                    ? 'text-primary-rust-light'
                    : 'text-white group-hover:text-primary-rust-light'
                    }`}>
                    {pick(value.title, lang)}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-normal">
                    {pick(value.desc, lang)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default WhyUsPage;