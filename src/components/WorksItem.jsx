import React from "react";

const WorksItem = ({ workImageUrl, workName, workInfo}) => {
  return (
    <a
      className="w-1/3 mb-10 text-gray-800 hover:opacity-80"
      href="works-template.html"
    >
      <p className="border border-solid border-gray-100">
        <img src={workImageUrl} alt="" />
      </p>
      <p className="text-sm font-bold mt-2">{workName}</p>
      <p className="text-xs">{workInfo}</p>
    </a>
  );
};

export default WorksItem;
