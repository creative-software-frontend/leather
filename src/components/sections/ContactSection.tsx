import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import officeImg from '../../assets/image/bd4d72ea-ec2b-405e-b8e7-d09eb87cf0bd.jfif';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const OFFICES = [
  { name: 'Corporate Head Office', address: '47, Nassa Heights, Gulshan South Avenue, Gulshan-1, Dhaka.', email: 'sales@shifapropertiesltd.com.bd', cell: '01877715333', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Shifa+Properties+Ltd+Group+Gulshan+Dhaka', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.546!2d90.4125!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'Mohakhali DOHS Office', address: 'Plot-39B (1st Floor), Road-29, New DOHS Mohakhali, Dhaka', email: 'sales@shifapropertiesltd.com.bd', cell: '01222845560', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Mohakhali+DOHS+Dhaka', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.2!2d90.4005!3d23.7966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzQ3LjciTiA5MMKwMjQnMS44IkU!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'Uttara Office', address: '2nd & 3rd Floor, House 18 & 20, Road 6/C, ACM & MF Tower, Dhaka 1230', email: 'sales@shifapropertiesltd.com.bd', cell: '01894944666', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Shifa+Properties+Ltd+Group+Uttara+Dhaka', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5!2d90.3997!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMyLjkiTiA5MMKwMjMnNTguNiJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'Chittagong Khulshi Office', address: 'Tahrub Tower, South Khulshi, Chittagong.', email: 'sales@shifapropertiesltd.com.bd', cell: '01894944683', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Khulshi+Chittagong', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.7!2d91.8065!3d22.3718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIyJzE4LjUiTiA5McKwNDgnMjMuNCJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'Dubai Office', address: 'Bur Juman Business Tower, Sheikh Zayed St, Dubai', email: 'info@shifapropertiesltd.com.bd', cell: '88029881929', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Bur+Juman+Business+Tower+Dubai', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2!2d55.3047!3d25.2527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzA5LjciTiA5NcKwMTgnMTYuOSJF!5e0!3m2!1sen!2sae!4v1' },
  { name: 'Dhanmondi Office', address: 'Khan ABC Tradeplex, House#37 Road#02, Dhaka 1209', email: 'sales@shifapropertiesltd.com.bd', cell: '01990786666', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Dhanmondi+Dhaka', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7!2d90.3738!3d23.7461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ0JzQ4LjAiTiA5MMKwMjInMjYuNiJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'OCDL Office', address: 'Nefi Tower 53, Gulshan South Avenue, Gulshan-1, Dhaka-1212.', email: 'info@ocdlbd.com', cell: '01701216500', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=Gulshan+South+Avenue+Dhaka', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5!2d90.4145!3d23.7932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM1LjUiTiA5MMKwMjQnNTIuMiJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'Chittagong Agrabad Office', address: '102/3, World Trade Center, Agrabad C/A, Agrabad-4100, Chittagong.', email: 'sales@shifapropertiesltd.com.bd', cell: '01896006190', hotline: '+8809610066666', mapUrl: 'https://maps.google.com/?q=World+Trade+Center+Agrabad+Chittagong', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.2!2d91.8215!3d22.3297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE5JzQ3LjAiTiA5McKwNDknMTcuNCJF!5e0!3m2!1sen!2sbd!4v1' },
  { name: 'USA Office', address: '37-39, 77th Street, 3rd Floor, Jackson Heights, NY 11372, USA.', email: 'sales@shifapropertiesltd.com.bd', cell: '+16466680041', hotline: '+16466680041', mapUrl: 'https://maps.google.com/?q=Jackson+Heights+New+York', mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8!2d-73.8836!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTMnMDAuOSJX!5e0!3m2!1sen!2sus!4v1' },
];

const INTEREST_VALUES = [
  'Hotel Suite Investment',
  'Padma Grand Hotel booking',
  'Land Purchases OCDL',
  'Careers',
  'General Query',
];

const ContactSection: React.FC = () => {
  const { lang } = useLanguage();
  const c = UI.contact;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: 'Hotel Suite Investment', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'Hotel Suite Investment', message: '' });
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="overflow-hidden">

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{ background: '#e8f4fd' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-black tracking-tighter leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(80px, 18vw, 220px)', color: 'rgba(26,35,126,0.08)', fontFamily: 'Playfair Display, serif' }}>
            {pick(c.watermark, lang)}
          </span>
        </div>
        <div className="absolute inset-0">
          <img src={officeImg} alt="Shifa Properties Ltd Office" className="w-full h-full object-cover opacity-15" />
        </div>

        <div className="relative z-10 py-16 px-4 flex flex-col items-center">
          <motion.div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 w-full max-w-2xl border border-sky-100"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <h2 className="text-center font-black text-2xl mb-1" style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}>
              {pick(c.title, lang)}
            </h2>
            <p className="text-center text-gray-500 text-sm mb-8">{pick(c.subtitle, lang)}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">📞</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800">{pick(c.callUs, lang)}</p>
                  <p className="text-gray-500 text-xs">01877715333</p>
                </div>
                <a href="tel:01877715333" className="text-white text-xs font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ background: '#1a237e' }}>
                  {pick(c.callBtn, lang)}
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl flex-shrink-0">✉️</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800">{pick(c.email, lang)}</p>
                  <p className="text-gray-500 text-xs truncate">info@shifapropertiesltdgroup.com</p>
                </div>
                <a href="mailto:info@shifapropertiesltdgroup.com" className="text-white text-xs font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ background: '#1a237e' }}>
                  {pick(c.emailBtn, lang)}
                </a>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl flex-shrink-0">💬</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800 whitespace-nowrap">{pick(c.whatsapp, lang)}</p>
                  <p className="text-gray-500 text-xs">01877715333</p>
                </div>
                <a href="https://wa.me/8801877715333" target="_blank" rel="noopener noreferrer"
                  className="text-white text-xs font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ background: '#25D366' }}>
                  {pick(c.waBtn, lang)}
                </a>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl flex-shrink-0">💼</div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800">{pick(c.career, lang)}</p>
                  <p className="text-gray-500 text-xs truncate">career@shifapropertiesltdgroup.com</p>
                </div>
                <a href="mailto:career@shifapropertiesltdgroup.com" className="text-white text-xs font-bold px-4 py-2 rounded-full flex-shrink-0" style={{ background: '#1a237e' }}>
                  {pick(c.emailBtn, lang)}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── OFFICE LOCATIONS ── */}
      <div className="py-16 px-4" style={{ background: '#e8f4fd' }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-center font-black text-2xl md:text-3xl mb-12"
            style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            {pick(c.officesTitle, lang)}
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            {OFFICES.map((office) => (
              <motion.div key={office.name} variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow border border-sky-100 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-40 bg-sky-50 overflow-hidden">
                  <iframe src={office.mapEmbed} width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title={office.name} className="w-full h-full" />
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-white text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1"
                    style={{ color: '#1a237e' }}>
                    {pick(c.mapsLink, lang)}
                  </a>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-sm text-center mb-4 uppercase tracking-wide" style={{ color: '#1a237e' }}>{office.name}</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-16 flex-shrink-0">{pick(c.addressLabel, lang)}</span>
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-16 flex-shrink-0">{pick(c.emailLabel, lang)}</span>
                      <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline truncate">{office.email}</a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-16 flex-shrink-0">{pick(c.cellLabel, lang)}</span>
                      <a href={`tel:${office.cell}`} className="text-gray-700 hover:text-blue-600">{office.cell}</a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-400 w-16 flex-shrink-0">{pick(c.hotlineLabel, lang)}</span>
                      <a href={`tel:${office.hotline}`} className="text-gray-700 hover:text-blue-600">{office.hotline}</a>
                    </div>
                  </div>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-5 block w-full text-center text-sm font-bold py-2 rounded-full border-2 border-[#1a237e] text-[#1a237e] bg-transparent hover:bg-[#1a237e] hover:text-white transition-all duration-200">
                    {pick(c.viewMap, lang)}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── INQUIRY FORM ── */}
      <div className="py-16 px-4 bg-white border-t border-sky-100">
        <div className="max-w-4xl mx-auto">
          <motion.div className="bg-sky-50/50 rounded-3xl p-8 md:p-12 border border-sky-100 shadow-sm relative overflow-hidden"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-200/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-center font-black text-2xl md:text-3xl mb-2" style={{ color: '#1a237e', fontFamily: 'Playfair Display, serif' }}>
                {pick(c.formTitle, lang)}
              </h2>
              <p className="text-center text-gray-500 text-sm mb-10 max-w-lg mx-auto">{pick(c.formSubtitle, lang)}</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4 text-green-600">✓</div>
                  <h3 className="font-extrabold text-xl mb-2" style={{ color: '#1a237e' }}>{pick(c.thankYou, lang)}</h3>
                  <p className="text-gray-600 text-sm max-w-sm">{pick(c.thankYouMsg, lang)}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a237e]">{pick(c.nameLabel, lang)}</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange}
                        placeholder={pick(c.namePlaceholder, lang)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a237e]">{pick(c.phoneLabel, lang)}</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange}
                        placeholder={pick(c.phonePlaceholder, lang)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a237e]">{pick(c.emailInputLabel, lang)}</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange}
                        placeholder={pick(c.emailPlaceholder, lang)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a237e]">{pick(c.interestLabel, lang)}</label>
                      <select name="subject" value={formData.subject} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23C9A84C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>")`, backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', backgroundSize: '16px' }}>
                        {c.interests.map((item, i) => (
                          <option key={i} value={INTEREST_VALUES[i]}>{pick(item, lang)}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#1a237e]">{pick(c.msgLabel, lang)}</label>
                      <textarea name="message" required rows={1} value={formData.message} onChange={handleInputChange}
                        placeholder={pick(c.msgPlaceholder, lang)}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-y min-h-[46px]" />
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button type="submit" className="btn-gold px-12 py-3.5 text-sm font-bold shadow-md hover:shadow-lg transition-all">
                      {pick(c.sendBtn, lang)}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;