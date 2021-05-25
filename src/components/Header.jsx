import React from "react";

import HeaderItem from '../components/HeaderItem';

const headerItem = [
  {
    name: 'WORKS',
    link: '#works'
  },
  {
    name: 'SKILL',
    link: '#skill'
  },
  {
    name: 'ABOUT',
    link: '#link'
  }
];

const Header = () => {
  return (
    <header className="fixed -top-1 z-10 w-full bg-white shadow">
      <div className="flex items-center justify-between py-6 px-20">
        <h1 className="text-2xl font-bold leading-5 mr-20 text-blue-400">
          <a href=".">PPHOS</a>
        </h1>
        <nav>
          <ul className="flex justify-between">
            {
              headerItem.map((item, index) => {
                return (
                  <HeaderItem
                    key={index}
                    name={item.name}
                    link={item.link}
                  />
                );
              })
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
