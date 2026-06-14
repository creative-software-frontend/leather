import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { Counter } from '../components/ui/Counter';
import { STATS } from '../data/landingData';
import { Award, TrendingUp, ShieldCheck, Users, Compass, Flag, HeartHandshake, Heart, Scale, SmilePlus, Check } from 'lucide-react';

const AboutPage: React.FC = () => (
  <PageTransition id="about-page">
    <main style={{ background: '#120800' }}>

      {/* Page header */}
      <PageHero
        title="ABOUT LEH"
        subtitle="Bangladesh's Premium Leather Export House"
        imageSrc={heroImg}
      />

      {/* About section */}
      <AboutSection />

      {/* ── Our Mission ── */}
      <div className="gs-section py-20" style={{ background: 'rgba(176,90,40,0.04)' }}>
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">Our Direction</span>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
            <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6 text-primary-rust-light" />, title: 'Quality First', body: 'Ensure high quality leather products with the most modern & innovative tanning concepts.' },
              { icon: <TrendingUp className="w-6 h-6 text-primary-rust-light" />, title: 'Export Growth', body: 'Grow leather export revenue by consistently meeting global buyer standards.' },
              { icon: <ShieldCheck className="w-6 h-6 text-primary-rust-light" />, title: 'Quality Control', body: 'Strict QC: No knife cuts, no holes, well trimmed, no mould, smooth fiber.' },
              { icon: <Users className="w-6 h-6 text-primary-rust-light" />, title: 'Client Priority', body: 'Give the highest priority and ensure the best service to all our valued buyers.' },
              { icon: <Compass className="w-6 h-6 text-primary-rust-light" />, title: 'Global Vision', body: 'Make Bangladesh leather one of the most trusted product categories in global markets.' },
              { icon: <Flag className="w-6 h-6 text-primary-rust-light" />, title: 'National Pride', body: 'Contribute to the national economy through premium leather exports.' },
            ].map((m, i) => (
              <div key={i} className="p-6 hover:-translate-y-1 transition-all duration-300 group rounded-2xl border border-white/10 bg-white/5">
                <div className="p-3 w-fit rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(176,90,40,0.12)' }}>
                  {m.icon}
                </div>
                <h3 className="font-black text-sm mb-2 text-primary-rust-light">{m.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.body}</p>
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
                Strategic Outlook
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Redefining <span className="text-primary-rust-light">Premium Leather</span> Exports from Bangladesh
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>We don't just produce leather; we craft superior-quality hides. Leather Export House is committed to
                  transcending traditional tannery standards by integrating <strong className="text-primary-rust-light">modern quality control systems</strong> with world-class export standards.</p>
                <p>Our vision is to empower our buyers with consistent, reliable supply of premium wet blue, crust, and finish leather products for global markets.</p>
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
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-primary-rust-light transition-colors">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl text-white flex items-center gap-4"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust))' }}>
                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <p className="text-sm font-medium">Trusted by global buyers for consistent quality leather supply.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <div className="gs-section py-16" style={{ background: '#120800' }}>
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">What We Stand For</span>
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <div className="w-16 h-1 rounded-full my-4 mx-auto bg-primary-rust" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HeartHandshake className="w-8 h-8 text-primary-rust-light" />, label: 'Always Customer First — Customer Priority — Customer Focused' },
              { icon: <SmilePlus className="w-8 h-8 text-primary-rust-light" />, label: 'Long-term relationships built on trust and quality' },
              { icon: <Scale className="w-8 h-8 text-primary-rust-light" />, label: 'Respect & Responsibility in every shipment' },
              { icon: <Heart className="w-8 h-8 text-primary-rust-light" />, label: 'Honesty, Caring & Trust in every business deal' },
            ].map((v, i) => (
              <div key={i} className="p-6 flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-all duration-300 group rounded-2xl border border-white/10 bg-white/5">
                <div className="transition-transform duration-300 group-hover:scale-110">{v.icon}</div>
                <p className="text-gray-400 text-sm font-semibold leading-snug">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  </PageTransition>
);

export default AboutPage;