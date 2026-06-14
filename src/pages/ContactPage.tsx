import React from 'react';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ContactPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <PageTransition id="contact-page">
      <main style={{ background: '#120800' }}>
        <PageHero
          title="CONTACT US"
          subtitle={lang === 'EN' ? 'Get in touch with Leather Export House' : 'লেদার এক্সপোর্ট হাউসের সাথে যোগাযোগ করুন'}
          imageSrc={heroImg}
        />

        <div className="gs-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── Left: Contact Info ── */}
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
                  {lang === 'EN' ? 'Reach Us' : 'আমাদের খুঁজুন'}
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {lang === 'EN' ? "Let's Work Together" : 'একসাথে কাজ করি'}
                </h2>
                <div className="w-16 h-1 rounded-full bg-primary-rust mb-6" />
                <p className="text-gray-400 leading-relaxed">
                  {lang === 'EN'
                    ? 'We supply premium leather to global buyers. Send us your inquiry and our team will respond within 24 hours.'
                    : 'আমরা বিশ্বের ক্রেতাদের কাছে প্রিমিয়াম চামড়া সরবরাহ করি। আপনার অনুসন্ধান পাঠান, আমাদের দল ২৪ ঘণ্টার মধ্যে সাড়া দেবে।'}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: lang === 'EN' ? 'Mailing Address' : 'ঠিকানা',
                    value: '18/4,A Tallabagh, Tannery mor, Dhaka-1209, Bangladesh',
                    href: 'https://maps.google.com/?q=Tallabagh+Tannery+mor+Dhaka',
                    highlight: false,
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: lang === 'EN' ? 'Phone' : 'ফোন',
                    value: '+8801818592500',
                    href: 'tel:+8801818592500',
                    highlight: true,
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: lang === 'EN' ? 'Email' : 'ইমেইল',
                    value: 'leh.taher@gmail.com',
                    href: 'mailto:leh.taher@gmail.com',
                    highlight: false,
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: lang === 'EN' ? 'Official Email' : 'অফিসিয়াল ইমেইল',
                    value: 'info@lehbd.com',
                    href: 'mailto:info@lehbd.com',
                    highlight: false,
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: lang === 'EN' ? 'Office Hours' : 'অফিস সময়',
                    value: lang === 'EN' ? 'Sat – Thu: 9AM – 6PM (GMT+6)' : 'শনি – বৃহ: সকাল ৯টা – সন্ধ্যা ৬টা',
                    href: undefined,
                    highlight: false,
                  },
                ].map((item, i) => {
                  const Wrapper = item.href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={i}
                      {...(item.href ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                      className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-300 group
                        ${item.highlight
                          ? 'border-primary-rust/40 hover:border-primary-rust/70'
                          : 'border-white/10 hover:border-primary-rust/30'}`}
                      style={{ background: item.highlight ? 'rgba(176,90,40,0.10)' : 'rgba(255,255,255,0.03)' }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-primary-rust-light"
                        style={{ background: 'rgba(176,90,40,0.15)', border: '1px solid rgba(176,90,40,0.25)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-0.5">{item.label}</p>
                        <p className={`text-sm font-medium ${item.highlight ? 'text-white' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
                          {item.value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-white/10 mt-4" style={{ height: '200px' }}>
                <iframe
                  title="LEH Location"
                  src="https://maps.google.com/maps?q=Tallabagh,Tannery+mor,Dhaka,Bangladesh&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* ── Right: Message Form ── */}
            <motion.div
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/10"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {lang === 'EN' ? 'Send a Price Request' : 'মূল্য অনুরোধ পাঠান'}
              </h3>
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); alert(lang === 'EN' ? 'Message sent! We will contact you soon.' : 'বার্তা পাঠানো হয়েছে!'); }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'contact-name', label: lang === 'EN' ? 'Full Name' : 'পুরো নাম', type: 'text', placeholder: lang === 'EN' ? 'Your name' : 'আপনার নাম' },
                    { id: 'contact-company', label: lang === 'EN' ? 'Company' : 'কোম্পানি', type: 'text', placeholder: lang === 'EN' ? 'Company name' : 'কোম্পানির নাম' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder} required
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                      />
                    </div>
                  ))}
                </div>

                {[
                  { id: 'contact-email', label: lang === 'EN' ? 'Email' : 'ইমেইল', type: 'email', placeholder: 'your@email.com' },
                  { id: 'contact-phone', label: lang === 'EN' ? 'Phone / WhatsApp' : 'ফোন / হোয়াটসঅ্যাপ', type: 'tel', placeholder: '+880...' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="contact-product" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Product Interest' : 'পণ্যের আগ্রহ'}
                  </label>
                  <select id="contact-product"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                    style={{ background: 'rgba(30,15,5,0.95)', border: '1px solid rgba(176,90,40,0.2)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                  >
                    <option value="">{lang === 'EN' ? 'Select product...' : 'পণ্য বাছুন...'}</option>
                    <option value="wet-blue">Wet Blue Splits</option>
                    <option value="cow-crust">Cow Crust Leather</option>
                    <option value="goat-crust">Goat Crust Leather</option>
                    <option value="finish">Finish Leather</option>
                    <option value="shoe">Shoe Section</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Message / Specifications' : 'বার্তা / স্পেসিফিকেশন'}
                  </label>
                  <textarea id="contact-message" rows={4} placeholder={lang === 'EN' ? 'Describe your requirements, quantity, thickness, etc.' : 'আপনার প্রয়োজনীয়তা, পরিমাণ, পুরুত্ব ইত্যাদি বর্ণনা করুন।'}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                  />
                </div>

                <button type="submit" id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust-light))', boxShadow: '0 4px 20px var(--color-primary-rust-glow)' }}>
                  <Send className="w-4 h-4" />
                  {lang === 'EN' ? 'Send Price Request' : 'মূল্য অনুরোধ পাঠান'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ContactPage;
