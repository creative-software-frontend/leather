import React from 'react';
import TeamsSection from '../components/sections/TeamsSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/about.jpg';

const TeamPage: React.FC = () => {
  return (
    <PageTransition id="team-page">
      <main className="pt-24 bg-slate-50">
        <PageHero
          title="OUR TEAM"
          subtitle="Meet the leaders behind Leather Export House"
          imageSrc={heroImg}
        />
        <TeamsSection />
      </main>
    </PageTransition>
  );
};

export default TeamPage;
