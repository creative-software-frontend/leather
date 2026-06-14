import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';

const ContactPage: React.FC = () => {
  return (
    <PageTransition id="contact-page">
      <main className="pt-24 bg-slate-50">
        <PageHero
          title="CONTACT US"
          subtitle="Get in touch with Shifa Properties Ltd Group"
          imageSrc={heroImg}
        />
        <div className="py-12">
          <ContactSection />
        </div>
      </main>
    </PageTransition>
  );
};

export default ContactPage;
