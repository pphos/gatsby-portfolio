import React from 'react';
import Helmet from 'react-helmet';

import About from '../components/sections/About';
import Header from '../components/sections/Header';
import Hero from '../components/sections/Hero';
import Works from '../components/sections/Works';
import Skill from '../components/sections/Skill';
import { PortfolioContext } from '../context';
import {
  metaData,
  headerData,
  heroData,
  worksData,
  aboutData,
  skillData,
} from '../data';

export default () => {
  const { title, lang, description } = metaData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Portfolio Site'}</title>
        <html lang={lang || 'ja'} />
        <meta name="description" content={description || 'Portfolio Site'} />
      </Helmet>
      <PortfolioContext.Provider
        value={{ headerData, heroData, worksData, aboutData, skillData }}
      >
        <Header />
        <Hero />
        <Works />
        <About />
        <Skill />
      </PortfolioContext.Provider>
    </>
  );
};
