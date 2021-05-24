import React from "react";

import Title from '../components/shared/Title'
import SkillItem from '../components/SkillItem';

const skillItem = [
  {
    imageUrl: "/images/icon_skill.png",
    name: "HTML5/CSS3",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
  {
    imageUrl: "/images/icon_skill.png",
    name: "WordPress",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
  {
    imageUrl: "/images/icon_skill.png",
    name: "JavaScript",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
  {
    imageUrl: "/images/icon_skill.png",
    name: "Photoshop",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
  {
    imageUrl: "/images/icon_skill.png",
    name: "Illustrator",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
  {
    imageUrl: "/images/icon_skill.png",
    name: "XD",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。"
  },
];

const Skill = () => {
  return (
    <section className="py-20" id="skill">
      <div className="max-w-7xl my-0 mx-auto py-3 px-2">
        <Title>SKILL</Title>
        <div className="flex flex-wrap -mb-5">
          {
            skillItem.map((item, index) => {
              return (
                <SkillItem
                  key={index}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  text={item.text}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;
