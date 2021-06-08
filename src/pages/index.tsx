import React from 'react';

import About from '../components/sections/About';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Works from '../components/sections/Works';
import Skill from '../components/sections/Skill';
import { PortfolioContext } from '../context';
import { headerData, heroData, worksData, aboutData, skillData } from '../data';

export default () => {
  return (
    <PortfolioContext.Provider
      value={{ headerData, heroData, worksData, aboutData, skillData }}
    >
      <Header />
      <Hero />
      <Works />
      <About />
      <Skill />
    </PortfolioContext.Provider>
  );
};
