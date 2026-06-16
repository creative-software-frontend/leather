import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo-leh1-01.png';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';
import { PhoneCall, ChevronDown } from 'lucide-react';

// Normalize string typing to match component inputs robustly
const getNavLinks = (lang: string) => {
  const activeLang = (lang?.toUpperCase() === 'BN' ? 'BN' : 'EN') as 'EN' | 'BN';
  return [
    { label: pick(UI.nav.home, activeLang), href: '/' },
    {
      label: pick(UI.nav.company, activeLang),
      href: '#',
      children: [
        { label: pick(UI.nav.aboutUs, activeLang), href: '/about' },
        { label: pick(UI.nav.quality, activeLang), href: '/quality' },
        { label: pick(UI.nav.gallery, activeLang), href: '/gallery' },
      ],
    },
    {
      label: pick(UI.nav.products, activeLang),
      href: '#',
      children: [
        { label: pick(UI.nav.wetBlueSplits, activeLang), href: '/category/wet-blue-splits' },
        { label: pick(UI.nav.cowCrustLeather, activeLang), href: '/category/cow-crust-leather' },
        { label: pick(UI.nav.goatCrustLeather, activeLang), href: '/category/goat-crust-leather' },
        { label: pick(UI.nav.finishLeather, activeLang), href: '/category/finish-leather' },
      ],
    },
    { label: pick(UI.nav.shoeSection, activeLang), href: '/category/shoe-section' },
    { label: pick(UI.nav.news, activeLang), href: '/news' },
    { label: pick(UI.nav.contact, activeLang), href: '/contact' },
  ];
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  const dropRef = useRef<HTMLUListElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { lang } = useLanguage();
  const NAV_LINKS = getNavLinks(lang);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const isScrolledPage = location.pathname !== '/';

  useEffect(() => {
    const onScroll = () => {
      if (isScrolledPage) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 60);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname, isScrolledPage]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    setActiveHash(location.hash);
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const getHref = (href: string) => {
    if (href.startsWith('#') && location.pathname !== '/') {
      return '/' + href;
    }
    return href;
  };

  const isNavActive = (href: string) =>
    location.pathname === href || (location.pathname === '/' && activeHash === href);

  const isLight = scrolled || isScrolledPage;
  const currentLangType = (lang?.toUpperCase() === 'BN' ? 'BN' : 'EN') as 'EN' | 'BN';

  return (
    <nav
      ref={navRef}
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b will-change-transform
        ${isLight
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl py-3 border-white/10'
          : 'bg-transparent py-5 border-transparent'}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-5 lg:px-8 gap-4">

        {/* ── SENIOR UPGRADED LUXURY LOGO AREA ── */}
        <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0 select-none" id="nav-logo-left">
          <div className="relative flex items-center justify-center">
            {/* Ambient Backlight Glow Effect on Hover */}
            <div className="absolute inset-0 bg-primary-rust/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={logo}
              alt="Leather Export House"
              className="relative w-11 h-11 md:w-12 md:h-12 object-contain transition-all duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="font-serif font-black text-base md:text-lg tracking-wide text-white transition-all duration-300 group-hover:text-primary-rust-light">
              Leather Export House
            </p>
            <p className="text-[9px] tracking-[0.28em] font-bold text-slate-400 group-hover:text-primary-rust-light transition-colors duration-300 uppercase mt-0.5">
              PREMIUM QUALITY
            </p>
          </div>
        </Link>

        {/* ── DESKTOP NAV LINKS ── */}
        <ul className="hidden lg:flex items-center gap-1 flex-1 justify-center" ref={dropRef}>
          {NAV_LINKS.map((link) => {
            const hasChildren = link.children && link.children.length > 0;
            const isActive = isNavActive(link.href);

            if (hasChildren) {
              return (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    id={`nav-${link.label.toLowerCase()}-dropdown`}
                    onClick={(e) => { e.preventDefault(); setOpenDropdown(link.label); }}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs xl:text-sm font-bold tracking-widest uppercase transition-all duration-300 border border-transparent text-slate-100 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 stroke-[2] ${openDropdown === link.label ? 'rotate-180 text-primary-rust-light' : ''}`} />
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className={`absolute top-full left-0 pt-6 transition-all duration-300 transform
                    ${openDropdown === link.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    <div className="w-56 bg-black/95 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden">
                      <div className="h-[2px] w-full bg-primary-rust" />
                      <div className="py-2">
                        {link.children!.map((child) => (
                          <a
                            key={child.label}
                            href={getHref(child.href)}
                            id={`nav-${child.label.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={(e) => {
                              if (child.href.startsWith('#') || child.href.includes('#')) {
                                e.preventDefault();
                                const hash = child.href.includes('#') ? '#' + child.href.split('#')[1] : child.href;
                                if (child.href.startsWith('/') && child.href.includes('#')) {
                                  navigate(child.href);
                                } else {
                                  handleLinkClick(hash);
                                }
                              } else {
                                setOpenDropdown(null);
                              }
                            }}
                            className="flex items-center gap-2.5 px-5 py-3 text-xs xl:text-sm font-bold tracking-wide text-slate-100 hover:bg-white/5 hover:text-primary-rust-light transition-all duration-200 group/link"
                          >
                            <span className="w-1.5 h-1.5 bg-primary-rust-light opacity-0 scale-50 group-hover/link:opacity-100 group-hover/link:scale-100 transition-all duration-200 flex-shrink-0" />
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.label}>
                <a
                  href={getHref(link.href)}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={`px-4 py-2 text-xs xl:text-sm font-bold tracking-widest uppercase transition-all duration-300 border-b-2 text-slate-100 hover:text-white hover:bg-white/5
                    ${isActive
                      ? 'border-primary-rust-light text-white'
                      : 'border-transparent'}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── DESKTOP CONTROLS ── */}
        <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
          <LanguageToggle />
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-primary-rust hover:bg-primary-rust-dark transition-all duration-300 shadow-lg hover:shadow-primary-rust/30 border border-primary-rust"
          >
            <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{pick(UI.nav.contact, currentLangType)}</span>
          </a>
        </div>

        {/* ── MOBILE MENU TOGGLE ── */}
        <button
          id="nav-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-11 h-11 bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10"
        >
          <span className={`block h-[2px] w-6 transition-all duration-300 bg-current ${menuOpen ? 'rotate-45 translate-y-2 text-primary-rust-light' : ''}`} />
          <span className={`block h-[2px] w-6 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0 scale-75' : ''}`} />
          <span className={`block h-[2px] w-6 transition-all duration-300 bg-current ${menuOpen ? '-rotate-45 -translate-y-2 text-primary-rust-light' : ''}`} />
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-full left-0 w-full
        ${menuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-black/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          <div className="py-4 px-5 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive = isNavActive(link.href);

              if (hasChildren) {
                return (
                  <div key={link.label} className="w-full">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-4 py-4 font-bold text-slate-200 hover:bg-white/5 hover:text-white transition-all duration-200 border-b border-white/5"
                    >
                      <span className="uppercase tracking-widest text-xs">{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 stroke-[2] ${openDropdown === link.label ? 'rotate-180 text-primary-rust-light' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="pl-4 pb-2 flex flex-col border-l border-primary-rust/40 ml-4 my-2">
                        {link.children!.map((child) => (
                          <a
                            key={child.label}
                            href={getHref(child.href)}
                            onClick={(e) => {
                              if (child.href.startsWith('#') || child.href.includes('#')) {
                                e.preventDefault();
                                const hash = child.href.includes('#') ? '#' + child.href.split('#')[1] : child.href;
                                if (child.href.startsWith('/') && child.href.includes('#')) {
                                  navigate(child.href);
                                  setMenuOpen(false);
                                } else {
                                  handleLinkClick(hash);
                                }
                              } else {
                                setMenuOpen(false);
                              }
                            }}
                            className="block px-4 py-3 text-sm font-bold tracking-wide text-slate-100 hover:text-primary-rust-light transition-colors duration-200 hover:bg-white/5"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={getHref(link.href)}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className={`block px-4 py-4 font-bold transition-all duration-200 border-b border-white/5 uppercase tracking-widest text-xs
                    ${isActive
                      ? 'text-primary-rust-light font-bold bg-white/5'
                      : 'text-slate-100 hover:bg-white/5 hover:text-white'}`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile Footer Toggle Protection Layer */}
            <div className="flex flex-col gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between py-3 px-4 bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Language</span>
                <LanguageToggle />
              </div>
              <a
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-white bg-primary-rust hover:bg-primary-rust-dark transition-colors duration-200"
              >
                <PhoneCall className="w-4 h-4 stroke-[2]" />
                <span>{pick(UI.nav.contact, currentLangType)}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;