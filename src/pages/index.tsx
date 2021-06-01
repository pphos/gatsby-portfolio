import React from 'react';

import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Works from '../components/Works';

const Home: React.VFC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <About />
    </>
  );
};

export default Home;
