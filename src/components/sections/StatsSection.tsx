import { motion } from 'framer-motion';
import { Trophy, Users, Package, Globe } from 'lucide-react';
import { Counter } from '../ui/Counter';
import { STATS } from '../../data/landingData';
import { useLanguage } from '../../context/LanguageContext';
import { UI } from '../../data/translations';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const StatsSection = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark) 0%, var(--color-primary-rust) 50%, #8b3a10 100%)' }}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)' }} />
      <div className="gs-container relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          {STATS.map((stat, idx) => {
            const icons = [<Trophy size={40} />, <Users size={40} />, <Package size={40} />, <Globe size={40} />];
            return (
              <motion.div key={stat.id} variants={itemVariants} className="text-center">
                <div className="flex justify-center mb-4 text-white/80">{icons[idx]}</div>
                <div className="text-4xl md:text-5xl font-black text-white">
                  <Counter value={stat.value} />
                </div>
                <p className="text-white/70 mt-2 font-medium tracking-wide text-sm uppercase">
                  {lang === 'EN' ? UI.stats[idx]?.en : UI.stats[idx]?.bn}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
