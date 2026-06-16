import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/image/logo-leh1-01.png';
import footerBg from '../assets/image/2-Wet-Blue-Splits-min (1).jpg';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

// Leather Export House footer data
const SOCIALS = [
  {
    id: 'fb', label: 'Facebook',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>),
    href: 'https://facebook.com', color: 'hover:bg-[#1877F2] hover:border-[#1877F2]'
  },
  {
    id: 'ig', label: 'Instagram',
    icon: (<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" /></svg>),
    href: 'https://instagram.com', color: 'hover:bg-[#E4405F] hover:border-[#E4405F]'
  },
  {
    id: 'li', label: 'LinkedIn',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>),
    href: 'https://linkedin.com', color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]'
  },
  {
    id: 'yt', label: 'YouTube',
    icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>),
    href: 'https://youtube.com', color: 'hover:bg-[#FF0000] hover:border-[#FF0000]'
  },
];

const CONTACT_INFO = [
  { icon: MapPin, title: { en: 'Mailing Address', bn: 'ঠিকানা' }, value: { en: '18/4,A Tallabagh, Tannery mor, Dhaka-1209, Bangladesh', bn: '১৮/৪, এ টল্লাবাগ, ট্যানারি মোড়, ঢাকা-১২০৯, বাংলাদেশ' }, href: 'https://maps.google.com/?q=Tallabagh+Tannery+mor+Dhaka+Bangladesh' },
  { icon: Phone, title: { en: 'Phone', bn: 'ফোন' }, value: { en: '+8801818592500', bn: '+৮৮০১৮১৮৫৯২৫০০' }, href: 'tel:+8801818592500', highlight: true },
  { icon: Mail, title: { en: 'Email', bn: 'ইমেইল' }, value: { en: 'leh.taher@gmail.com', bn: 'leh.taher@gmail.com' }, href: 'mailto:leh.taher@gmail.com' },
  { icon: Mail, title: { en: 'Official Email', bn: 'অফিসিয়াল ইমেইল' }, value: { en: 'info@lehbd.com', bn: 'info@lehbd.com' }, href: 'mailto:info@lehbd.com' },
  { icon: Clock, title: { en: 'Office Hours', bn: 'অফিস সময়' }, value: { en: 'Saturday – Thursday: 09:00 AM – 06:00 PM (GMT+6)', bn: 'শনিবার – বৃহস্পতিবার: সকাল ৯:০০ – সন্ধ্যা ৬:০০ (GMT+6)' } },
];

const QUICK_LINKS = [
  {
    title: { en: 'Our Products', bn: 'আমাদের পণ্য' },
    links: [
      { label: { en: 'Wet Blue Splits', bn: 'ওয়েট ব্লু স্প্লিটস' }, href: '/category/wet-blue-splits' },
      { label: { en: 'Cow Crust Leather', bn: 'কাউ ক্রাস্ট লেদার' }, href: '/category/cow-crust-leather' },
      { label: { en: 'Goat Crust Leather', bn: 'গোট ক্রাস্ট লেদার' }, href: '/category/goat-crust-leather' },
      { label: { en: 'Finish Leather', bn: 'ফিনিশ লেদার' }, href: '/category/finish-leather' },
      { label: { en: 'Shoe Section', bn: 'শু সেকশন' }, href: '/category/shoe-section' },
    ]
  },
  {
    title: { en: 'Company', bn: 'কোম্পানি' },
    links: [
      { label: { en: 'About Us', bn: 'আমাদের সম্পর্কে' }, href: '/about' },
      { label: { en: 'Quality Control', bn: 'মান নিয়ন্ত্রণ' }, href: '/quality' },
      { label: { en: 'Gallery', bn: 'গ্যালারি' }, href: '/gallery' },
      { label: { en: 'Price Request', bn: 'মূল্য অনুরোধ' }, href: '/contact' },
      { label: { en: 'Downloads', bn: 'ডাউনলোড' }, href: '/downloads' },
    ]
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden text-gray-300"
      style={{ background: '#120800', borderTop: '1px solid rgba(176,90,40,0.2)' }}
    >
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src={footerBg}
          alt="Leather Export House tannery"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.18) saturate(0.4) sepia(0.3)', opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(18,8,0,0.5), rgba(18,8,0,0.95))' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">

        {/* TOP LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16" style={{ borderBottom: '1px solid rgba(176,90,40,0.15)' }}>

          {/* Brand Profile Block */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="relative p-1.5 bg-white rounded-2xl transition-all duration-300"
                style={{ border: '1px solid rgba(176,90,40,0.4)', boxShadow: '0 0 20px rgba(176,90,40,0.1)' }}>
                <img src={logoImg} alt="Leather Export House Logo" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-2xl text-white tracking-tight font-serif">
                  Leather Export <span className="text-primary-rust-light">House</span>
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary-rust-light/90 mt-0.5">
                  B A N G L A D E S H
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {pick(UI.footer.desc, lang)}
            </p>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">{pick(UI.footer.connect, lang)}</p>
              <div className="flex flex-wrap gap-2.5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-inner ${s.color}`}
                    style={{ border: '1px solid rgba(176,90,40,0.2)', background: 'rgba(255,255,255,0.04)' }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl"
            style={{ background: 'rgba(176,90,40,0.05)', border: '1px solid rgba(176,90,40,0.12)', backdropFilter: 'blur(8px)' }}>
            {CONTACT_INFO.map((item, idx) => {
              const IconComponent = item.icon;
              const isLink = !!item.href;
              const Wrapper = isLink ? 'a' : 'div';

              return (
                <Wrapper
                  key={idx}
                  {...(isLink ? { href: item.href, target: item.href?.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                  className={`flex gap-4 p-3.5 rounded-xl transition-all duration-200 border group/card ${item.highlight
                    ? 'border-primary-rust/30 hover:border-primary-rust/50'
                    : 'border-transparent hover:border-white/10'
                    } ${item.title.en.includes('Office') ? 'sm:col-span-2' : ''}`}
                  style={item.highlight ? { background: 'rgba(176,90,40,0.08)' } : {}}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover/card:scale-105`}
                    style={{ background: 'rgba(176,90,40,0.12)', border: '1px solid rgba(176,90,40,0.25)', color: 'var(--color-primary-rust-light)' }}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{pick(item.title, lang)}</h5>
                    <p className={`text-xs leading-normal font-medium ${item.highlight ? 'text-white font-semibold flex items-center gap-1' : isLink ? 'text-gray-300 group-hover/card:text-white transition-colors flex items-center gap-1' : 'text-gray-400'}`}>
                      {pick(item.value, lang)}
                      {isLink && <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/card:opacity-100 transition-all text-primary-rust-light" />}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* MIDDLE LAYER — Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12"
          style={{ borderBottom: '1px solid rgba(176,90,40,0.1)' }}>
          {QUICK_LINKS.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <div>
                <h4 className="text-white font-bold text-xs tracking-widest uppercase">{pick(col.title, lang)}</h4>
                <div className="w-6 h-[2px] mt-2 rounded-full bg-primary-rust" />
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.href}
                      className="text-gray-500 text-sm hover:text-primary-rust-light transition-colors duration-200 flex items-center gap-2 group/item">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-rust opacity-0 -ml-2 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all duration-200" />
                      {pick(link.label, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Quality Standards Card */}
          <div className="sm:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">{lang === 'EN' ? 'Quality Assurance' : 'মান নিশ্চিতকরণ'}</h4>
            <div className="w-6 h-[2px] mt-2 rounded-full bg-primary-rust" />
            <div className="p-4 rounded-xl space-y-2" style={{ background: 'rgba(176,90,40,0.08)', border: '1px solid rgba(176,90,40,0.2)' }}>
              <p className="text-xs text-gray-400 leading-relaxed">
                {lang === 'EN' ? 'All our leather products undergo strict QC:' : 'আমাদের সব চামড়ার পণ্য কঠোর মান নিয়ন্ত্রণের মধ্য দিয়ে যায়:'} <strong className="text-primary-rust-light">{lang === 'EN' ? 'No Knife Cuts · No Holes · Well Trimmed · No Mould · Smooth Fiber · No Vin Marks' : 'কাটা দাগ নেই · ছিদ্র নেই · সুন্দরভাবে ট্রিম করা · মোল্ড নেই · মসৃণ ফাইবার · কোনো ভিন মার্ক নেই'}</strong>
              </p>
              <p className="text-[10px] font-mono text-gray-600 tracking-wider">
                {lang === 'EN' ? 'EXPORT CERTIFIED · ISO COMPLIANT · BANGLADESH LEATHER STANDARD' : 'রপ্তানি প্রত্যয়িত · আইএসও কমপ্লায়েন্ট · বাংলাদেশ লেদার স্ট্যান্ডার্ড'}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-gray-600 text-xs lg:whitespace-nowrap">
              © {currentYear} <strong className="text-gray-400">{lang === 'EN' ? 'OS IT Solutions Ltd' : 'ওএস আইটি সলিউশনস লিমিটেড'}</strong>{lang === 'EN' ? '. All Rights Reserved.' : '। সমস্ত অধিকার সংরক্ষিত।'}
            </p>
          </div>

          <div className="flex items-center gap-2.5 py-2 px-4 rounded-full flex-shrink-0"
            style={{ background: 'rgba(176,90,40,0.08)', border: '1px solid rgba(176,90,40,0.2)' }}>
            <span className="text-gray-500 text-[11px] font-medium tracking-wide whitespace-nowrap">{lang === 'EN' ? 'Designed by' : 'ডিজাইন করেছে'}</span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'rgba(176,90,40,0.5)' }} />
            <span className="text-xs font-black tracking-wide text-primary-rust-light">Themedove</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;