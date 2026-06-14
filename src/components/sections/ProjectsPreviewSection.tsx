'use client';
import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../../data/landingData';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ProjectsPreviewSection: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const p = UI.projects;
  const displayProjects = PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="gs-section bg-white">
      <div className="gs-container">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-label">{pick(p.label, lang)}</span>
          <h2 className="section-title">{pick(p.title, lang)}</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtitle mx-auto mt-4">{pick(p.subtitle, lang)}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
        >
          {displayProjects.map((project) => (
            <motion.div
              key={project.id} variants={fadeInUp}
              className="gs-card group overflow-hidden cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.08 }} transition={{ duration: 0.8 }}
                  src={project.image} alt={project.name} className="w-full h-full object-cover"
                />
                {project.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C9A84C] text-[#0D0D1A]">{project.tag}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-[#1a237e] font-serif">{project.name}</h3>
                <p className="text-xs text-gray-400 mb-3">📍 {project.location || 'Bangladesh'}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <button className="mt-4 text-xs font-semibold text-[#C9A84C] hover:translate-x-1 transition-transform">
                  {pick(p.viewDetails, lang)}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">{pick(p.viewAll, lang)}</Link>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative z-10"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative h-64">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-8 h-8">×</button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2 text-[#1a237e] font-serif">{selected.name}</h3>
                <p className="text-gray-600 mb-6">{selected.description}</p>
                <button
                  onClick={() => { setSelected(null); navigate('/send-message'); }}
                  className="btn-primary w-full justify-center"
                >
                  {pick(p.bookNow, lang)}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsPreviewSection;