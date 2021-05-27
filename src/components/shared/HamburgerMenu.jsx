import React, { useState } from "react";

const StyledHambergerLine = ({ optionalClass }) => {
  return (
    <span className={`absolute left-0 w-full h-1 bg-blue-300 rounded block transition-all delay-500 box-border ${optionalClass}`}></span>
  );
};

const HamburgerMenu = () => {
  const [activeStyle1, setActiveStyle1 ] = useState('');
  const [activeStyle2, setActiveStyle2 ] = useState('');
  const [activeStyle3, setActiveStyle3 ] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () =>  {
    if (isActive) {
      setActiveStyle1('');
      setActiveStyle2('');
      setActiveStyle3('');
    } else {
      setActiveStyle1('transform translate-y-3 -rotate-45');
      setActiveStyle2('opacity-0');
      setActiveStyle3('transform -translate-y-3 rotate-45');
    }
    setIsActive((isActive) => !isActive);
  }

  return (
  <button className="relative w-8 h-8 cursor-pointer transition-all dalay-500 ease-in-out box-border focus:outline-none mt-1" onClick={handleOnClick}>
      <StyledHambergerLine optionalClass={`top-0 ${activeStyle1}`} />
      <StyledHambergerLine optionalClass={`top-3 ${activeStyle2}`} />
      <StyledHambergerLine optionalClass={`top-6 ${activeStyle3}`} />
    </button>
  );
};

export default HamburgerMenu;
