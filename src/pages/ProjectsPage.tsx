import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/landingData';
import type { Project } from '../types';
import PageTransition from '../components/PageTransition';

import { useLanguage } from '../context/LanguageContext';

type Filter = 'All' | Project['category'];
const FILTERS: { value: Filter; label: { en: string; bn: string } }[] = [
  { value: 'All', label: { en: 'All', bn: 'সব' } },
  { value: 'Hotel', label: { en: 'Hotel', bn: 'হোটেল' } },
  { value: 'Apartment', label: { en: 'Apartment', bn: 'অ্যাপার্টমেন্ট' } },
  { value: 'Land', label: { en: 'Land', bn: 'জমি' } },
];

const ProjectsPage: React.FC = () => {
  const { lang } = useLanguage();
  const pick = (obj: { en: string; bn: string }) => lang === 'EN' ? obj.en : obj.bn;

  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [selected, setSelected] = useState<Project | null>(null);
  const navigate = useNavigate();

  const filtered =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <PageTransition id="projects-page">
      <main className="min-h-screen pt-28 pb-20 bg-white">
        <div className="gs-container">

          {/* Page heading */}
          <div className="text-center mb-14">
            <span className="section-label">Our Portfolio</span>
            <h1 className="section-title" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Leather Export House
              B A N G L A D E S HProjects
            </h1>
            <div className="gold-divider mx-auto mt-4" />
            <p className="section-subtitle mx-auto mt-4">
              Explore our full portfolio of world-class hospitality and real estate developments across Bangladesh's most sought-after destinations.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                id={`projects-filter-${filter.value.toLowerCase()}`}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeFilter === filter.value
                    ? 'text-white shadow-gold scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                style={activeFilter === filter.value ? { background: 'linear-gradient(135deg,#1a237e,#0288D1)' } : {}}
              >
                {pick(filter.label)}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((project, idx) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="gs-card group overflow-hidden cursor-pointer animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelected(project)}
              >
                {/* Image */}
                <div className="relative h-64 img-overlay">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: 'rgba(26,35,126,0.85)' }}>
                      {project.category}
                    </span>
                    {project.tag && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)', color: '#0D0D1A' }}>
                        {project.tag}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg,rgba(26,35,126,0.7),rgba(201,168,76,0.5))' }}>
                    <span className="text-white font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      View Details →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-xl" style={{ color: '#1a237e', fontFamily: 'Playfair Display,serif' }}>
                      {project.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex items-center gap-4">
                    <button className="text-xs font-semibold transition-all duration-300 hover:translate-x-1"
                      style={{ color: '#C9A84C' }}>
                      View Details →
                    </button>
                    <span className="text-xs text-gray-300">|</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.dispatchEvent(new Event('open-contact-modal'));
                      }}
                      className="text-xs text-gray-500 hover:text-navy-600 font-medium transition-colors"
                    >
                      📞 Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}

          {/* CTA strip */}
          <div className="mt-16 p-10 rounded-3xl text-center" style={{ background: 'linear-gradient(135deg,#1a237e 0%,#0288D1 100%)' }}>
            <p className="text-white/80 text-sm tracking-widest uppercase mb-3">Ready to Invest?</p>
            <h2 className="text-white font-black text-2xl md:text-3xl mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Own a Premium Hotel Suite or Property
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Start your halal investment journey with Leather Export House
              B A N G L A D E S HGroup — secure ownership, lifetime returns, and world-class hospitality.
            </p>
            <button
              onClick={() => navigate('/send-message')}
              id="projects-page-book-btn"
              className="btn-gold font-bold"
            >
              BOOK NOW →
            </button>
          </div>
        </div>

        {/* Project detail modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(13,13,26,0.8)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-card-lg animate-fade-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white
                                 flex items-center justify-center hover:bg-black/70 transition-colors text-xl">
                  ×
                </button>
              </div>
              <div className="p-8">
                <span className="gs-badge mb-3">{selected.category}</span>
                <h3 className="text-2xl font-black mb-2" style={{ color: '#1a237e', fontFamily: 'Playfair Display,serif' }}>
                  {selected.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4">📍 {selected.location}</p>
                <p className="text-gray-600 leading-relaxed">{selected.description}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelected(null);
                      window.dispatchEvent(new Event('open-contact-modal'));
                    }}
                    className="btn-primary flex-1 text-center text-sm"
                  >
                    Book Now / Enquire
                  </button>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-outline flex-1 text-center text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;
