import React from 'react';

import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Skill from '../components/Skill';

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
