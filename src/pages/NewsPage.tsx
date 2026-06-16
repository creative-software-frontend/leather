import { useState } from 'react';
import { NEWS_ARTICLES } from '../data/landingData';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

const CATEGORIES = ['All', ...Array.from(new Set(NEWS_ARTICLES.map((a) => a.category)))];

const NewsPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = UI.news;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <PageTransition id="news-page">
      <main className="min-h-screen pt-28 pb-20" style={{ background: '#120800' }}>
        <div className="gs-container">

          {/* Page heading */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(t.label, lang)}</span>
            <h1 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              {pick(t.title, lang)}
            </h1>
            <div className="w-16 h-1 rounded-full my-6 mx-auto bg-primary-rust" />
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {pick(t.subtitle, lang)}
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`news-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${activeCategory === cat
                    ? 'border-primary-rust text-white shadow-lg scale-105'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust))' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article (first) */}
          {activeCategory === 'All' && filtered.length > 0 && (
            <a
              href={filtered[0].href}
              target="_blank"
              rel="noopener noreferrer"
              id="news-featured-article"
              className="group overflow-hidden mb-10 block hover:no-underline rounded-3xl border border-white/10 transition-all duration-500 hover:border-primary-rust/50"
              style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 8px 30px rgba(0,0,0,0.4)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-white shadow-lg"
                      style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust))' }}>
                      ✦ Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-primary-rust/30 text-primary-rust-light"
                      style={{ background: 'rgba(176,90,40,0.1)' }}>
                      {filtered[0].category}
                    </span>
                    <span className="text-xs text-gray-400">{filtered[0].date}</span>
                  </div>
                  <h2 className="font-black text-2xl md:text-3xl mb-4 leading-tight text-white group-hover:text-primary-rust-light transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                    {filtered[0].title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-4">
                    {filtered[0].summary}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-6 font-medium tracking-wide uppercase">
                    <span>📰 {filtered[0].source}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-rust transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-rust-light">
                    {pick(t.readFull, lang)}
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((article, idx) => (
              <a
                key={article.id}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`news-article-${article.id}`}
                className="group overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary-rust/40 block hover:no-underline flex flex-col"
                style={{ animationDelay: `${idx * 0.08}s`, background: 'rgba(255,255,255,0.02)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden border-b border-white/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-primary-rust/30 text-primary-rust-light backdrop-blur-md"
                      style={{ background: 'rgba(176,90,40,0.2)' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 font-medium tracking-wide uppercase">
                    <span className="truncate">📰 {article.source}</span>
                    <span>·</span>
                    <span className="truncate">📅 {article.date}</span>
                  </div>
                  <h3
                    className="font-bold text-lg mb-3 leading-snug line-clamp-2 text-white group-hover:text-primary-rust-light transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                    {article.summary}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-primary-rust transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-rust-light uppercase tracking-wider">
                    {pick(t.readMore, lang)}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24 rounded-3xl border border-white/5 mt-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-primary-rust-light" style={{ background: 'rgba(176,90,40,0.1)' }}>📰</div>
              <p className="text-gray-400 text-lg font-medium">{pick(t.noArticles, lang)}</p>
              <button onClick={() => setActiveCategory('All')} className="mt-6 text-sm text-primary-rust hover:text-primary-rust-light underline underline-offset-4 transition-colors">
                {pick(t.viewAllUpdates, lang)}
              </button>
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default NewsPage;
