import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/about.jpg';
import { Counter } from '../components/ui/Counter';
import { STATS } from '../data/landingData';
import { Award, TrendingUp, ShieldCheck, Users, Compass, Flag, HeartHandshake, Heart, Scale, SmilePlus, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

const AboutPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = UI.aboutPage;

  return (
  <PageTransition id="about-page">
    <main style={{ background: '#120800' }}>

      {/* Page header */}
      <PageHero
        title={pick(t.heroTitle, lang)}
        subtitle={pick(t.heroSubtitle, lang)}
        imageSrc={heroImg}
      />

      {/* About section */}
      <AboutSection />

      {/* ── Our Mission ── */}
      <div className="gs-section py-20" style={{ background: 'rgba(176,90,40,0.04)' }}>
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(t.direction, lang)}</span>
            <h2 className="text-3xl font-bold mb-4 text-white">{pick(t.missionTitle, lang)}</h2>
            <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[0] },
              { icon: <TrendingUp className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[1] },
              { icon: <ShieldCheck className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[2] },
              { icon: <Users className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[3] },
              { icon: <Compass className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[4] },
              { icon: <Flag className="w-6 h-6 text-primary-rust-light" />, item: t.missionItems[5] },
            ].map((m, i) => (
              <div key={i} className="p-6 hover:-translate-y-1 transition-all duration-300 group rounded-2xl border border-white/10 bg-white/5">
                <div className="p-3 w-fit rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(176,90,40,0.12)' }}>
                  {m.icon}
                </div>
                <h3 className="font-black text-sm mb-2 text-primary-rust-light">{pick(m.item.title, lang)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{pick(m.item.body, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Enhanced Vision Section ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#1a0f06' }}>
        <div className="absolute top-0 right-0 w-1/3 h-full skew-x-12 -mr-20" style={{ background: 'rgba(176,90,40,0.05)' }} />
        <div className="gs-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-3 mb-4 text-[10px] tracking-[0.2em] uppercase font-bold rounded-full text-primary-rust-light"
                style={{ background: 'rgba(176,90,40,0.12)' }}>
                {pick(t.strategicLabel, lang)}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                {pick(t.strategicHeading1, lang)}<span className="text-primary-rust-light">{pick(t.strategicHeading2, lang)}</span>{pick(t.strategicHeading3, lang)}
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>{pick(t.strategicP1, lang)}</p>
                <p>{pick(t.strategicP2, lang)}</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, index) => (
                  <div key={index} className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary-rust/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-primary-rust" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-1"><Counter value={stat.value} /></h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-primary-rust-light transition-colors">{pick(UI.stats[index], lang)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl text-white flex items-center gap-4"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust))' }}>
                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <p className="text-sm font-medium">{pick(t.trustedBy, lang)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <div className="gs-section py-16" style={{ background: '#120800' }}>
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">{pick(t.standFor, lang)}</span>
            <h2 className="text-3xl font-bold mb-4 text-white">{pick(t.valuesTitle, lang)}</h2>
            <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HeartHandshake className="w-8 h-8 text-primary-rust-light" />, item: t.valuesItems[0] },
              { icon: <SmilePlus className="w-8 h-8 text-primary-rust-light" />, item: t.valuesItems[1] },
              { icon: <Scale className="w-8 h-8 text-primary-rust-light" />, item: t.valuesItems[2] },
              { icon: <Heart className="w-8 h-8 text-primary-rust-light" />, item: t.valuesItems[3] },
            ].map((v, i) => (
              <div key={i} className="p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 group rounded-2xl border border-white/10 bg-white/5">
                <div className="transition-transform duration-300 group-hover:scale-110">{v.icon}</div>
                <p className="text-gray-400 text-sm font-semibold leading-snug">{pick(v.item.label, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  </PageTransition>
  );
};

export default AboutPage;