import React from "react";

import Header from '../components/Header';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Skill from '../components/Skill';
import About from '../components/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="pt-10">
      <Header/>
      <main className="content">
        <Hero />
        <Works />
        <Skill />
        <About />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
