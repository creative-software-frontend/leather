import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

// Import exact leather assets mapped in your architecture
import imgWetBlue from '../../assets/image/wbs45-min.jpg';
import imgCowCrust from '../../assets/image/cow-crust222.jpg';
import imgGoatCrust from '../../assets/image/chrome-free-goat1.jpg';
import imgFinished from '../../assets/image/Wet-Blue-Splits-h-product1.jpg';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

interface LeatherProduct {
  id: string;
  nameEN: string;
  nameBN: string;
  descEN: string;
  descBN: string;
  image: string;
  tagEN: string;
  tagBN: string;
  route: string;
}

const LEATHER_PRODUCTS: LeatherProduct[] = [
  {
    id: 'wet-blue',
    nameEN: 'Wet Blue Splits',
    nameBN: 'ওয়েট ব্লু স্প্লিটস',
    descEN: 'Premium wet blue splits with uniform thickness, excellent grain consistency, and rigorous grading process.',
    descBN: 'প্রিমিয়াম ওয়েট ব্লু স্প্লিটস অভিন্ন পুরুত্ব, চমৎকার দানা এবং কঠোর গ্রেডিং প্রক্রিয়ার সাথে।',
    image: imgWetBlue,
    tagEN: 'Top Seller',
    tagBN: 'শীর্ষ বিক্রেতা',
    route: '/category/wet-blue-splits'
  },
  {
    id: 'cow-crust',
    nameEN: 'Cow Crust Leather',
    nameBN: 'কাউ ক্রাস্ট লেদার',
    descEN: 'Superior dyed cow crust ready for finishing, offering exceptional tensile strength and vibrant undertones.',
    descBN: 'অসাধারণ প্রসার্য শক্তি এবং উজ্জ্বল রঙের কাউ ক্রাস্ট চামড়া ফিনিশিংয়ের জন্য প্রস্তুত।',
    image: imgCowCrust,
    tagEN: 'Premium Quality',
    tagBN: 'প্রিমিয়াম কোয়ালিটি',
    route: '/category/cow-crust'
  },
  {
    id: 'goat-crust',
    nameEN: 'Goat Crust (Chrome Free)',
    nameBN: 'ছাগলের ক্রাস্ট (ক্রোম ফ্রি)',
    descEN: 'Eco-friendly, chrome-free goat crust leather perfectly suited for high-end fashion and accessories.',
    descBN: 'পরিবেশ বান্ধব, ক্রোম-মুক্ত ছাগলের চামড়া হাই-এন্ড ফ্যাশন এবং আনুষাঙ্গিক জন্য উপযুক্ত।',
    image: imgGoatCrust,
    tagEN: 'Eco Friendly',
    tagBN: 'পরিবেশ বান্ধব',
    route: '/category/goat-crust'
  },
  {
    id: 'finished-leather',
    nameEN: 'Finished Leather',
    nameBN: 'ফিনিশড লেদার',
    descEN: 'Exquisitely crafted finished leather tailored for automotive upholstery and luxury footwear.',
    descBN: 'অটোমোটিভ আপহোলস্টারি এবং বিলাসবহুল পাদুকাগুলির জন্য তৈরি ফিনিশড চামড়া।',
    image: imgFinished,
    tagEN: 'Custom Grade',
    tagBN: 'কাস্টম গ্রেড',
    route: '/category/finished-leather'
  }
];

const ProductsPreviewSection: React.FC = () => {
  const [selected, setSelected] = useState<LeatherProduct | null>(null);
  const { lang } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="products" className="gs-section pb-10 relative overflow-hidden" style={{ background: '#120800' }}>
      <div className="absolute inset-0 bg-[url('../../assets/image/about.jpg')] opacity-5 bg-cover bg-center mix-blend-overlay pointer-events-none" />

      <div className="gs-container pb-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
            {lang === 'EN' ? 'Export Categories' : 'রপ্তানি বিভাগসমূহ'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            {lang === 'EN' ? 'Premium Leather Grades' : 'প্রিমিয়াম চামড়ার গ্রেড'}
          </h2>
          <div className="w-16 h-1 rounded-full my-6 mx-auto bg-primary-rust" />
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'EN'
              ? 'Explore our extensive portfolio of meticulously processed leather. From raw wet blue splits to fully finished crusts, we export quality you can trust.'
              : 'আমাদের চামড়ার বিশাল পোর্টফোলিও অন্বেষণ করুন। ওয়েট ব্লু থেকে শুরু করে ফিনিশড ক্রাস্ট পর্যন্ত, আমরা গুণমানের নিশ্চয়তা দিই।'}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          {LEATHER_PRODUCTS.map((product) => (
            <motion.div
              key={product.id} variants={fadeInUp}
              className="group overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary-rust/40 bg-white/5 flex flex-col"
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
            >
              <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => setSelected(product)}>
                <motion.img
                  whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }}
                  src={product.image} alt={lang === 'EN' ? product.nameEN : product.nameBN} className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-white shadow-lg backdrop-blur-md"
                    style={{ background: 'rgba(176,90,40,0.8)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    {lang === 'EN' ? product.tagEN : product.tagBN}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-primary-rust-light transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {lang === 'EN' ? product.nameEN : product.nameBN}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {lang === 'EN' ? product.descEN : product.descBN}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <Link to={product.route} className="text-xs font-bold text-primary-rust uppercase tracking-wider hover:text-primary-rust-light transition-colors">
                    {lang === 'EN' ? 'View Specs' : 'স্পেসিকস দেখুন'} →
                  </Link>
                  <button onClick={() => setSelected(product)} className="text-gray-500 hover:text-white p-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link to="/products" className="badge-modern-primary inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wider uppercase rounded-full shadow-[0_0_20px_rgba(176,90,40,0.3)] hover:shadow-[0_0_30px_rgba(176,90,40,0.5)] transition-all">
            {lang === 'EN' ? 'View Complete Catalog' : 'সম্পূর্ণ ক্যাটালগ দেখুন'}
          </Link>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="rounded-3xl overflow-hidden max-w-3xl w-full relative z-10 grid grid-cols-1 md:grid-cols-2"
              style={{ background: '#1a0f06', border: '1px solid rgba(176,90,40,0.3)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
            >
              <div className="relative h-64 md:h-full">
                <img src={selected.image} alt={lang === 'EN' ? selected.nameEN : selected.nameBN} className="w-full h-full object-cover" />
                <button onClick={() => setSelected(null)} className="md:hidden absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center">×</button>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center relative">
                <button onClick={() => setSelected(null)} className="hidden md:flex absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <span className="inline-block px-3 py-1 bg-primary-rust/20 text-primary-rust-light border border-primary-rust/30 text-[10px] font-bold uppercase tracking-widest rounded-full w-max mb-4">
                  {lang === 'EN' ? selected.tagEN : selected.tagBN}
                </span>
                <h3 className="text-3xl font-black mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {lang === 'EN' ? selected.nameEN : selected.nameBN}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {lang === 'EN' ? selected.descEN : selected.descBN}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => { setSelected(null); navigate('/contact'); }}
                    className="flex-1 badge-modern-primary text-center justify-center text-sm font-bold tracking-wider uppercase py-3.5 rounded-xl shadow-[0_0_15px_rgba(176,90,40,0.3)]"
                  >
                    {lang === 'EN' ? 'Request Quote' : 'কোটেশন অনুরোধ করুন'}
                  </button>
                  <button
                    onClick={() => { setSelected(null); navigate(selected.route); }}
                    className="flex-1 text-white border border-white/20 hover:border-white/50 hover:bg-white/5 text-center justify-center text-sm font-bold tracking-wider uppercase py-3.5 rounded-xl transition-all"
                  >
                    {lang === 'EN' ? 'Full Specs' : 'সম্পূর্ণ বিবরণ'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductsPreviewSection;