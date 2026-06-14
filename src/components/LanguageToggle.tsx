import React from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Neo-Brutalist EN / BN sliding toggle.
 * - Solid black border + offset drop-shadow block effect
 * - Deep navy/gold brand palette (no hardcoded purple)
 * - Smooth CSS transform slider
 */
const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const isEN = lang === 'EN';

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      id="lang-toggle-btn"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '86px',
        height: '34px',
        borderRadius: '4px',
        border: '2px solid #0D0D1A',
        boxShadow: '3px 3px 0px #0D0D1A',
        background: isEN ? '#1a237e' : '#C9A84C',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background 0.3s ease, box-shadow 0.1s ease',
        padding: 0,
        overflow: 'hidden',
      }}
      onMouseDown={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '1px 1px 0px #0D0D1A';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translate(2px,2px)';
      }}
      onMouseUp={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '3px 3px 0px #0D0D1A';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translate(0,0)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '3px 3px 0px #0D0D1A';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translate(0,0)';
      }}
    >
      {/* BN label (left) */}
      <span
        style={{
          position: 'absolute',
          left: '8px',
          fontSize: '10px',
          fontWeight: 900,
          letterSpacing: '0.08em',
          color: isEN ? 'rgba(255,255,255,0.55)' : '#0D0D1A',
          transition: 'color 0.3s ease',
          userSelect: 'none',
          zIndex: 1,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        বাং
      </span>

      {/* EN label (right) */}
      <span
        style={{
          position: 'absolute',
          right: '8px',
          fontSize: '10px',
          fontWeight: 900,
          letterSpacing: '0.08em',
          color: isEN ? '#0D0D1A' : 'rgba(255,255,255,0.55)',
          transition: 'color 0.3s ease',
          userSelect: 'none',
          zIndex: 1,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        EN
      </span>

      {/* Sliding white pill block */}
      <span
        style={{
          position: 'absolute',
          top: '3px',
          bottom: '3px',
          width: '38px',
          borderRadius: '3px',
          background: '#ffffff',
          border: '1.5px solid #0D0D1A',
          transform: isEN ? 'translateX(41px)' : 'translateX(1px)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.12)',
          zIndex: 2,
        }}
      >
        {/* Dial indicator pill */}
        <span
          style={{
            width: '18px',
            height: '6px',
            borderRadius: '99px',
            background: isEN ? '#1a237e' : '#C9A84C',
            transition: 'background 0.3s ease',
            display: 'block',
          }}
        />
      </span>
    </button>
  );
};

export default LanguageToggle;
