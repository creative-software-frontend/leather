import { motion, type Variants } from 'framer-motion';
import { Hotel, Building2, Map } from 'lucide-react';
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
  { id: 1, icon: <Hotel size={40} />, color: '#1a237e', key: 'hotel' as const },
  { id: 2, icon: <Building2 size={40} />, color: '#C9A84C', key: 'apartment' as const },
  { id: 3, icon: <Map size={40} />, color: '#0288D1', key: 'land' as const },
];

const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const s = UI.services;

  return (
    <section id="services" className="gs-section bg-white">
      <div className="gs-container">
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-label">{pick(s.label, lang)}</span>
          <h2 className="section-title">{pick(s.title, lang)}</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4">{pick(s.subtitle, lang)}</p>
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
                className="gs-card group text-center p-8 cursor-pointer"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl
                                transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ background: `linear-gradient(135deg, ${service.color}15, ${service.color}30)`, border: `2px solid ${service.color}25` }}>
                  {service.icon}
                </div>
                <h3 className="mb-3 font-bold" style={{ color: service.color }}>
                  {pick(item.title, lang)}
                </h3>
                <div className="w-10 h-0.5 mx-auto mb-4 rounded-full" style={{ background: service.color, opacity: 0.4 }} />
                <p className="text-gray-500 text-sm leading-relaxed">{pick(item.desc, lang)}</p>
                <div className="mt-5 flex justify-center">
                  <span className="text-xs font-semibold tracking-wider uppercase transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: service.color }}>
                    {pick(s.learnMore, lang)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 rounded-3xl overflow-hidden relative h-64 md:h-80 img-overlay shadow-card-lg"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            src={servicesImg} alt="Shifa Properties Ltd Group Hotel pool view"
            className="w-full h-full object-cover origin-center"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: 'linear-gradient(135deg,rgba(26,35,126,0.70) 0%,rgba(201,168,76,0.40) 100%)' }}>
            <span className="section-label text-gold-300">{pick(s.visionLabel, lang)}</span>
            <h3 className="text-white text-2xl md:text-3xl font-black mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              {pick(s.visionTitle, lang)}
            </h3>
            <Link to="/projects" id="services-view-projects-btn" className="btn-gold font-bold">
              {pick(s.viewProjects, lang)}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
