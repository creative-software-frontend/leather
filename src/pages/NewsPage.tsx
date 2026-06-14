import { useState } from 'react';
import { NEWS_ARTICLES } from '../data/landingData';
import PageTransition from '../components/PageTransition';

const CATEGORIES = ['All', ...Array.from(new Set(NEWS_ARTICLES.map((a) => a.category)))];

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <PageTransition id="news-page">
      <main className="min-h-screen pt-28 pb-20" style={{ background: 'linear-gradient(180deg,#f0f4ff 0%,#ffffff 60%)' }}>
        <div className="gs-container">

          {/* Page heading */}
          <div className="text-center mb-14">
            <span className="section-label">Media & Updates</span>
            <h1 className="section-title" style={{ fontFamily: 'Playfair Display, serif' }}>
              Shifa Properties Ltd News Room
            </h1>
            <div className="gold-divider mx-auto mt-4" />
            <p className="section-subtitle mx-auto mt-4">
              The latest news, partnership announcements, project milestones, and corporate updates from Shifa Properties Ltd Group.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`news-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeCategory === cat
                    ? 'text-white shadow-gold scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg,#1a237e,#0288D1)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured article (first) */}
          {activeCategory === 'All' && (
            <a
              href={filtered[0].href}
              target="_blank"
              rel="noopener noreferrer"
              id="news-featured-article"
              className="gs-card group overflow-hidden mb-10 block hover:no-underline animate-fade-up"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto img-overlay overflow-hidden">
                  <img
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,transparent 60%,rgba(255,255,255,0.05))' }} />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-black tracking-wider uppercase text-white"
                      style={{ background: 'linear-gradient(135deg,#1a237e,#0288D1)' }}>
                      ✦ Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                      {filtered[0].category}
                    </span>
                    <span className="text-xs text-gray-400">{filtered[0].date}</span>
                  </div>
                  <h2 className="font-black text-2xl md:text-3xl mb-4 leading-tight group-hover:text-navy-600 transition-colors duration-300"
                    style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}>
                    {filtered[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6 line-clamp-4">
                    {filtered[0].summary}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
                    <span>📰 {filtered[0].source}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: '#C9A84C' }}>
                    Read Full Article →
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
                className="gs-card group overflow-hidden animate-fade-up block hover:no-underline"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                {/* Image */}
                <div className="relative h-52 img-overlay overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span>📰 {article.source}</span>
                    <span>·</span>
                    <span>📅 {article.date}</span>
                  </div>
                  <h3
                    className="font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-navy-600 transition-colors duration-300"
                    style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: '#C9A84C' }}>
                    Read More →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default NewsPage;
