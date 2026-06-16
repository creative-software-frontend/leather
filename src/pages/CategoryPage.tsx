import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Import background images
import bgWetBlue from '../assets/image/Wet-Blue-Splits-h-product1.jpg';
import bgCowCrust from '../assets/image/cow-crust222.jpg';
import bgGoatCrust from '../assets/image/raw-selection.jpg';
import bgFinish from '../assets/image/finish-h-product1.jpg';

interface HideSpecification {
  size: string;
  thickness: string;
}

interface SubsetCut {
  id: string;
  nameEN: string;
  nameBN: string;
  specifications: HideSpecification[];
  applicationsEN: string[];
  applicationsBN: string[];
  qualitiesEN: string[];
  qualitiesBN: string[];
}

interface CategoryData {
  slug: string;
  titleEN: string;
  titleBN: string;
  bgImage: string;
  subsets: SubsetCut[];
}

const CATEGORY_REGISTRY: Record<string, CategoryData> = {
  'wet-blue-splits': {
    slug: 'wet-blue-splits',
    titleEN: 'Wet Blue Splits',
    titleBN: 'ওয়েট ব্লু স্প্লিটস',
    bgImage: bgWetBlue,
    subsets: [
      {
        id: 'single-butt',
        nameEN: 'SINGLE BUTT',
        nameBN: 'সিঙ্গেল বাট',
        specifications: [
          { size: '5 sft up all single butt', thickness: '1.2 mm up' },
          { size: '7 sft up all single butt', thickness: '1.4 mm up' },
          { size: '9 sft up all single butt', thickness: '1.6 mm up' }
        ],
        applicationsEN: ['Belt', 'Gloves', 'PU Coating', 'Inner Lining', 'Aprons', 'Boots'],
        applicationsBN: ['বেল্ট', 'গ্লাভস', 'পিইউ কোটিং', 'ইনার লাইনিং', 'অ্যাপ্রন', 'বুট'],
        qualitiesEN: ['No Knife Cuts', 'No Attached Shoulder', 'No Holes', 'Well Trimmed', 'No Belly'],
        qualitiesBN: ['ছুরি কাটার দাগ মুক্ত', 'আলাদা শোল্ডার বিহীন', 'ছিদ্র মুক্ত', 'সুচারুভাবে ট্রিমকৃত', 'বেলি মুক্ত']
      },
      {
        id: 'double-butt',
        nameEN: 'DOUBLE BUTT',
        nameBN: 'ডাবল বাট',
        specifications: [
          { size: '5 sft up all double butts', thickness: '1.1 mm up' },
          { size: '7 sft up all double butts', thickness: '1.2 mm up' },
          { size: '10 sft up all double butts', thickness: '1.4 mm up' }
        ],
        applicationsEN: ['Suede', 'Gloves', 'PU Coating', 'Inner Lining', 'Steering Wheels', 'Wallets'],
        applicationsBN: ['সুয়েড', 'গ্লাভস', 'পিইউ কোটিং', 'ইনার লাইনিং', 'স্টিয়ারিং হুইল', 'ওয়ালেট'],
        qualitiesEN: ['No vein marks', 'No knife cuts', 'No holes', 'Well trimmed', 'Very smooth fiber'],
        qualitiesBN: ['রগের দাগ মুক্ত', 'ছুরি কাটার দাগ মুক্ত', 'ছিদ্র মুক্ত', 'সুচারুভাবে ট্রিমকৃত', 'অত্যন্ত মসৃণ ফাইবার']
      }
    ]
  },
  'cow-crust-leather': {
    slug: 'cow-crust-leather',
    titleEN: 'Cow Crust Leather',
    titleBN: 'কাউ ক্রাস্ট লেদার',
    bgImage: bgCowCrust,
    subsets: [
      {
        id: 'full-chrome',
        nameEN: 'FULL CHROME COW CRUST',
        nameBN: 'ফুল ক্রোম কাউ ক্রাস্ট',
        specifications: [
          { size: '12 sft up avg', thickness: '1.1 - 1.3 mm' },
          { size: '15 sft up avg', thickness: '1.3 - 1.5 mm' }
        ],
        applicationsEN: ['Premium Shoe Uppers', 'Wallets', 'Luxury Leather Goods'],
        applicationsBN: ['প্রিমিয়াম জুতার আপার', 'ওয়ালেট', 'বিলাসবহুল চামড়াজাত পণ্য'],
        qualitiesEN: ['Excellent Tight Grain', 'Flat Setti', 'No Deep Parasite Defects'],
        qualitiesBN: ['চমৎকার টাইট গ্রেইন', 'ফ্ল্যাট সেটি', 'গভীর পরজীবী ত্রুটি মুক্ত']
      }
    ]
  },
  'goat-crust-leather': {
    slug: 'goat-crust-leather',
    titleEN: 'Goat Crust Leather',
    titleBN: 'গোট ক্রাস্ট লেদার',
    bgImage: bgGoatCrust,
    subsets: [
      {
        id: 'goat-crust-prime',
        nameEN: 'CHROME TANNED GOAT CRUST',
        nameBN: 'ক্রোম ট্যানড গোট ক্রাস্ট',
        specifications: [
          { size: '3 - 5 sft avg', thickness: '0.7 - 0.9 mm' },
          { size: '4 - 6 sft avg', thickness: '0.8 - 1.0 mm' }
        ],
        applicationsEN: ['Fine Lining', 'Ladies Gloves', 'Soft Dress Shoes'],
        applicationsBN: ['ফাইন লাইনিং', 'লেডিস গ্লাভস', 'নরম ড্রেস শু'],
        qualitiesEN: ['High Tensile Strength', 'Uniform Grain Texture', 'No Knife Openings'],
        qualitiesBN: ['উচ্চ প্রসার্য শক্তি', 'অভিন্ন গ্রেইন টেক্সচার', 'মুক্ত ছুরি কাটা বিহীন']
      }
    ]
  },
  'finish-leather': {
    slug: 'finish-leather',
    titleEN: 'Finish Leather',
    titleBN: 'ফিনিশড লেদার',
    bgImage: bgFinish,
    subsets: [
      {
        id: 'aniline-finish',
        nameEN: 'PREMIUM FINISHED HIDES',
        nameBN: 'প্রিমিয়াম ফিনিশড হাইডস',
        specifications: [
          { size: '12 sft up standard layout', thickness: '1.2 - 1.4 mm' },
          { size: '16 sft up large dimensions', thickness: '1.4 - 1.6 mm' }
        ],
        applicationsEN: ['Upholstery', 'Heavy Jackets', 'Luxury Luggage Cases'],
        applicationsBN: ['আসবাবপত্রের কভার', 'ভারী জ্যাকেট', 'লাক্সারি লাগেজ কেস'],
        qualitiesEN: ['Water Repellent Coating', 'Rub Fastness Approved', 'Flawless Pigment Coverage'],
        qualitiesBN: ['পানি প্রতিরোধী কোটিং', 'ঘর্ষণ স্থায়িত্ব অনুমোদিত', 'নিখুঁত পিগমেন্ট কভারেজ']
      }
    ]
  }
};

const CategoryPage: React.FC = () => {
  const { lang } = useLanguage();
  const location = useLocation();
  const [category, setCategory] = useState<CategoryData | null>(null);

  useEffect(() => {
    const slug = location.pathname.split('/').pop() || '';
    if (CATEGORY_REGISTRY[slug]) {
      setCategory(CATEGORY_REGISTRY[slug]);
    }
  }, [location.pathname]);

  if (!category) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#120800] pt-24">
        <p className="font-mono text-sm tracking-widest text-primary-rust-light uppercase">Category Matrix Standby</p>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-screen pt-16 bg-cover bg-fixed bg-center relative"
      style={{ backgroundImage: `url(${category.bgImage})` }}
    >
      {/* Global dark translucent overlay for the entire page */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-[4px]" />

      <div className="relative z-10">
        {/* SECTION A: IMMERSIVE HEADER BANNER */}
        <section
          className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center border-b border-white/5"
        >

          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-mono text-3xl md:text-6xl font-bold tracking-widest uppercase filter drop-shadow-md"
            >
              {lang === 'EN' ? category.titleEN : category.titleBN}
            </motion.h1>
            <div className="w-24 h-1 bg-primary-rust mx-auto mt-6 rounded-full" />
          </div>
        </section>

        {/* TECHNICAL METRICS INTERSECTION LOOP */}
        {category.subsets.map((subset) => (
          <div key={subset.id} className="w-full relative">
            {/* Subtle background glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary-rust/5 rounded-full blur-[100px] pointer-events-none" />

            {/* SECTION B: SUBSECTION DIVISION RIBBON */}
            <section className="py-16 border-b border-white/5 flex flex-col items-center justify-center px-4 relative z-10">
              <div className="badge-modern-primary text-xs md:text-sm px-6 py-2.5 shadow-lg mb-8 uppercase tracking-widest">
                {lang === 'EN' ? subset.nameEN : subset.nameBN}
              </div>

              {/* Outlined Structural Graph Area */}
              <div className="w-full max-w-4xl border border-dashed border-primary-rust/30 bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <span className="font-mono text-[10px] text-primary-rust-light tracking-widest uppercase block mb-2">
                  Yield Layout Frame Blueprint
                </span>
                <h3 className="text-white font-sans font-extrabold text-xl md:text-2xl tracking-wide uppercase border-b border-white/10 pb-3 inline-block">
                  {lang === 'EN' ? `${subset.nameEN} CUT MAP` : `${subset.nameBN} লেআউট ম্যাপ`}
                </h3>
              </div>
            </section>

            {/* SECTION C: FINE-GRAIN SPECIFICATIONS PANEL */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">

                {/* Left Column: Structural Sizing Types Matrix */}
                <div className="bg-white/5 border-r border-white/10 text-white p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-[10px] tracking-widest uppercase text-primary-rust-light mb-6 border-b border-white/10 pb-2">
                      {lang === 'EN' ? '01 // Dimensional Metrics' : '০১ // পরিমাপের ম্যাট্রিক্স'}
                    </h4>
                    <div className="space-y-6">
                      {subset.specifications.map((spec, sIdx) => (
                        <div key={sIdx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                          <span className="block font-mono text-[10px] tracking-wider text-gray-500 uppercase">Grade Registry 0{sIdx + 1}</span>
                          <p className="text-xl font-bold tracking-wide font-sans capitalize mt-1 text-white">{spec.size}</p>
                          <span className="inline-block mt-2 font-mono text-[10px] uppercase tracking-wider bg-primary-rust/20 border border-primary-rust/30 text-primary-rust-light px-2.5 py-1 rounded">
                            {lang === 'EN' ? `Thickness Limit: ${spec.thickness}` : `পুরুত্ব সীমা: ${spec.thickness}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-gray-600 mt-8 tracking-widest uppercase">LEH System Matrix Approved</div>
                </div>

                {/* Right Column: Applications & Structural Guarantees */}
                <div className="p-8 md:p-12 flex flex-col justify-between text-white">
                  <div className="space-y-10">
                    {/* Scope Matrices */}
                    <div>
                      <h4 className="font-mono text-[10px] tracking-widest text-primary-rust-light uppercase mb-5 border-b border-white/10 pb-2">
                        {lang === 'EN' ? '02 // Target Industrial Sectors' : '০২ // লক্ষ্যযুক্ত শিল্পখাত'}
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {(lang === 'EN' ? subset.applicationsEN : subset.applicationsBN).map((app, aIdx) => (
                          <span key={aIdx} className="bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold tracking-wide font-sans px-3 py-1.5 rounded uppercase">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Operational Quality Assurances */}
                    <div>
                      <h4 className="font-mono text-[10px] tracking-widest text-primary-rust-light uppercase mb-5 border-b border-white/10 pb-2">
                        {lang === 'EN' ? '03 // Compliance Benchmarks' : '০৩ // কমপ্লায়েন্স বেঞ্চমার্ক'}
                      </h4>
                      <ul className="space-y-3">
                        {(lang === 'EN' ? subset.qualitiesEN : subset.qualitiesBN).map((qual, qIdx) => (
                          <li key={qIdx} className="flex items-center text-sm font-medium text-gray-400">
                            <span className="h-2 w-2 bg-primary-rust rounded-full mr-3 shrink-0 shadow-[0_0_8px_var(--color-primary-rust)]" />
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-gray-600 mt-8 tracking-widest uppercase">European Standard Framework Compliant</div>
                </div>

              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
