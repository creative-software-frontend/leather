import type {
  NavLink, HeroSlide, ServiceCard,
  Project, Testimonial, Stat, FooterColumn, NewsArticle
} from '../types';

// ── Local image imports ────────────────────────────────────────────────────
import img0 from '../assets/image/wbs45-min.jpg';
import img1 from '../assets/image/Wet-Blue-Splits-h-product1.jpg';
import img2 from '../assets/image/1Wet-Blue-Splits-min.jpg';
import img3 from '../assets/image/2-Wet-Blue-Splits-min (1).jpg';
import img4 from '../assets/image/2-Wet-Blue-Splits-min.jpg';
import img5 from '../assets/image/about.jpg';
import img6 from '../assets/image/chrome-free-goat1.jpg';
import img7 from '../assets/image/cow-crust222.jpg';
import img8 from '../assets/image/cow-crust325.jpg';
import img9 from '../assets/image/1Wet-Blue-Splits-min.jpg';

export { img0, img1, img2, img3, img4, img5, img6, img7, img8, img9 };

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Company', href: '#',
    children: [
      { label: 'Why Us', href: '/why-us' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Teams', href: '/our-team' },
      { label: 'Career', href: '/careers' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
  { label: 'Download Brochure', href: '/download-brochure' },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    badge: { en: 'Leather Export House', bn: 'লেদার এক্সপোর্ট হাউস' },
    title: { en: 'Premium Quality Leather Exporter', bn: 'প্রিমিয়াম মানের চামড়া রপ্তানিকারক' },
    subtitle: { en: 'Experience world-class finished leather, crust leather, and wet blue splits with our sustainable production process.', bn: 'আমাদের টেকসই উৎপাদন প্রক্রিয়ার মাধ্যমে বিশ্বমানের ফিনিশড চামড়া, ক্রাস্ট চামড়া এবং ওয়েট ব্লু স্প্লিটসের অভিজ্ঞতা নিন।' },
    image: img8,
    cta: { en: 'Explore Products', bn: 'পণ্য অন্বেষণ করুন' },
    ctaLink: '#projects',
  },
  {
    id: 2,
    badge: { en: 'Eco-Friendly Production', bn: 'পরিবেশ বান্ধব উৎপাদন' },
    title: { en: 'Sustainable Leather Manufacturing', bn: 'টেকসই চামড়া উৎপাদন' },
    subtitle: { en: 'Committed to green environment and eco-friendly leather production conforming to global standards.', bn: 'বিশ্বমানের সাথে সামঞ্জস্যপূর্ণ সবুজ পরিবেশ এবং পরিবেশ বান্ধব চামড়া উৎপাদনে প্রতিশ্রুতিবদ্ধ।' },
    image: img6,
    cta: { en: 'Learn More', bn: 'আরও জানুন' },
    ctaLink: '#about',
  },
  {
    id: 3,
    badge: { en: 'Global Supply', bn: 'বিশ্বব্যাপী সরবরাহ' },
    title: { en: 'Exporting Excellence Worldwide', bn: 'বিশ্বব্যাপী শ্রেষ্ঠত্ব রপ্তানি' },
    subtitle: { en: 'Delivering top-grade leather products globally with unmatched reliability and quality assurance.', bn: 'অতুলনীয় নির্ভরযোগ্যতা এবং গুণমানের নিশ্চয়তা সহ বিশ্বব্যাপী শীর্ষ-গ্রেডের চামড়ার পণ্য সরবরাহ করা।' },
    image: img9,
    cta: { en: 'Contact Us', bn: 'যোগাযোগ করুন' },
    ctaLink: '#contact',
  },
];

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    icon: '🏨',
    title: 'Hotel',
    description: 'Premium 5-star hotel suites with guaranteed halal income and world-class hospitality services.',
    color: '#1a237e',
  },
  {
    id: 2,
    icon: '🏢',
    title: 'Apartment',
    description: 'Modern luxury apartments designed for comfortable urban living with premium facilities.',
    color: '#C9A84C',
  },
  {
    id: 3,
    icon: '🗺️',
    title: 'Land',
    description: 'Strategic land plots in prime locations — Cox\'s Bazar, Kuakata, and Padma riverside.',
    color: '#0288D1',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Padma Grand Hotel',
    location: 'Jazira, Padma Bridge',
    category: 'Hotel',
    image: img4,
    description: 'Situated near the Jazira point of the Padma bridge alongside the Dhaka-Vanga Expressway, the Hotel boasts unparalleled natural beauty.',
    tag: 'Featured',
  },
  {
    id: 2,
    name: 'Bay Sands Hotel',
    location: 'Cox\'s Bazar',
    category: 'Hotel',
    image: img5,
    description: 'World-class 5-star hotel suites at Cox\'s Bazar — the longest sea beach in the world.',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Kuakata Hotel',
    location: 'Kuakata, Bay of Bengal',
    category: 'Hotel',
    image: img7,
    description: 'A natural paradise in the Bay of Bengal — where the sun rises and sets over the same sea.',
  },
  {
    id: 4,
    name: 'One City Residences',
    location: 'Dhaka',
    category: 'Apartment',
    image: img0,
    description: 'Premium urban apartments in the heart of Dhaka with modern amenities and smart living concepts.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Abu Nasar Md. Badrul Alam',
    role: 'Share Recuperation Limited',
    company: 'Investor',
    avatar: 'https://ui-avatars.com/api/?name=Abu+Nasar&background=1a237e&color=fff&size=80',
    rating: 5,
    badge: 'new',
    text: 'Leather Export House provided us with the best hotel suite experience.Their service quality and management excellence is truly world- class.',
  },
{
  id: 2,
    name: 'Shihab Shariar Khan',
      role: 'Proprietor, D-Eventz',
        company: 'Business Partner',
          avatar: 'https://ui-avatars.com/api/?name=Shihab+Khan&background=C9A84C&color=fff&size=80',
            rating: 5,
              badge: 'new',
                text: 'Shifa Properties Ltd\' projects are bringing beautiful international-standard hotels to Bangladesh. Their investments are highly profitable.',
  },
{
  id: 3,
    name: 'Mr. Abdul Mahbud Chowdhury',
      role: 'Chairman & Coordinator',
        company: 'LM Partners',
          avatar: 'https://ui-avatars.com/api/?name=Abdul+Chowdhury&background=0288D1&color=fff&size=80',
            rating: 5,
              badge: 'new',
                text: 'Hotel registration process, coordination and overall transparency at Leather Export House is phenomenal.I am very happy with their professionalism.',
},
];

export const STATS: Stat[] = [
  { id: 1, value: '10+', label: 'Years Experience', icon: '🏆' },
  { id: 2, value: '5000+', label: 'Happy Investors', icon: '👥' },
  { id: 3, value: '15+', label: 'Active Projects', icon: '🏗️' },
  { id: 4, value: '3', label: 'Countries', icon: '🌍' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Company',
    links: [
      { label: 'Why Us', href: '/why-us' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Teams', href: '/our-team' },
      { label: 'Career', href: '/careers' },
    ],
  },
  {
    title: 'Projects',
    links: [
      { label: 'All Projects', href: '/projects' },
      { label: 'Hotels', href: '/projects' },
      { label: 'Apartments', href: '/projects' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'News Room', href: '/news' },
      { label: 'Download Brochure', href: '/download-brochure' },
      { label: 'CSR', href: '#' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

// ── News Articles ─────────────────────────────────────────────────────────
import newsImg1 from '../assets/image/wbs45-min.jpg';
import newsImg2 from '../assets/image/Wet-Blue-Splits-h-product1.jpg';
import newsImg3 from '../assets/image/1Wet-Blue-Splits-min.jpg';
import newsImg4 from '../assets/image/2-Wet-Blue-Splits-min (1).jpg';
import newsImg5 from '../assets/image/about.jpg';

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Leather Export House Expands Global Footprint with New European Distribution Hub',
    summary: 'In a move to strengthen our presence in the European market, Leather Export House has successfully established a new distribution hub in Italy, ensuring faster delivery of our premium Wet Blue Splits and Crust Leather to top-tier fashion brands.',
    date: 'April 8, 2026',
    source: 'Leather International',
    href: '#',
    image: newsImg1,
    category: 'Expansion',
  },
  {
    id: 2,
    title: 'Sustainable Leather Production: Achieving 100% Chrome-Free Tanning',
    summary: 'Our state-of-the-art tannery has officially transitioned to 100% chrome-free tanning for our goat and cow crust leather lines, significantly reducing environmental impact while maintaining unparalleled fiber smoothness and durability.',
    date: 'March 20, 2026',
    source: 'Eco Tannery Daily',
    href: '#',
    image: newsImg2,
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'Leather Export House Awarded ISO 9001:2015 for Quality Management',
    summary: 'We are proud to announce that Leather Export House has been awarded the prestigious ISO 9001:2015 certification. This underscores our unwavering commitment to strict QC: No knife cuts, no holes, and perfectly trimmed leather for our global buyers.',
    date: 'February 15, 2026',
    source: 'Global Industry Standards',
    href: '#',
    image: newsImg3,
    category: 'Awards',
  },
  {
    id: 4,
    title: 'Record-Breaking Export Volumes in Q1 2026 for Finished Leather Products',
    summary: 'Driven by high demand in the Asian and North American markets, our export volumes for premium finished leather and shoe upper sections have reached an all-time high, marking a 35% year-over-year growth.',
    date: 'January 10, 2026',
    source: 'Bangladesh Export Herald',
    href: '#',
    image: newsImg4,
    category: 'Business Growth',
  },
  {
    id: 5,
    title: 'New Automated Sorting Facility Enhances Hide Quality Control',
    summary: 'Leather Export House has inaugurated a highly automated hide sorting facility. This investment guarantees precise grading and ensures our buyers receive only the finest, defect-free leather hides.',
    date: 'December 5, 2025',
    source: 'Tech in Manufacturing',
    href: '#',
    image: newsImg5,
    category: 'Innovation',
  },
];
