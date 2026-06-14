import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { Counter } from '../components/ui/Counter';
import { STATS } from '../data/landingData';

// Premium Lucide Icons integrated
import {
  Award,
  TrendingUp,
  ShieldCheck,
  Users,
  Compass,
  Flag,
  HeartHandshake,
  Heart,
  Scale,
  SmilePlus,
  Check
} from 'lucide-react';

const AboutPage: React.FC = () => (
  <PageTransition id="about-page">
    <main className="pt-24 bg-slate-50">

      {/* Page header */}
      <PageHero
        title="ABOUT Shifa Properties Ltd"
        subtitle="Bangladesh's leading hotel development & investment company"
        imageSrc={heroImg}
      />

      {/* About section (Who We Are + Sister Concern) */}
      <AboutSection />

      {/* ── Our Mission ── */}
      <div className="gs-section py-20 bg-white">
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="section-label">Our Direction</span>
            <h2 className="section-title">Our Mission</h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award className="w-6 h-6 text-[#C9A84C]" />, title: 'Quality First', body: 'Ensure high quality products with the most modern & innovative concepts.' },
              { icon: <TrendingUp className="w-6 h-6 text-[#0288D1]" />, title: 'Economic Growth', body: 'Grow the economy by reducing poverty & unemployment across Bangladesh.' },
              { icon: <ShieldCheck className="w-6 h-6 text-[#1a237e]" />, title: 'Safe Investment', body: 'Create tension-free sources of income by providing guaranteed & safe investment returns.' },
              { icon: <Users className="w-6 h-6 text-[#C9A84C]" />, title: 'Client Priority', body: 'Give the highest priority and ensure the best service to all our valued clients.' },
              { icon: <Compass className="w-6 h-6 text-[#0288D1]" />, title: 'Tourism Vision', body: 'Make Bangladesh one of the top tourism destinations in the world.' },
              { icon: <Flag className="w-6 h-6 text-[#1a237e]" />, title: 'National Pride', body: 'Make the nation prestigious & wealthy through excellence in hospitality.' },
            ].map((m, i) => (
              <div key={i} className="gs-card p-6 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group border border-slate-100 rounded-xl bg-white">
                <div className="p-3 bg-slate-50 w-fit rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-100">
                  {m.icon}
                </div>
                <h3 className="font-black text-sm mb-2" style={{ color: '#1a237e' }}>{m.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Enhanced Vision Section ── */}
      <section className="relative py-24 overflow-hidden bg-[#f8f9fc]">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a237e]/5 skew-x-12 -mr-20" />

        <div className="gs-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Vision Text Block */}
            <div className="lg:col-span-7">
              <span className="inline-block py-1 px-3 mb-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C9A84C] bg-[#C9A84C]/10 rounded-full">
                Strategic Outlook
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a237e] mb-8 leading-tight">
                Redefining the Future of <span className="text-[#0288D1]">Sustainable Living</span>
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  We don’t just build properties; we craft ecosystems. Shifa Properties Ltd Group is committed to
                  transcending traditional real estate by integrating <strong className="text-[#1a237e]">halal-certified investment models</strong>
                  with world-class hospitality standards.
                </p>
                <p>
                  Our vision is to empower thousands of families by bridging the gap between luxury lifestyle
                  aspirations and reliable, long-term financial security.
                </p>
              </div>
            </div>

            {/* Modern Stats Grid */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                    </div>
                    <h3 className="text-3xl font-black text-[#1a237e] mb-1">
                      <Counter value={stat.value} />
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-[#1a237e] transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trust Indicator */}
              <div className="mt-8 p-4 bg-[#1a237e] rounded-xl text-white flex items-center gap-4 shadow-lg shadow-blue-900/10">
                <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <p className="text-sm font-medium">Trusted by 5,000+ investors globally for excellence and integrity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <div className="gs-section py-16 bg-white">
        <div className="gs-container">
          <div className="text-center mb-12">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
            <div className="gold-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <HeartHandshake className="w-8 h-8 text-[#1a237e]" />, label: 'Always Customer First — Customer Priority — Customer Focused' },
              { icon: <SmilePlus className="w-8 h-8 text-[#0288D1]" />, label: 'Sharing both happiness & sadness' },
              { icon: <Scale className="w-8 h-8 text-[#C9A84C]" />, label: 'Respect & Responsibility' },
              { icon: <Heart className="w-8 h-8 text-rose-500" />, label: 'Honesty, Caring & Trust' },
            ].map((v, i) => (
              <div key={i} className="gs-card p-6 flex flex-col items-center text-center gap-4 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group border border-slate-50 bg-slate-50/30 rounded-xl">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {v.icon}
                </div>
                <p className="text-gray-700 text-sm font-semibold leading-snug">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  </PageTransition>
);

export default AboutPage;