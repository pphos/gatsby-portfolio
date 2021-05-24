import React from "react";

const Header = () => {
  return (
    <header className="fixed -top-1 z-10 w-full bg-white shadow">
    <div className="flex items-center justify-between py-6 px-20">
        <h1 className="text-2xl font-bold leading-5 mr-20">
          <a href=".">PPHOS</a>
        </h1>
        <nav>
          <ul className="flex justify-between">
            <li>
              <a className="group relative text-sm inline-block py-1 px-0 transition-width delay-300 tracking-wider mr-4" href="#works">
                WORKS
                <span className="absolute bottom-0 left-1/2 w-0 h-1 transition-width delay-300 transform -translate-x-1/2 bg-gray-500 group-hover:w-full" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a className="group relative text-sm inline-block py-1 px-0 delay-300 tracking-wider mr-4"href="#skill">
                SKILL
                <span className="absolute bottom-0 left-1/2 w-0 h-1 transition-width delay-300 transform -translate-x-1/2 bg-gray-500 group-hover:w-full" aria-hidden="true"></span>
              </a>
            </li>
            <li>
              <a className="group relative text-sm inline-block py-1 px-0 delay-300 tracking-wider" href="#about">
                ABOUT
                <span className="absolute bottom-0 left-1/2 w-0 h-1 transition-width delay-300 transform -translate-x-1/2 bg-gray-500 group-hover:w-full" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
