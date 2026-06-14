import { motion, type Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// Team members data
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Md. Moniruzzaman',
    role: 'Managing Director & CEO',
    description: 'Visionary leader with over 15 years of experience in real estate and hotel development, driving Shifa Properties Ltd Group to become Bangladesh\'s premier investment company.',
    avatar: 'https://ui-avatars.com/api/?name=Md+Moniruzzaman&background=1a237e&color=fff&size=160&bold=true',
  },
  {
    id: 2,
    name: 'Kazi Md. Zia Uddin',
    role: 'Chairman & Coordinator',
    description: 'Strategic chairman overseeing all major partnerships, including the landmark Best Western Plus hotel development collaboration.',
    avatar: 'https://ui-avatars.com/api/?name=Kazi+Zia&background=C9A84C&color=fff&size=160&bold=true',
  },
  {
    id: 3,
    name: 'Md. Mehedi Hasan Emon',
    role: 'Principal Advisor',
    description: 'Expert advisor specializing in investment strategy, legal compliance, and ensuring the highest standards of client service.',
    avatar: 'https://ui-avatars.com/api/?name=Mehedi+Emon&background=0288D1&color=fff&size=160&bold=true',
  },
  {
    id: 4,
    name: 'Abu Nasar Md. Badrul Alam',
    role: 'Senior Investment Advisor',
    description: 'Leading investor relations and share recuperation programs, building trust with thousands of Bangladeshi investors.',
    avatar: 'https://ui-avatars.com/api/?name=Abu+Nasar&background=1a237e&color=fff&size=160&bold=true',
  },
  {
    id: 5,
    name: 'Shihab Shariar Khan',
    role: 'Business Development Manager',
    description: 'Driving business partnerships and event management, connecting Shifa Properties Ltd with national and international stakeholders.',
    avatar: 'https://ui-avatars.com/api/?name=Shihab+Khan&background=C9A84C&color=fff&size=160&bold=true',
  },
  {
    id: 6,
    name: 'Mr. Abdul Mahbud Chowdhury',
    role: 'Strategic Coordinator',
    description: 'Ensuring seamless operations, hotel registration processes, and stakeholder coordination across all Shifa Properties Ltd projects.',
    avatar: 'https://ui-avatars.com/api/?name=Abdul+Chowdhury&background=0288D1&color=fff&size=160&bold=true',
  },
];

const TeamsSection: React.FC = () => {
  return (
    <div id="teams" className="gs-section py-20" style={{ background: 'linear-gradient(135deg,#e8f4fd 0%,#dbeeff 100%)' }}>
      <div className="gs-container">
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Our Teams</h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="section-subtitle mx-auto mt-4">
            Meet the dedicated professionals driving Shifa Properties Ltd Group's vision for world-class hospitality and investment excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              id={`team-member-${member.id}`}
              variants={fadeInUp}
              className="gs-card p-6 text-center hover:shadow-gold transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 shadow-lg transition-transform duration-300 group-hover:scale-105"
                  style={{ borderColor: '#C9A84C' }}
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white"
                  style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }} />
              </div>

              <h3 className="font-black text-base mb-1" style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}>
                {member.name}
              </h3>
              <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: '#C9A84C' }}>
                {member.role}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamsSection;
