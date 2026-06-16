import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Ruler, Globe2 } from 'lucide-react';
import servicesImg from '../../assets/image/Wet-Blue-Splits-h-product1.jpg';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const SERVICES_DATA = [
  {
    id: 1,
    icon: <ShieldCheck size={40} />,
    titleEN: 'Premium Tanning',
    titleBN: 'প্রিমিয়াম ট্যানিং',
    descEN: 'State-of-the-art tanning processes yielding highly durable Wet Blue, Cow Crust, and Goat Crust leathers.',
    descBN: 'আধুনিক ট্যানিং প্রক্রিয়ার মাধ্যমে অত্যন্ত টেকসই ওয়েট ব্লু, কাউ ক্রাস্ট এবং গোট ক্রাস্ট চামড়া তৈরি।'
  },
  {
    id: 2,
    icon: <Ruler size={40} />,
    titleEN: 'Sorting & Grading',
    titleBN: 'বাছাই এবং গ্রেডিং',
    descEN: 'Rigorous quality control ensuring every split meets exact international specification standards.',
    descBN: 'কঠোর মান নিয়ন্ত্রণের মাধ্যমে আন্তর্জাতিক নির্দিষ্টকরণের মানদণ্ড নিশ্চিত করা।'
  },
  {
    id: 3,
    icon: <Globe2 size={40} />,
    titleEN: 'Global Export',
    titleBN: 'বৈশ্বিক রপ্তানি',
    descEN: 'Reliable logistics handling bulk shipments of premium leather to manufacturing hubs worldwide.',
    descBN: 'বিশ্বব্যাপী উৎপাদন কেন্দ্রগুলোতে প্রিমিয়াম চামড়ার বাল্ক চালান পরিচালনা করা।'
  },
];

const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="services" className="py-20" style={{ background: '#120800' }}>
      <div className="gs-container">
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
            {lang === 'EN' ? 'Our Capabilities' : 'আমাদের সক্ষমতা'}
          </span>
          <h2 className="text-3xl font-bold mb-4 text-white">
            {lang === 'EN' ? 'Processing Excellence' : 'প্রক্রিয়াকরণে উৎকর্ষতা'}
          </h2>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          <p className="text-base max-w-2xl mx-auto text-gray-400 mt-4">
            {lang === 'EN' 
              ? 'From rawhide to premium finished leather, our integrated processing facilities ensure maximum quality control.'
              : 'কাঁচা চামড়া থেকে প্রিমিয়াম ফিনিশড চামড়া পর্যন্ত, আমাদের প্রক্রিয়াকরণ সুবিধাগুলি সর্বোচ্চ মান নিশ্চিত করে।'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group text-center p-8 cursor-pointer rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-all duration-300"
              style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 text-primary-rust-light"
                style={{ background: 'rgba(176,90,40,0.15)', border: '2px solid rgba(176,90,40,0.3)' }}>
                {service.icon}
              </div>
              <h3 className="mb-3 font-bold text-primary-rust-light">
                {lang === 'EN' ? service.titleEN : service.titleBN}
              </h3>
              <div className="w-10 h-0.5 mx-auto mb-4 rounded-full bg-primary-rust opacity-60" />
              <p className="text-gray-400 text-sm leading-relaxed">
                {lang === 'EN' ? service.descEN : service.descBN}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 rounded-3xl overflow-hidden relative h-64 md:h-80 shadow-2xl"
          variants={fadeInUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.img
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            src={servicesImg} alt="Leather Export House processing"
            className="w-full h-full object-cover origin-center image-motion-matrix"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
               style={{ background: 'rgba(18, 8, 0, 0.6)', backdropFilter: 'blur(2px)' }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-white/80">
              {lang === 'EN' ? 'Facility Tour' : 'সুবিধা পরিদর্শন'}
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-black mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              {lang === 'EN' ? 'Explore Our Production Lines' : 'আমাদের উৎপাদন লাইন অন্বেষণ করুন'}
            </h3>
            <Link to="/about"
              className="badge-modern-primary text-sm px-6 py-2">
              {lang === 'EN' ? 'Learn More' : 'আরও জানুন'}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
