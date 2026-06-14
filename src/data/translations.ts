/**
 * Central EN / BN translations for every section of the site.
 * Usage:  const { t } = useLanguage();   then  t(UI.hero.whoWeAre)
 *
 * Each key maps to  { en: string; bn: string }
 */

export const UI = {

  /* ─── HERO ─────────────────────────────────────────────────────── */
  hero: {
    scrollDown: { en: 'Scroll Down', bn: 'নিচে স্ক্রোল করুন' },
    whoWeAre: { en: 'Who We Are', bn: 'আমরা কারা' },
  },

  /* ─── WHY US PAGE ────────────────────────────────────────────────── */
  whyUs: {
    heroTitle: { en: 'Why Choose US?', bn: 'কেন আমাদের বেছে নেবেন?' },

    empower: {
      title: { en: 'Empower Your Business With Our Solutions', bn: 'আমাদের সমাধানের মাধ্যমে আপনার ব্যবসাকে শক্তিশালী করুন' },
      desc: { en: "We're in the business of providing best ITeS services whether you use our simplified products, solutions, or both, we will take care of your business needs.", bn: 'আমরা সেরা আইটিইএস (ITeS) পরিষেবা প্রদানের ব্যবসায় নিয়োজিত। আপনি আমাদের সরলীকৃত পণ্য, সমাধান বা উভয়ই ব্যবহার করুন না কেন, আমরা আপনার ব্যবসায়িক চাহিদার যত্ন নেব।' }
    },

    expertise: {
      label: { en: 'Area of our Expertise', bn: 'আমাদের দক্ষতার ক্ষেত্র' },
      title: { en: 'Conduct Admirable Product Management', bn: 'প্রশংসনীয় পণ্য ব্যবস্থাপনা পরিচালনা' },
      badge1: { en: 'Design & provide solution architecture', bn: 'সমাধান আর্কিটেকচার ডিজাইন এবং প্রদান' },
      badge2: { en: 'Consulting & Training', bn: 'পরামর্শ এবং প্রশিক্ষণ' }
    },

    team: {
      desc: { en: 'We are comprised of 30+ Professionals. We develop enterprise applications and provide services for database & cloud technology.', bn: 'আমরা ৩০ জনেরও বেশি পেশাদারদের নিয়ে গঠিত। আমরা এন্টারপ্রাইজ অ্যাপ্লিকেশন তৈরি করি এবং ডাটাবেস ও ক্লাউড প্রযুক্তির জন্য পরিষেবা প্রদান করি।' },
      list: [
        { en: 'Project Manager', bn: 'প্রজেক্ট ম্যানেজার' },
        { en: 'Architect', bn: 'আর্কিটেক্ট' },
        { en: 'Developer', bn: 'ডেভেলপার' },
        { en: 'SQA', bn: 'এসকিউএ (SQA)' },
        { en: 'UI & UX Designer', bn: 'ইউআই এবং ইউএক্স ডিজাইনার' },
        { en: 'Blockchain Experts', bn: 'ব্লকচেইন বিশেষজ্ঞ' },
        { en: 'Consultants', bn: 'পরামর্শক' },
        { en: 'Web designer', bn: 'ওয়েব ডিজাইনার' }
      ]
    },

    detailing: {
      title: { en: 'We Focus on Project detailing', bn: 'আমরা প্রকল্পের পুঙ্খানুপুঙ্খ বিবরণে ফোকাস করি' },
      box1: { en: 'No hidden costs & strong market credibility.', bn: 'কোনো লুকানো খরচ নেই এবং বাজারে শক্তিশালী নির্ভরযোগ্যতা।' },
      box2: { en: 'Our solutions add value to customers.', bn: 'আমাদের সমাধান গ্রাহকদের মূল্য সংযোজন করে।' },
      box3: { en: 'Single point of contact (SPOC).', bn: 'একক যোগাযোগ মাধ্যম (SPOC)।' }
    },

    values: {
      title: { en: 'Our Values', bn: 'আমাদের মূল্যবোধ' },
      items: [
        { title: { en: 'Customer', bn: 'গ্রাহক' }, desc: { en: 'Treat customers, employees and society with integrity and transparency.', bn: 'গ্রাহক, কর্মচারী এবং সমাজকে সততা ও স্বচ্ছতার সাথে মূল্যায়ন করা।' }, isHighlighted: true },
        { title: { en: 'Team Work', bn: 'দলগত কাজ' }, desc: { en: 'We believe that we will be strong if we work as a team, nurturing, encouraging and assisting each other.', bn: 'আমরা বিশ্বাস করি যে আমরা একটি দল হিসাবে কাজ করলে শক্তিশালী হব, একে অপরকে লালন, উত্সাহিত এবং সহায়তা করব।' } },
        { title: { en: 'Community', bn: 'সম্প্রদায়' }, desc: { en: 'We are living and working in a community where we should contribute within our scope and vision.', bn: 'আমরা এমন এক সমাজে বাস ও কাজ করছি যেখানে আমাদের লক্ষ্য ও পরিধির মধ্যে অবদান রাখা উচিত।' } },
        { title: { en: 'Entrepreneurship', bn: 'উদ্যোক্তা' }, desc: { en: 'We believe in entrepreneurship. We encourage our employees to think outside the box and continuously innovate to achieve the goals.', bn: 'আমরা উদ্যোক্তাবৃত্তিতে বিশ্বাস করি। আমরা আমাদের কর্মীদের নতুন কিছু চিন্তা করতে এবং লক্ষ্য অর্জনে ক্রমাগত উদ্ভাবন করতে উত্সাহিত করি।' } },
        { title: { en: 'Partner', bn: 'অংশীদার' }, desc: { en: 'We value their contribution and try to help in achieving their organizational goal within our scope.', bn: 'আমরা তাদের অবদানকে মূল্য দিই এবং আমাদের পরিধির মধ্যে তাদের প্রাতিষ্ঠানিক লক্ষ্য অর্জনে সহায়তা করার চেষ্টা করি।' } },
        { title: { en: 'Employee', bn: 'কর্মচারী' }, desc: { en: 'Establishing an organization based on caring, innovation and quality.', bn: 'যত্ন, উদ্ভাবন এবং গুণমানের উপর ভিত্তি করে একটি প্রতিষ্ঠান প্রতিষ্ঠা করা।' } },
        { title: { en: 'Efficiency', bn: 'দক্ষতা' }, desc: { en: 'Enabling employees to reach their full potential and reward wealth creation.', bn: 'কর্মীদের তাদের পূর্ণ সম্ভাবনায় পৌঁছাতে সক্ষম করা এবং সম্পদ সৃষ্টিতে পুরস্কৃত করা।' } },
        { title: { en: 'Cost-Efficiency', bn: 'ব্যয়-দক্ষতা' }, desc: { en: 'Reducing cost of clients and enhancing performance.', bn: 'ক্লায়েন্টদের খরচ কমানো এবং কর্মক্ষমতা বৃদ্ধি করা।' } }
      ]
    }
  },

  /* ─── SERVICES ──────────────────────────────────────────────────── */
  services: {
    label: { en: 'What We Offer', bn: 'আমরা কী দিই' },
    title: { en: 'Our Investment Categories', bn: 'আমাদের বিনিয়োগ বিভাগ' },
    subtitle: { en: 'Choose from premium hotel suites, modern apartments, and strategic land plots across Bangladesh\'s most coveted destinations.', bn: 'বাংলাদেশের সবচেয়ে আকর্ষণীয় গন্তব্যে প্রিমিয়াম হোটেল সুইট, আধুনিক অ্যাপার্টমেন্ট এবং কৌশলগত জমি বেছে নিন।' },
    learnMore: { en: 'Learn More →', bn: 'আরও জানুন →' },
    visionLabel: { en: 'Our Vision', bn: 'আমাদের লক্ষ্য' },
    visionTitle: { en: 'World-Class Hotels Across Bangladesh', bn: 'বাংলাদেশজুড়ে বিশ্বমানের রিসোর্ট' },
    viewProjects: { en: 'View All Projects', bn: 'সব প্রকল্প দেখুন' },
    serviceItems: {
      hotel: { title: { en: 'Hotel', bn: 'হোটেল' }, desc: { en: 'Premium 5-star hotel suites with guaranteed halal income and world-class hospitality services.', bn: 'নিশ্চিত হালাল আয় এবং বিশ্বমানের আতিথেয়তা সেবা সহ প্রিমিয়াম ৫-তারা হোটেল সুইট।' } },
      apartment: { title: { en: 'Apartment', bn: 'অ্যাপার্টমেন্ট' }, desc: { en: 'Modern luxury apartments designed for comfortable urban living with premium facilities.', bn: 'প্রিমিয়াম সুবিধাসহ আরামদায়ক নগর জীবনযাপনের জন্য আধুনিক বিলাসবহুল অ্যাপার্টমেন্ট।' } },
      land: { title: { en: 'Land', bn: 'জমি' }, desc: { en: 'Strategic land plots in prime locations — Cox\'s Bazar, Kuakata, and Padma riverside.', bn: 'কক্সবাজার, কুয়াকাটা ও পদ্মা তীরে কৌশলগত প্রিমিয়াম জমির প্লট।' } },
    },
  },

  /* ─── ABOUT ─────────────────────────────────────────────────────── */
  about: {
    label: { en: 'Who We Are', bn: 'আমরা কারা' },
    title: { en: 'Bangladesh\'s Leading Hotel Development & Investment Company', bn: 'বাংলাদেশের শীর্ষ হোটেল উন্নয়ন ও বিনিয়োগ কোম্পানি' },
    p1: { en: 'Shifa Properties Ltd Group is Bangladesh\'s number one hotel developer and investment company, shaping the future of hospitality, tourism, and real estate since 2015. Alongside premium hotel projects like Best Western Plus Bay Hills Himchhari, Bay Sands, Bay Marina, and Bay Breeze, we have also developed landmark residential projects, including Amin City Purbachol and Gold City Mawa.', bn: 'শিফা প্রপার্টিজ লিমিটেড গ্রুপ ২০১৫ সাল থেকে বাংলাদেশের এক নম্বর হোটেল ডেভেলপার ও বিনিয়োগ প্রতিষ্ঠান হিসেবে আতিথেয়তা, পর্যটন ও রিয়েল এস্টেটের ভবিষ্যৎ গড়ে তুলছে। বেস্ট ওয়েস্টার্ন প্লাস বে হিলস হিমছড়ি, বে স্যান্ডস, বে মারিনা ও বে ব্রিজের মতো প্রিমিয়াম হোটেল প্রকল্পের পাশাপাশি আমরা আমিন সিটি পূর্বাচল ও গোল্ড সিটি মাওয়ার মতো ল্যান্ডমার্ক আবাসন প্রকল্পও গড়েছি।' },
    p2: { en: 'Driven by quality, innovation, and long-term vision, we create profitable investment opportunities that combine luxury, trust, and sustainable growth. Through legally secured ownership, we make premium property and hotel investments accessible for everyday Bangladeshis.', bn: 'গুণমান, উদ্ভাবন ও দীর্ঘমেয়াদী দৃষ্টিভঙ্গি দ্বারা পরিচালিত, আমরা বিলাস, বিশ্বাস ও টেকসই প্রবৃদ্ধির সমন্বয়ে লাভজনক বিনিয়োগের সুযোগ তৈরি করি। আইনগতভাবে সুরক্ষিত মালিকানার মাধ্যমে আমরা সাধারণ বাংলাদেশীদের জন্য প্রিমিয়াম সম্পত্তি ও হোটেল বিনিয়োগকে সহজলভ্য করে তুলি।' },
    bullets: [
      { en: 'Halal income & lifetime facilities', bn: 'হালাল আয় ও আজীবন সুবিধা' },
      { en: 'International standard hospitality', bn: 'আন্তর্জাতিক মানের আতিথেয়তা' },
      { en: 'Transparent investment process', bn: 'স্বচ্ছ বিনিয়োগ প্রক্রিয়া' },
      { en: 'Strategic prime-location projects', bn: 'কৌশলগত প্রধান অবস্থানে প্রকল্প' },
    ],
    seeProjects: { en: 'See Our Projects', bn: 'আমাদের প্রকল্প দেখুন' },
    years: { en: 'Years', bn: 'বছর' },
    investors: { en: 'Investors', bn: 'বিনিয়োগকারী' },
    projects: { en: 'Projects', bn: 'প্রকল্প' },
    familyLabel: { en: 'Our Family', bn: 'আমাদের পরিবার' },
    familyTitle: { en: 'Shifa Properties Ltd Group Sister Concern', bn: 'শিফা প্রপার্টিজ লিমিটেড গ্রুপের সহযোগী প্রতিষ্ঠান' },
    sisterConcerns: [
      { name: { en: 'One City Developer Ltd', bn: 'ওয়ান সিটি ডেভেলপার লিমিটেড' }, sub: { en: 'A Trusted Destination for Affordable Land Buying', bn: 'সাশ্রয়ী মূল্যে জমি কেনার বিশ্বস্ত গন্তব্য' } },
      { name: { en: 'Shifa Properties Ltd Project Management', bn: 'শিফা প্রপার্টিজ প্রজেক্ট ম্যানেজমেন্ট' }, sub: { en: 'Comprehensive and efficient project execution', bn: 'ব্যাপক ও দক্ষ প্রকল্প বাস্তবায়ন' } },
      { name: { en: 'Shifa Properties Ltd Properties', bn: 'শিফা প্রপার্টিজ লিমিটেড প্রপার্টিস' }, sub: { en: 'Luxury apartment project in Dhaka', bn: 'ঢাকায় বিলাসবহুল অ্যাপার্টমেন্ট প্রকল্প' } },
      { name: { en: 'Shifa Properties Ltd Hotels and Hotels', bn: 'শিফা প্রপার্টিজ হোটেলস অ্যান্ড রিসোর্টস' }, sub: { en: 'Number one hotel developer company in Bangladesh', bn: 'বাংলাদেশের এক নম্বর হোটেল ডেভেলপার কোম্পানি' } },
    ],
  },

  /* ─── STATS ─────────────────────────────────────────────────────── */
  stats: [
    { en: 'Years Experience', bn: 'বছরের অভিজ্ঞতা' },
    { en: 'Happy Investors', bn: 'সন্তুষ্ট বিনিয়োগকারী' },
    { en: 'Active Projects', bn: 'সক্রিয় প্রকল্প' },
    { en: 'Countries', bn: 'দেশ' },
  ],

  /* ─── PROJECTS PREVIEW ──────────────────────────────────────────── */
  projects: {
    label: { en: 'Our Portfolio', bn: 'আমাদের পোর্টফোলিও' },
    title: { en: 'Our Project Overview', bn: 'আমাদের প্রকল্পের সংক্ষিপ্ত বিবরণ' },
    subtitle: { en: 'Explore our portfolio of world-class hospitality and real estate projects across Bangladesh.', bn: 'বাংলাদেশজুড়ে বিশ্বমানের আতিথেয়তা ও রিয়েল এস্টেট প্রকল্পের আমাদের পোর্টফোলিও অন্বেষণ করুন।' },
    viewDetails: { en: 'View Details →', bn: 'বিস্তারিত দেখুন →' },
    viewAll: { en: 'View All Projects', bn: 'সব প্রকল্প দেখুন' },
    bookNow: { en: 'Book Now', bn: 'এখনই বুক করুন' },
  },

  /* ─── NEWS ──────────────────────────────────────────────────────── */
  news: {
    label: { en: 'Latest Updates', bn: 'সর্বশেষ আপডেট' },
    title: { en: 'News Room', bn: 'নিউজ রুম' },
    subtitle: { en: 'Stay updated with the latest news, project announcements, and milestones from Shifa Properties Ltd Group.', bn: 'শিফা প্রপার্টিজ লিমিটেড গ্রুপের সর্বশেষ সংবাদ, প্রকল্পের ঘোষণা ও মাইলফলকগুলো সম্পর্কে আপডেট থাকুন।' },
    readMore: { en: 'Read More →', bn: 'আরও পড়ুন →' },
    viewAll: { en: 'View All News', bn: 'সব সংবাদ দেখুন' },
  },

  /* ─── TESTIMONIALS ──────────────────────────────────────────────── */
  testimonials: {
    label: { en: 'Client Stories', bn: 'ক্লায়েন্টের গল্প' },
    title: { en: 'What Our Investors Say', bn: 'আমাদের বিনিয়োগকারীরা কী বলেন' },
    subscribe: { en: 'Subscribe for Investment Updates', bn: 'বিনিয়োগ আপডেটের জন্য সাবস্ক্রাইব করুন' },
    subscribeSubtitle: { en: 'Get the latest project news delivered to your inbox.', bn: 'সর্বশেষ প্রকল্পের সংবাদ আপনার ইনবক্সে পান।' },
    placeholder: { en: 'Enter Email Or Mobile', bn: 'ইমেইল বা মোবাইল নম্বর দিন' },
    subscribeBtnLabel: { en: 'Subscribe', bn: 'সাবস্ক্রাইব' },
  },

  /* ─── CONTACT ───────────────────────────────────────────────────── */
  contact: {
    watermark: { en: 'CONTACT US', bn: 'যোগাযোগ করুন' },
    title: { en: 'CONTACT US', bn: 'যোগাযোগ করুন' },
    subtitle: { en: 'Got a question? We\'re just a message away at Shifa Properties Ltd Group Ltd.', bn: 'কোনো প্রশ্ন আছে? শিফা প্রপার্টিজ লিমিটেড গ্রুপে একটি বার্তাই যথেষ্ট।' },
    callUs: { en: 'CALL US', bn: 'কল করুন' },
    email: { en: 'EMAIL', bn: 'ইমেইল' },
    whatsapp: { en: 'WHATSAPP', bn: 'হোয়াটসঅ্যাপ' },
    career: { en: 'CAREER', bn: 'ক্যারিয়ার' },
    callBtn: { en: 'Call', bn: 'কল' },
    emailBtn: { en: 'Email', bn: 'ইমেইল' },
    waBtn: { en: 'WhatsApp', bn: 'হোয়াটসঅ্যাপ' },
    officesTitle: { en: 'Get in touch with us for More Information', bn: 'আরও তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন' },
    addressLabel: { en: 'Address :', bn: 'ঠিকানা :' },
    cellLabel: { en: 'Cell :', bn: 'সেল :' },
    hotlineLabel: { en: 'Hotline :', bn: 'হটলাইন :' },
    emailLabel: { en: 'Email :', bn: 'ইমেইল :' },
    viewMap: { en: 'View Map', bn: 'মানচিত্র দেখুন' },
    mapsLink: { en: 'Maps ↗', bn: 'মানচিত্র ↗' },
    formTitle: { en: 'SEND US A MESSAGE', bn: 'আমাদের একটি বার্তা পাঠান' },
    formSubtitle: { en: 'Interested in investment plans or have general queries? Send a message and our consultant will get back to you shortly.', bn: 'বিনিয়োগ পরিকল্পনায় আগ্রহী বা সাধারণ প্রশ্ন আছে? একটি বার্তা পাঠান, আমাদের পরামর্শদাতা শীঘ্রই যোগাযোগ করবেন।' },
    namePlaceholder: { en: 'John Doe', bn: 'আপনার নাম' },
    phonePlaceholder: { en: '+880 1XXX XXXXXX', bn: '+৮৮০ ১XXX XXXXXX' },
    emailPlaceholder: { en: 'john@example.com', bn: 'example@email.com' },
    msgPlaceholder: { en: 'Tell us about your requirements...', bn: 'আপনার প্রয়োজনীয়তা জানান...' },
    nameLabel: { en: 'Name', bn: 'নাম' },
    phoneLabel: { en: 'Phone Number', bn: 'ফোন নম্বর' },
    emailInputLabel: { en: 'Email Address', bn: 'ইমেইল ঠিকানা' },
    interestLabel: { en: 'I am Interested In', bn: 'আমি আগ্রহী' },
    msgLabel: { en: 'Your Message', bn: 'আপনার বার্তা' },
    sendBtn: { en: 'SEND INQUIRY →', bn: 'অনুসন্ধান পাঠান →' },
    thankYou: { en: 'Thank You!', bn: 'ধন্যবাদ!' },
    thankYouMsg: { en: 'Your message has been submitted successfully. A Shifa Properties Ltd Investment Specialist will contact you within 24 hours.', bn: 'আপনার বার্তা সফলভাবে জমা হয়েছে। একজন শিফা প্রপার্টিজ বিনিয়োগ বিশেষজ্ঞ ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবেন।' },
    interests: [
      { en: 'Hotel Suite Investment', bn: 'হোটেল স্যুট বিনিয়োগ' },
      { en: 'Hotel Booking', bn: 'রিসোর্ট বুকিং' },
      { en: 'Affordable Land Buying', bn: 'সাশ্রয়ী জমি ক্রয়' },
      { en: 'Careers & Placement', bn: 'ক্যারিয়ার ও নিয়োগ' },
      { en: 'General Inquiry', bn: 'সাধারণ অনুসন্ধান' },
    ],
  },

  /* ─── SEND MESSAGE PAGE ─────────────────────────────────────────── */
  sendMessage: {
    badge: { en: 'Get in Touch', bn: 'যোগাযোগ করুন' },
    title: { en: 'Send us a message', bn: 'আমাদের একটি বার্তা পাঠান' },
    subtitle: { en: 'We\'d love to hear from you. Fill out the form and our team will get back to you shortly.', bn: 'আমরা আপনার কাছ থেকে শুনতে চাই। ফর্মটি পূরণ করুন এবং আমাদের টিম শীঘ্রই যোগাযোগ করবে।' },
    firstName: { en: 'First Name', bn: 'প্রথম নাম' },
    lastName: { en: 'Last Name', bn: 'শেষ নাম' },
    email: { en: 'Email Address', bn: 'ইমেইল ঠিকানা' },
    message: { en: 'Your Message...', bn: 'আপনার বার্তা...' },
    sendBtn: { en: 'Send Message', bn: 'বার্তা পাঠান' },
  },

  /* ─── FOOTER ────────────────────────────────────────────────────── */
  footer: {
    tagline: { en: 'Bangladesh\'s #1 Hotel Developer & Investment Company', bn: 'বাংলাদেশের #১ হোটেল ডেভেলপার ও বিনিয়োগ কোম্পানি' },
    hotline: { en: 'Hotline', bn: 'হটলাইন' },
    copyright: { en: '© 2025 Shifa Properties Ltd Group. All rights reserved.', bn: '© ২০২৫ শিফা প্রপার্টিজ লিমিটেড গ্রুপ। সমস্ত অধিকার সংরক্ষিত।' },
    followUs: { en: 'Follow Us', bn: 'আমাদের অনুসরণ করুন' },
  },

  /* ─── NAV LABELS ────────────────────────────────────────────────── */
  nav: {
    home: { en: 'Home', bn: 'হোম' },
    company: { en: 'Company', bn: 'কোম্পানি' },
    aboutUs: { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
    gallery: { en: 'Gallery', bn: 'গ্যালারি' },
    quality: { en: 'Quality', bn: 'মান' },
    products: { en: 'Products', bn: 'পণ্য' },
    news: { en: 'News', bn: 'সংবাদ' },
    downloads: { en: 'Downloads', bn: 'ডাউনলোড' },
    contact: { en: 'Contact', bn: 'যোগাযোগ' },
    wetBlueSplits: { en: 'Wet Blue Splits', bn: 'ওয়েট ব্লু স্প্লিটস' },
    cowCrustLeather: { en: 'Cow Crust Leather', bn: 'কাউ ক্রাস্ট লেদার' },
    goatCrustLeather: { en: 'Goat Crust Leather', bn: 'গোট ক্রাস্ট লেদার' },
    finishLeather: { en: 'Finish Leather', bn: 'ফিনিশ লেদার' },
    shoeSection: { en: 'Shoe', bn: 'শু সেকশন' },
    downloadBrochure: { en: 'Download Brochure', bn: 'ব্রশিউর ডাউনলোড' },
  },

  /* ─── CATEGORY SECTION ──────────────────────────────────────────── */
  category: {
    typesAndSizing: { en: 'Types & Sizing', bn: 'প্রকার এবং সাইজিং' },
    applicationAndFeatures: { en: 'Application & Features', bn: 'অ্যাপ্লিকেশন এবং বৈশিষ্ট্য' },
    qualityStandards: { en: 'Quality Standards', bn: 'মানের মানদণ্ড' },
    applications: {
      belt: { en: 'Belt', bn: 'বেল্ট' },
      gloves: { en: 'Gloves', bn: 'গ্লাভস' },
      puCoating: { en: 'PU Coating', bn: 'পিইউ কোটিং' },
      innerLining: { en: 'Inner Lining', bn: 'ইনার লাইনিং' },
      aprons: { en: 'Aprons', bn: 'অ্যাপ্রন' },
      boots: { en: 'Boots', bn: 'বুট জুতো' },
      saddle: { en: 'Saddle', bn: 'স্যাডল' },
      shoeUpper: { en: 'Shoe Upper', bn: 'জুতার ওপরের অংশ' },
      bags: { en: 'Bags', bn: 'ব্যাগ' },
    },
    sizing: {
      fiveSft: { en: '5 sft up all single/double butts', bn: 'সাইজ: ৫ এসএফটি আপ ডাবল বাট' },
      sevenSft: { en: '7 sft up', bn: 'সাইজ: ৭ এসএফটি আপ' },
      nineTenSft: { en: '9/10 sft up', bn: 'সাইজ: ৯/১০ এসএফটি আপ' },
      thickness11: { en: '1.1 mm up', bn: 'পুরুত্ব: ১.১ মিমি আপ' },
      thickness12: { en: '1.2 mm up', bn: 'পুরুত্ব: ১.২ মিমি আপ' },
      thickness14: { en: '1.4 mm up', bn: 'পুরুত্ব: ১.৪ মিমি আপ' },
      thickness16: { en: '1.6 mm up', bn: 'পুরুত্ব: ১.৬ মিমি আপ' },
    },
    qualityControl: {
      en: 'No Knife Cuts | No Attached Shoulder | No Holes | Well Trimmed | No Belly | No Mould | Very Smooth Fiber | No Vin Marks',
      bn: 'নাইফ কাট মুক্ত | আলাদা শোল্ডার বর্জিত | ছিদ্রহীন চামড়া | সুচারুভাবে ট্রিমকৃত | বেলি অংশ বর্জিত | ছত্রাক মুক্ত | অত্যন্ত মসৃণ ফাইবার | কোনো ভিন মার্ক নেই',
    }
  },
} as const;

/** Helper to extract the right language string from a {en, bn} pair */
export type LangKey = 'EN' | 'BN';
export const pick = (obj: { en: string; bn: string }, lang: LangKey) =>
  lang === 'EN' ? obj.en : obj.bn;
