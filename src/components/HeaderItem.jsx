import React from "react";

const HeaderItem = ({ name, link}) => {
  return (
    <li>
      <a
        className="group relative text-sm text-blue-500 inline-block py-1 px-0 transition-width delay-300 tracking-wider mr-4"
        href={link}
      >
        {name}
        <span
          className="absolute bottom-0 left-1/2 w-0 h-1 transition-width delay-300 transform -translate-x-1/2 bg-blue-400 group-hover:w-full"
          aria-hidden="true"
        ></span>
      </a>
    </li>
  );
};

export default HeaderItem;
