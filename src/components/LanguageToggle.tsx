import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  // Normalize string comparisons to handle lowercase context states ('en' / 'bn') gracefully
  const currentLang = lang?.toUpperCase();
  const isEn = currentLang === 'EN';
  const isBn = currentLang === 'BN';

  const handleToggle = (e: React.MouseEvent, targetLang: 'EN' | 'BN') => {
    e.preventDefault();
    e.stopPropagation(); // Stops mobile overlay wrappers from hijacking state changes

    // Adapt to either strict uppercase or lowercase context actions dynamically
    setLang(targetLang as any);
  };

  return (
    <div
      className="inline-flex items-center bg-[#161616] border border-white/10 rounded-full p-1 shadow-inner h-9 select-none"
      onClick={(e) => e.stopPropagation()} // Safe-guard containment
    >
      {/* EN Button */}
      <button
        type="button"
        onClick={(e) => handleToggle(e, 'EN')}
        className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${isEn
            ? 'text-white bg-primary-rust shadow-md shadow-primary-rust/30 scale-105'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
      >
        EN
      </button>

      {/* Subtle Vertical Divider Line */}
      <div className="h-3 w-[1px] bg-white/10 mx-1" />

      {/* BN Button */}
      <button
        type="button"
        onClick={(e) => handleToggle(e, 'BN')}
        className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${isBn
            ? 'text-white bg-primary-rust shadow-md shadow-primary-rust/30 scale-105'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
          }`}
      >
        BN
      </button>
    </div>
  );
};

export default LanguageToggle;