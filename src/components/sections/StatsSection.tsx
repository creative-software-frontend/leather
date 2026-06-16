import { motion } from 'framer-motion';
import { Trophy, Users, CheckCircle, Globe } from 'lucide-react';
import { Counter } from '../ui/Counter';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const LEATHER_STATS = [
  { id: 1, value: '35+', labelEN: 'Years Experience', labelBN: 'বছরের অভিজ্ঞতা', icon: <Trophy size={40} /> },
  { id: 2, value: '500+', labelEN: 'Global Clients', labelBN: 'গ্লোবাল ক্লায়েন্ট', icon: <Users size={40} /> },
  { id: 3, value: '100%', labelEN: 'Quality Assured', labelBN: 'গুণগত মান নিশ্চিত', icon: <CheckCircle size={40} /> },
  { id: 4, value: '40+', labelEN: 'Export Countries', labelBN: 'রপ্তানি দেশসমূহ', icon: <Globe size={40} /> },
];

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
          {LEATHER_STATS.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants} className="text-center">
              <div className="flex justify-center mb-4 text-white/80">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white">
                <Counter value={stat.value} />
              </div>
              <p className="text-white/70 mt-2 font-medium tracking-wide text-sm uppercase">
                {lang === 'EN' ? stat.labelEN : stat.labelBN}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
