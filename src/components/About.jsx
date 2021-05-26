import React from "react";

import Title from '../components/shared/Title';

const About = () => {
  return (
    <section className="py-20 bg-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-2 py-10">
        <Title>ABOUT</Title>
        <div className="flex flex-wrap max-w-4xl my-0 mx-auto">
          <p className="w-1/5 mr-9">
            <img className="rounded-full" src="/images/profile.jpg" alt="" />
          </p>
          <div className="flex-1">
            <p>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
