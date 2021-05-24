import React from "react";

import Title from '../components/shared/Title';
import WorksItem from '../components/WorksItem';

const worksItem = [
  {
    imageUrl: "/images/works-sample-thumb.jpg",
    name: "作品名が入る",
    info: "Design / Coding(Responsive) / WordPress"
  },
  {
    imageUrl: "/images/works-dummy-thumb.jpg",
    name: "作品名が入る",
    info: "Design / Coding(Responsive) / WordPress"
  },
  {
    imageUrl: "/images/works-dummy-thumb.jpg",
    name: "作品名が入る",
    info: "Design / Coding(Responsive) / WordPress"
  },
  {
    imageUrl: "/images/works-dummy-thumb.jpg",
    name: "作品名が入る",
    info: "Design / Coding(Responsive) / WordPress"
  },
  {
    imageUrl: "/images/works-dummy-thumb.jpg",
    name: "作品名が入る",
    info: "Design / Coding(Responsive) / WordPress"
  },
]

const Works = () => {
  return (
    <section className="py-20 bg-gray-100" id="works">
      <div className="max-w-7xl my-0 mx-auto py-0 px-2">
        <Title>WORKS</Title>
        <div className="flex flex-wrap -mb-5">
          { worksItem.map((item, index) => {
            return (
              <WorksItem
                key={index}
                workImageUrl={item.imageUrl}
                workName={item.name}
                workInfo={item.info}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
