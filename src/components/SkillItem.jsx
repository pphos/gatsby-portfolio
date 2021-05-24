import React from "react";

const SkillItem = ({ imageUrl, name, text }) => {
  return (
    <div className="flex flex-start justify-between w-1/2 mb-10">
      <p className="w-16 h-auto mr-5">
        <img src={imageUrl} alt="" />
      </p>
      <div className="flex-1 mr-8">
        <h3 className="mb-1">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SkillItem;
