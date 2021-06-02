import React from 'react';

import About from '../components/sections/About';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Works from '../components/sections/Works';
import Skill from '../components/sections/Skill';

const Home: React.VFC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <About />
      <Skill />
    </>
  );
};

export default Home;
