import React, { createContext, useContext, useState } from 'react';

export type Lang = 'EN' | 'BN';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'EN',
  setLang: () => {},
  toggleLang: () => {},
  t: (en) => en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('EN');
  const setLang = (newLang: Lang) => setLangState(newLang);
  const toggleLang = () => setLangState(prev => (prev === 'EN' ? 'BN' : 'EN'));
  const t = (en: string, bn: string) => (lang === 'EN' ? en : bn);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
