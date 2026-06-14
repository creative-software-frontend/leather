import { motion, type Variants } from 'framer-motion';
import logoImg from '../../assets/image/logo.png';
import img2 from '../../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { Counter } from '../ui/Counter';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AboutSection: React.FC = () => {
  const { lang } = useLanguage();
  const a = UI.about;

  return (
    <section id="about" className="overflow-hidden" style={{ background: 'linear-gradient(180deg,#f0f4ff 0%,#ffffff 100%)' }}>

      {/* ── 1. WHO WE ARE ── */}
      {/* Fixed: Changed pb-0 to responsive bottom padding to handle the absolute floating layout element gracefully */}
      <div className="gs-section pb-20 md:pb-16 lg:pb-20">
        <div className="gs-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
              <span className="section-label">{pick(a.label, lang)}</span>
              <h2 className="section-title mb-4">{pick(a.title, lang)}</h2>
              <div className="gold-divider" />
              <p className="text-gray-500 mt-5 mb-5 leading-relaxed">{pick(a.p1, lang)}</p>
              <p className="text-gray-500 mb-8 leading-relaxed">{pick(a.p2, lang)}</p>

              <ul className="space-y-3 mb-8">
                {a.bullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                      style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }}>✓</span>
                    {pick(item, lang)}
                  </li>
                ))}
              </ul>

              <a href="/projects" id="about-see-projects-btn" className="btn-primary">
                {pick(a.seeProjects, lang)}
              </a>
            </motion.div>

            {/* Right — image */}
            <motion.div className="relative mt-8 lg:mt-0" variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
              <div className="rounded-3xl overflow-hidden img-overlay shadow-card-lg h-80 md:h-[480px]">
                <motion.img
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={img2} alt="Shifa Properties Ltd luxury Hotel pool and facade"
                  className="w-full h-full object-cover origin-center"
                />
              </div>

              {/* Floating logo card */}
              <div className="absolute -bottom-10 md:-bottom-6 -left-2 md:-left-4 glass-card p-4 shadow-card animate-float z-10"
                style={{ background: 'white', borderRadius: '20px', boxShadow: '0 8px 40px rgba(26,35,126,0.15)' }}>
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="Shifa Properties Ltd Group Logo"
                    className="w-16 h-16 rounded-full object-contain bg-white border-2 border-gold-300 shadow-gold"
                    style={{ padding: '3.5px' }} />
                  <div>
                    <p className="font-black text-sm leading-none"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#1a237e' }}>Shifa Properties Ltd</p>
                    <p className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>GROUP</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex gap-4">
                  <div className="text-center">
                    <div className="font-black text-lg" style={{ color: '#1a237e' }}><Counter value="10+" /></div>
                    <p className="text-gray-400 text-xs">{pick(a.years, lang)}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-gold-500 text-lg"><Counter value="5000+" /></div>
                    <p className="text-gray-400 text-xs">{pick(a.investors, lang)}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg" style={{ color: '#0288D1' }}><Counter value="15+" /></div>
                    <p className="text-gray-400 text-xs">{pick(a.projects, lang)}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle,#C9A84C,transparent)' }} />
            </motion.div>

          </div>
        </div>
      </div>
      {/* ── 2. SISTER CONCERN ── */}
      <div className="gs-section py-20" style={{ background: 'linear-gradient(135deg,#e8f4fd 0%,#dbeeff 100%)' }}>
        <div className="gs-container">
          <motion.div className="text-center mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <span className="section-label">{pick(a.familyLabel, lang)}</span>
            <h2 className="section-title">{pick(a.familyTitle, lang)}</h2>
            <div className="gold-divider mx-auto mt-4" />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          >
            {a.sisterConcerns.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="gs-card p-6 text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                  style={{ background: 'linear-gradient(135deg,#1a237e,#0288D1)' }}>{i + 1}</div>
                <h3 className="font-black text-sm mb-2 leading-snug" style={{ color: '#1a237e' }}>{pick(item.name, lang)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pick(item.sub, lang)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
