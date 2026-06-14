import React from 'react';
import { motion, type Variants } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';
import { Link } from 'react-router-dom';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const SHOE_PRODUCTS = [
  {
    title: 'Shoe Upper Leather',
    titleBn: 'শু আপার লেদার',
    desc: 'Full-grain and corrected-grain leather ideal for premium shoe uppers with smooth surface finish.',
    descBn: 'মসৃণ পৃষ্ঠের ফিনিশ সহ প্রিমিয়াম শু আপারের জন্য উপযুক্ত।',
    specs: ['1.0–1.6 mm', '8–14 sft', 'Black / Tan / Brown'],
    tag: 'Shoe Upper',
  },
  {
    title: 'Shoe Lining Leather',
    titleBn: 'শু লাইনিং লেদার',
    desc: 'Soft, thin leather for shoe interior lining providing comfort and breathability.',
    descBn: 'নরম, পাতলা চামড়া যা জুতার ভিতরের আস্তরণে আরাম প্রদান করে।',
    specs: ['0.6–0.9 mm', '5–10 sft', 'Natural / White / Black'],
    tag: 'Lining',
  },
  {
    title: 'Insole Leather',
    titleBn: 'ইনসোল লেদার',
    desc: 'Dense and durable leather for insoles providing structure and moisture absorption.',
    descBn: 'ঘন এবং টেকসই চামড়া যা ইনসোলের কাঠামো এবং আর্দ্রতা শোষণ নিশ্চিত করে।',
    specs: ['2.0–3.0 mm', 'Split / Full-grain', 'Natural color'],
    tag: 'Insole',
  },
  {
    title: 'Sole Leather',
    titleBn: 'সোল লেদার',
    desc: 'Vegetable tanned, heavy sole leather for traditional and premium footwear.',
    descBn: 'ভেজিটেবল ট্যান্ড, ভারী সোল লেদার প্রথাগত এবং প্রিমিয়াম ফুটওয়্যারের জন্য।',
    specs: ['3.0–5.0 mm', 'Veg tanned', 'Dark Brown / Black'],
    tag: 'Sole',
  },
  {
    title: 'Heel Leather Stiffener',
    titleBn: 'হিল লেদার স্টিফেনার',
    desc: 'Firm leather panels used to maintain the shape and structure of the shoe heel.',
    descBn: 'শক্ত চামড়ার প্যানেল যা জুতার হিলের আকৃতি বজায় রাখে।',
    specs: ['1.8–2.5 mm', 'Firm grade', 'Beige / Tan'],
    tag: 'Stiffener',
  },
  {
    title: 'Toe Box Leather',
    titleBn: 'টো বক্স লেদার',
    desc: 'Reinforced leather for toe protection providing rigidity and durability to shoe front.',
    descBn: 'টোর সুরক্ষার জন্য শক্তিশালী চামড়া যা জুতার সামনের দৃঢ়তা নিশ্চিত করে।',
    specs: ['1.5–2.0 mm', 'Compressed', 'Natural / Beige'],
    tag: 'Toe Box',
  },
];

const ShoeSectionPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = UI.category;

  return (
    <PageTransition id="shoe-section-page">
      <main style={{ background: '#120800' }}>
        <PageHero
          title={lang === 'EN' ? 'SHOE SECTION' : 'শু সেকশন'}
          subtitle={lang === 'EN' ? 'Premium leather components for footwear manufacturing' : 'ফুটওয়্যার উৎপাদনের জন্য প্রিমিয়াম চামড়া উপাদান'}
          imageSrc={heroImg}
        />

        {/* Intro */}
        <div className="gs-container py-16">
          <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
              {lang === 'EN' ? 'Our Shoe Leather Range' : 'আমাদের শু লেদার রেঞ্জ'}
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              {lang === 'EN' ? 'Complete Footwear Leather Solutions' : 'সম্পূর্ণ ফুটওয়্যার লেদার সমাধান'}
            </h2>
            <div className="w-16 h-1 rounded-full bg-primary-rust mx-auto my-4" />
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              {lang === 'EN'
                ? 'We supply a full range of shoe leather — from uppers and linings to insoles, soles, and stiffeners — all meeting strict export quality standards.'
                : 'আমরা শু আপার থেকে লাইনিং, ইনসোল, সোল এবং স্টিফেনার পর্যন্ত সম্পূর্ণ রেঞ্জের শু লেদার সরবরাহ করি।'}
            </p>
          </motion.div>

          {/* Product Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {SHOE_PRODUCTS.map((product, i) => (
              <motion.div
                key={i} variants={fadeInUp}
                className="group rounded-2xl border border-white/10 p-6 hover:-translate-y-2 transition-all duration-300 cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}
              >
                {/* Tag */}
                <span className="badge-modern-primary text-xs mb-4 inline-block">
                  {product.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-rust-light transition-colors">
                  {lang === 'EN' ? product.title : product.titleBn}
                </h3>

                {/* Divider */}
                <div className="w-10 h-0.5 rounded-full bg-primary-rust mb-3 opacity-60" />

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {lang === 'EN' ? product.desc : product.descBn}
                </p>

                {/* Specs chips */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, j) => (
                    <span key={j} className="badge-modern-outline text-xs">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quality Control Panel */}
        <div className="gs-container pb-16">
          <motion.div
            className="rounded-3xl p-8 border border-dashed border-primary-rust"
            style={{ background: 'rgba(176,90,40,0.06)' }}
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
                  {pick(c.qualityStandards, lang)}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {lang === 'EN' ? 'Shoe Leather Quality Standards' : 'শু লেদার মানের মানদণ্ড'}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pick(c.qualityControl, lang)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  lang === 'EN' ? 'No Knife Cuts' : 'নাইফ কাট মুক্ত',
                  lang === 'EN' ? 'No Holes' : 'ছিদ্রহীন',
                  lang === 'EN' ? 'Well Trimmed' : 'সুচারু ট্রিম',
                  lang === 'EN' ? 'No Mould' : 'ছত্রাক মুক্ত',
                  lang === 'EN' ? 'Smooth Fiber' : 'মসৃণ ফাইবার',
                  lang === 'EN' ? 'No Vin Marks' : 'ভিন মার্ক নেই',
                ].map((qc, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full flex-shrink-0 bg-primary-rust-light" />
                    {qc}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="gs-container pb-20 text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-gray-400 mb-6 text-base">
              {lang === 'EN' ? 'Interested in our shoe leather products? Request a price or samples.' : 'আমাদের শু লেদার পণ্যে আগ্রহী? মূল্য বা নমুনার জন্য অনুরোধ করুন।'}
            </p>
            <Link to="/contact" id="shoe-contact-btn"
              className="badge-modern-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold">
              {lang === 'EN' ? 'Request Price / Sample' : 'মূল্য / নমুনার জন্য অনুরোধ'}
            </Link>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ShoeSectionPage;
