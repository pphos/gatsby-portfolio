import React from "react";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold leading-none mb-10 text-center tracking-wider text-blue-500">
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
