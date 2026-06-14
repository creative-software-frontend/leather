import React from 'react';
import TeamsSection from '../components/sections/TeamsSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';

const TeamPage: React.FC = () => {
  return (
    <PageTransition id="team-page">
      <main className="pt-24 bg-slate-50">
        <PageHero
          title="OUR TEAM"
          subtitle="Meet the leaders behind Shifa Properties Ltd Group"
          imageSrc={heroImg}
        />
        <TeamsSection />
      </main>
    </PageTransition>
  );
};

export default TeamPage;
