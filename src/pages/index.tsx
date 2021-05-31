import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Works from '../components/Works';

const Home: React.VFC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Works />
    </>
  );
};

export default Home;
