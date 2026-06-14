import { motion, type Variants } from 'framer-motion';
import { Layers, Package, Scissors } from 'lucide-react';
import servicesImg from '../../assets/image/1.jfif';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const SERVICES_DATA = [
  { id: 1, icon: <Layers size={40} />, key: 'hotel' as const },
  { id: 2, icon: <Package size={40} />, key: 'apartment' as const },
  { id: 3, icon: <Scissors size={40} />, key: 'land' as const },
];

const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const s = UI.services;

  return (
    <section id="services" className="gs-section" style={{ background: '#1a1008' }}>
      <div className="gs-container">
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(s.label, lang)}</span>
          <h2 className="text-3xl font-bold mb-4 text-white">{pick(s.title, lang)}</h2>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          <p className="text-base max-w-2xl mx-auto text-gray-400 mt-4">{pick(s.subtitle, lang)}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES_DATA.map((service) => {
            const item = s.serviceItems[service.key];
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                variants={fadeInUp}
                className="group text-center p-8 cursor-pointer rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-all duration-300"
                style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 text-primary-rust-light"
                  style={{ background: 'rgba(176,90,40,0.15)', border: '2px solid rgba(176,90,40,0.3)' }}>
                  {service.icon}
                </div>
                <h3 className="mb-3 font-bold text-primary-rust-light">
                  {pick(item.title, lang)}
                </h3>
                <div className="w-10 h-0.5 mx-auto mb-4 rounded-full bg-primary-rust opacity-60" />
                <p className="text-gray-400 text-sm leading-relaxed">{pick(item.desc, lang)}</p>
                <div className="mt-5 flex justify-center">
                  <span className="text-xs font-semibold tracking-wider uppercase transition-all duration-300 group-hover:translate-x-1 text-primary-rust-light">
                    {pick(s.learnMore, lang)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 rounded-3xl overflow-hidden relative h-64 md:h-80 shadow-2xl"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            src={servicesImg} alt="Leather Export House premium leather"
            className="w-full h-full object-cover origin-center image-motion-matrix"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 backdrop-panel-overlay">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-white/80">{pick(s.visionLabel, lang)}</span>
            <h3 className="text-white text-2xl md:text-3xl font-black mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              {pick(s.visionTitle, lang)}
            </h3>
            <Link to="/products" id="services-view-projects-btn"
              className="badge-modern-primary text-sm px-6 py-2">
              {pick(s.viewProjects, lang)}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
