import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { NEWS_ARTICLES } from '../../data/landingData';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const NewsPreviewSection: React.FC = () => {
  const { lang } = useLanguage();
  const n = UI.news;
  const preview = NEWS_ARTICLES.slice(0, 3);

  return (
    <section id="news-preview" className="gs-section" style={{ background: 'linear-gradient(180deg, #0e0804 0%, #1a0f06 100%)' }}>
      <div className="gs-container">
        <motion.div className="text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(n.label, lang)}</span>
          <h2 className="text-3xl font-bold mb-4 text-white">{pick(n.title, lang)}</h2>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4">{pick(n.subtitle, lang)}</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {preview.map((article) => (
            <motion.a key={article.id} href={article.href} target="_blank" rel="noopener noreferrer"
              id={`news-preview-${article.id}`} variants={fadeInUp}
              className="group overflow-hidden block rounded-2xl border border-white/10 bg-white/5 hover:-translate-y-2 transition-all duration-300"
              style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.2)' }}>
              <div className="relative h-52 overflow-hidden">
                <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.8 }}
                  src={article.image} alt={article.title} className="w-full h-full object-cover origin-center image-motion-matrix" loading="lazy" />
                <div className="absolute top-4 left-4">
                  <span className="badge-modern-primary text-xs">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>📰 {article.source}</span><span>·</span><span>📅 {article.date}</span>
                </div>
                <h3 className="font-bold text-base mb-3 leading-snug line-clamp-2 text-white group-hover:text-primary-rust-light transition-colors duration-300"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{article.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{article.summary}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1 text-primary-rust-light">
                  {pick(n.readMore, lang)}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/news" id="news-preview-view-all"
            className="badge-modern-primary inline-flex items-center gap-2 px-6 py-3 text-sm rounded-full">
            {pick(n.viewAll, lang)}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPreviewSection;
