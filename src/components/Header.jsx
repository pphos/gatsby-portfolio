import React from "react";

const Header = () => {
  return (
    <header className="fixed top-1 z-1 w-full bg-white shadow">
      <div className="inner">
        <h1 className="header-logo">
          <a href=".">PPHOS</a>
        </h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a href="#works">WORKS</a>
            </li>
            <li className="header-nav-item">
              <a href="#skill">SKILL</a>
            </li>
            <li className="header-nav-item">
              <a href="#about">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
