import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import testimonialsBg from '../../assets/image/2-Wet-Blue-Splits-min (1).jpg';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const LEATHER_TESTIMONIALS = [
  {
    id: 1,
    name: 'Chen Wei',
    role: 'Sourcing Director',
    company: 'Guangzhou Footwear Mfg',
    avatar: 'https://ui-avatars.com/api/?name=Chen+Wei&background=1a237e&color=fff&size=80',
    rating: 5,
    badge: 'Verified Buyer',
    textEN: 'Leather Export House has consistently delivered the highest grade cow crust leather. Their sorting accuracy is phenomenal and saves us tremendous time in our manufacturing pipeline.',
    textBN: 'লেদার এক্সপোর্ট হাউস ধারাবাহিকভাবে সর্বোচ্চ গ্রেডের কাউ ক্রাস্ট চামড়া সরবরাহ করেছে। তাদের বাছাইয়ের নির্ভুলতা অসাধারণ।'
  },
  {
    id: 2,
    name: 'Alessandro Rossi',
    role: 'Head of Materials',
    company: 'Milano Leather Goods',
    avatar: 'https://ui-avatars.com/api/?name=Alessandro+Rossi&background=C9A84C&color=fff&size=80',
    rating: 5,
    badge: 'Long-term Partner',
    textEN: 'The wet blue splits we receive are incredibly uniform in thickness. Their commitment to quality control makes them our preferred supplier in South Asia.',
    textBN: 'আমরা যে ওয়েট ব্লু স্প্লিটস পাই তার পুরুত্ব অবিশ্বাস্যভাবে অভিন্ন। মান নিয়ন্ত্রণের প্রতি তাদের প্রতিশ্রুতি তাদের আমাদের পছন্দের সরবরাহকারীতে পরিণত করেছে।'
  },
  {
    id: 3,
    name: 'James Cooper',
    role: 'Procurement Manager',
    company: 'Global Tannery Network',
    avatar: 'https://ui-avatars.com/api/?name=James+Cooper&background=0288D1&color=fff&size=80',
    rating: 5,
    badge: 'Verified Buyer',
    textEN: 'Excellent communication and transparent export logistics. The finished leather quality exceeded our expectations for the automotive upholstery division.',
    textBN: 'চমৎকার যোগাযোগ এবং স্বচ্ছ রপ্তানি লজিস্টিকস। ফিনিশড লেদারের মান আমাদের প্রত্যাশা ছাড়িয়ে গেছে।'
  },
];

const TestimonialsSection: React.FC = () => {
  const [active, setActive] = useState<number>(0);
  const { lang } = useLanguage();

  return (
    <section id="testimonials" className="py-20" style={{ background: 'linear-gradient(180deg, #120800 0%, #1a0f06 100%)' }}>
      <div className="gs-container">
        <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
            {lang === 'EN' ? 'Global Trust' : 'বৈশ্বিক আস্থা'}
          </span>
          <h2 className="text-3xl font-bold mb-4 text-white">
            {lang === 'EN' ? 'What Our Partners Say' : 'আমাদের অংশীদাররা যা বলে'}
          </h2>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          {LEATHER_TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              onClick={() => setActive(idx)}
              variants={fadeInUp}
              className={`p-6 cursor-pointer transition-all duration-300 rounded-2xl border bg-white/5 hover:-translate-y-1
                ${active === idx ? 'border-primary-rust scale-[1.02] shadow-lg' : 'border-white/10'}`}
              style={active === idx ? { boxShadow: '0 0 30px rgba(176,90,40,0.15)' } : {}}
            >
              {t.badge && (
                <span className="badge-modern-primary inline-block mb-4">
                  ✦ {lang === 'EN' ? t.badge : 'যাচাইকৃত ক্রেতা'}
                </span>
              )}
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-rust" />
                <div>
                  <h4 className="font-bold text-sm text-primary-rust-light">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={`${t.id}-star-${i}`} className="text-primary-rust-light text-base">★</span>
                ))}
              </div>
              <blockquote className="text-gray-400 text-sm leading-relaxed italic">
                "{lang === 'EN' ? t.textEN : t.textBN}"
              </blockquote>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Subscribe Strip */}
        <motion.div
          className="relative rounded-3xl overflow-hidden h-56 md:h-72 shadow-2xl"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            src={testimonialsBg} alt="Leather Export House Production" className="w-full h-full object-cover image-motion-matrix" />
          <div className="absolute inset-0" style={{ background: 'rgba(18, 8, 0, 0.7)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-lg font-serif">
                {lang === 'EN' ? 'Join Our Global Network' : 'আমাদের গ্লোবাল নেটওয়ার্কে যোগ দিন'}
              </p>
              <p className="text-white/70 text-xs">
                {lang === 'EN' ? 'Get updates on our latest leather stock and pricing.' : 'আমাদের সর্বশেষ চামড়ার স্টক এবং মূল্যের আপডেট পান।'}
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input type="email" placeholder={lang === 'EN' ? 'Enter your email' : 'আপনার ইমেইল লিখুন'}
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/30 text-white placeholder-white/50 outline-none focus:border-primary-rust transition-colors" />
              <button className="badge-modern-primary text-sm px-5 py-2.5 whitespace-nowrap rounded-full">
                {lang === 'EN' ? 'Subscribe' : 'সাবস্ক্রাইব'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
