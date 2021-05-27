import React from "react";

import HamburgerMenu from "./shared/HamburgerMenu";
import HeaderItem from "../components/HeaderItem";

const headerItem = [
  {
    name: "WORKS",
    link: "#works",
  },
  {
    name: "SKILL",
    link: "#skill",
  },
  {
    name: "ABOUT",
    link: "#link",
  },
];

const Header = () => {
  return (
    <header className="fixed -top-1 z-10 w-full bg-white shadow py-6">
      <div className="flex items-center justify-between px-20">
        <h1 className="text-2xl font-bold leading-5 mr-20 text-blue-400">
          <a href=".">PPHOS</a>
        </h1>
        <HamburgerMenu />
        <nav>
          <ul className="flex">
            {headerItem.map((item, index) => {
              return (
                <HeaderItem key={index} name={item.name} link={item.link} />
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
