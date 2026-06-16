import { motion, type Variants } from 'framer-motion';
import logoImg from '../../assets/image/logo-leh1-01.png';
import img2 from '../../assets/image/about.jpg';
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
    <section id="about" className="overflow-hidden" style={{ background: 'linear-gradient(180deg, #1a0f06 0%, #0e0804 100%)' }}>

      {/* ── 1. WHO WE ARE ── */}
      <div className="gs-section pb-20 md:pb-16 lg:pb-20">
        <div className="gs-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(a.label, lang)}</span>
              <h2 className="text-3xl font-bold mb-4 text-white">{pick(a.title, lang)}</h2>
              <div className="w-16 h-1 rounded-full my-4 bg-primary-rust" />
              <p className="text-gray-400 mt-5 mb-5 leading-relaxed">{pick(a.p1, lang)}</p>
              <p className="text-gray-400 mb-8 leading-relaxed">{pick(a.p2, lang)}</p>

              <ul className="space-y-3 mb-8">
                {a.bullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs text-white"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary-rust), var(--color-primary-rust-light))' }}>✓</span>
                    {pick(item, lang)}
                  </li>
                ))}
              </ul>

              <a href="/category/wet-blue-splits" id="about-see-projects-btn"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-rust), var(--color-primary-rust-light))', color: '#fff', boxShadow: '0 4px 20px var(--color-primary-rust-glow)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:brightness-110">
                {pick(a.seeProjects, lang)}
              </a>
            </motion.div>

            {/* Right — image */}
            <motion.div className="relative mt-8 lg:mt-0" variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
              <div className="rounded-3xl overflow-hidden h-80 md:h-[480px]" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <motion.img
                  whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
                  src={img2} alt="Leather Export House premium leather craftsmanship"
                  className="w-full h-full object-cover origin-center image-motion-matrix"
                />
              </div>

              {/* Floating logo card */}
              <div className="absolute -bottom-10 md:-bottom-6 -left-2 md:-left-4 p-4 z-10 rounded-2xl"
                style={{ background: '#1a0f06', border: '1px solid rgba(176,90,40,0.3)', boxShadow: '0 8px 40px rgba(176,90,40,0.15)' }}>
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="Leather Export House Logo"
                    className="w-16 h-16 rounded-full object-contain bg-white border-2"
                    style={{ padding: '3.5px', borderColor: 'var(--color-primary-rust)' }} />
                  <div>
                    <p className="font-black text-sm leading-none text-white"
                      style={{ fontFamily: 'Playfair Display, serif' }}>Leather Export House</p>
                    <p className="text-xs tracking-widest uppercase font-medium text-primary-rust-light">Bangladesh</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t flex gap-4" style={{ borderColor: 'rgba(176,90,40,0.2)' }}>
                  <div className="text-center">
                    <div className="font-black text-lg text-white"><Counter value="10+" /></div>
                    <p className="text-gray-500 text-xs">{pick(a.years, lang)}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg text-primary-rust-light"><Counter value="5000+" /></div>
                    <p className="text-gray-500 text-xs">{pick(a.investors, lang)}</p>
                  </div>
                  <div className="text-center">
                    <div className="font-black text-lg text-white"><Counter value="15+" /></div>
                    <p className="text-gray-500 text-xs">{pick(a.projects, lang)}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, var(--color-primary-rust), transparent)' }} />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── 2. SISTER CONCERN ── */}
      <div className="gs-section py-20" style={{ background: 'rgba(176,90,40,0.06)' }}>
        <div className="gs-container">
          <motion.div className="text-center mb-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(a.familyLabel, lang)}</span>
            <h2 className="text-3xl font-bold mb-4 text-white">{pick(a.familyTitle, lang)}</h2>
            <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          >
            {a.sisterConcerns.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}
                className="p-6 text-center hover:-translate-y-2 transition-all duration-300 group rounded-2xl border border-white/10 bg-white/5"
                style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-black text-lg"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust))' }}>{i + 1}</div>
                <h3 className="font-black text-sm mb-2 leading-snug text-primary-rust-light">{pick(item.name, lang)}</h3>
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
