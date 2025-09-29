import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Matches from '@/components/Matches';
import Players from '@/components/Players';
import Statistics from '@/components/Statistics';
import News from '@/components/News';
import FanZone from '@/components/FanZone';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Matches />
            <Players />
          </>
        );
      case 'matches':
        return <Matches />;
      case 'players':
        return <Players />;
      case 'stats':
        return <Statistics />;
      case 'news':
        return <News />;
      case 'fanzone':
        return <FanZone />;
      default:
        return (
          <>
            <Hero />
            <Matches />
            <Players />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;