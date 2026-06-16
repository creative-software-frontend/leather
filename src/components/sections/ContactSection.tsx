import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const ContactSection: React.FC = () => {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20" style={{ background: '#120800' }}>
      <div className="gs-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ── Left: Contact Info ── */}
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-primary-rust-light">
                {lang === 'EN' ? 'Global Contact Terminal' : 'গ্লোবাল কন্টাক্ট টার্মিনাল'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {lang === 'EN' ? "Direct Price Request" : 'সরাসরি মূল্য অনুরোধ'}
              </h2>
              <div className="w-16 h-1 rounded-full bg-primary-rust mb-6" />
              <p className="text-gray-400 leading-relaxed text-lg">
                {lang === 'EN'
                  ? 'Connect with our global sales team to inquire about our Wet Blue Splits, Cow Crust, Goat Crust, and Finishing Leather availability.'
                  : 'আমাদের গ্লোবাল সেলস টিমের সাথে যোগাযোগ করুন এবং আমাদের ওয়েট ব্লু স্প্লিটস, কাউ ক্রাস্ট, গোট ক্রাস্ট এবং ফিনিশিং লেদার সম্পর্কে জানুন।'}
              </p>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-sm font-bold text-white mb-2">{lang === 'EN' ? 'Headquarters' : 'সদর দপ্তর'}</p>
                <p className="text-gray-400 text-sm">18/4,A Tallabagh<br/>Tannery mor<br/>Dhaka-1209, Bangladesh</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <p className="text-sm font-bold text-white mb-2">{lang === 'EN' ? 'Direct Line' : 'সরাসরি লাইন'}</p>
                <p className="text-primary-rust-light text-lg font-bold mb-1">+8801818592500</p>
                <p className="text-gray-500 text-xs">leh.taher@gmail.com<br/>info@lehbd.com</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Message Form ── */}
          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ background: 'rgba(176,90,40,0.1)' }} />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
              {lang === 'EN' ? 'Send an Inquiry' : 'অনুসন্ধান পাঠান'}
            </h3>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 text-white" style={{ background: 'var(--color-primary-rust)' }}>✓</div>
                <h3 className="font-bold text-xl mb-2 text-white">{lang === 'EN' ? 'Request Sent!' : 'অনুরোধ পাঠানো হয়েছে!'}</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  {lang === 'EN' ? 'Our export team will contact you within 24 hours.' : 'আমাদের এক্সপোর্ট টিম ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করবে।'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {lang === 'EN' ? 'Full Name' : 'পুরো নাম'}
                    </label>
                    <input type="text" placeholder={lang === 'EN' ? 'Your name' : 'আপনার নাম'} required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {lang === 'EN' ? 'Company' : 'কোম্পানি'}
                    </label>
                    <input type="text" placeholder={lang === 'EN' ? 'Company name' : 'কোম্পানির নাম'} required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {lang === 'EN' ? 'Email Address' : 'ইমেইল'}
                    </label>
                    <input type="email" placeholder="your@email.com" required
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {lang === 'EN' ? 'Product Interest' : 'পণ্যের আগ্রহ'}
                    </label>
                    <select
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    {lang === 'EN' ? 'Message / Specifications' : 'বার্তা / স্পেসিফিকেশন'}
                  </label>
                  <textarea rows={3} placeholder={lang === 'EN' ? 'Describe your requirements, quantity, thickness, etc.' : 'আপনার প্রয়োজনীয়তা, পরিমাণ, পুরুত্ব ইত্যাদি বর্ণনা করুন।'} required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(176,90,40,0.2)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(176,90,40,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(176,90,40,0.2)'}
                  />
                </div>

                <button type="submit"
                  className="w-full mt-2 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary-rust-dark), var(--color-primary-rust-light))', boxShadow: '0 4px 20px rgba(176,90,40,0.3)' }}>
                  <Send className="w-4 h-4" />
                  {lang === 'EN' ? 'Submit Inquiry' : 'অনুসন্ধান জমা দিন'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;