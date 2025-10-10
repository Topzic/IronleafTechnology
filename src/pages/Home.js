import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import VeteranBadge from '../components/VeteranBadge';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <VeteranBadge />
    </div>
  );
};

export default Home;