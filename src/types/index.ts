// ── Navigation ───────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

type BilingualText = string | { en: string; bn: string };

// ── Hero ─────────────────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  title: BilingualText;
  subtitle: BilingualText;
  badge: BilingualText;
  image: string;
  cta: BilingualText;
  ctaLink: string;
}

// ── Services ─────────────────────────────────────────────────────
export interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

// ── Projects ─────────────────────────────────────────────────────
export interface Project {
  id: number;
  name: string;
  location: string;
  category: 'Hotel' | 'Apartment' | 'Land';
  image: string;
  description: string;
  tag?: string;
}

// ── Testimonials ─────────────────────────────────────────────────
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  badge?: string;
}

// ── Stats ────────────────────────────────────────────────────────
export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

// ── Footer ───────────────────────────────────────────────────────
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

// ── Partners / Consultants ───────────────────────────────────────
export interface Partner {
  id: number;
  name: string;
  logo: string;
}

// ── News ────────────────────────────────────────────────────────
export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
  href: string;
  image: string;
  category: string;
}
