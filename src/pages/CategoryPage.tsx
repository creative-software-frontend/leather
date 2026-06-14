import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

const CategoryPage: React.FC = () => {
  const { lang } = useLanguage();
  const c = UI.category;

  const handleDownload = () => {
    // In a real application, this would trigger the actual PDF download
    alert(lang === 'EN' ? 'Downloading Specifications PDF...' : 'স্পেসিফিকেশন পিডিএফ ডাউনলোড হচ্ছে...');
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-drifting-texture relative">
      <div className="absolute inset-0 backdrop-panel-overlay"></div>
      
      <div className="gs-container relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {lang === 'EN' ? 'Product Category' : 'পণ্য বিভাগ'}
          </h1>
          <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Column A: Media & Floating Interactivity */}
          <div className="flex flex-col items-center p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <h3 className="text-xl font-bold mb-6 text-primary-rust-light text-center w-full border-b border-white/10 pb-2">
              {pick(c.typesAndSizing, lang)} Media
            </h3>
            <motion.div
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-full max-w-sm aspect-square rounded-xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1596464518422-0a25785a2134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Leather" 
                className="w-full h-full object-cover image-motion-matrix"
              />
            </motion.div>
          </div>

          {/* Column B: Sizing Matrix & Category-Wise Downloads */}
          <div className="flex flex-col p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <h3 className="text-xl font-bold mb-6 text-primary-rust-light text-center w-full border-b border-white/10 pb-2">
              {pick(c.typesAndSizing, lang)}
            </h3>
            
            <div className="space-y-4 flex-1">
              {/* Sizing Data */}
              <div className="border-l-4 border-[#B05A28] bg-white/5 p-4 rounded-r-lg shadow-sm">
                <p className="font-semibold text-gray-200">{pick(c.sizing.fiveSft, lang)}</p>
              </div>
              <div className="border-l-4 border-[#B05A28] bg-white/5 p-4 rounded-r-lg shadow-sm">
                <p className="font-semibold text-gray-200">{pick(c.sizing.sevenSft, lang)}</p>
              </div>
              <div className="border-l-4 border-[#B05A28] bg-white/5 p-4 rounded-r-lg shadow-sm">
                <p className="font-semibold text-gray-200">{pick(c.sizing.nineTenSft, lang)}</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Thickness</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-l-4 border-[#B05A28] bg-white/5 p-3 rounded-r-lg shadow-sm text-sm font-medium text-gray-200">
                    {pick(c.sizing.thickness11, lang)}
                  </div>
                  <div className="border-l-4 border-[#B05A28] bg-white/5 p-3 rounded-r-lg shadow-sm text-sm font-medium text-gray-200">
                    {pick(c.sizing.thickness12, lang)}
                  </div>
                  <div className="border-l-4 border-[#B05A28] bg-white/5 p-3 rounded-r-lg shadow-sm text-sm font-medium text-gray-200">
                    {pick(c.sizing.thickness14, lang)}
                  </div>
                  <div className="border-l-4 border-[#B05A28] bg-white/5 p-3 rounded-r-lg shadow-sm text-sm font-medium text-gray-200">
                    {pick(c.sizing.thickness16, lang)}
                  </div>
                </div>
              </div>
            </div>

            {/* Category-Wise Downloads Box */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <button 
                onClick={handleDownload}
                className="badge-modern-primary w-full justify-center py-3 text-sm cursor-pointer"
              >
                {lang === 'EN' ? 'Download Leather Specifications PDF' : 'লেদার সেকশন স্পেসিফিকেশন পিডিএফ ডাউনলোড করুন'}
              </button>
            </div>
          </div>

          {/* Column C: Target Application Tags & Quality Controls */}
          <div className="flex flex-col space-y-6">
            
            {/* Application Badges */}
            <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <h3 className="text-xl font-bold mb-4 text-primary-rust-light border-b border-white/10 pb-2">
                {pick(c.applicationAndFeatures, lang)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.values(c.applications).map((app, idx) => (
                  <span key={idx} className="badge-modern-glass">
                    {pick(app, lang)}
                  </span>
                ))}
              </div>
            </div>

            {/* Quality Control Layer */}
            <div className="p-6 rounded-2xl border border-dashed border-primary-rust shadow-sm" style={{ background: 'rgba(176,90,40,0.08)' }}>
              <h3 className="text-xl font-bold mb-4 text-white drop-shadow-md border-b border-white/20 pb-2">
                {pick(c.qualityStandards, lang)}
              </h3>
              <div className="text-gray-300 font-medium leading-relaxed">
                {pick(c.qualityControl, lang)}
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default CategoryPage;
