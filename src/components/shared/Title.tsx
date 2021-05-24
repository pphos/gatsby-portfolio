import React from "react";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <h2 className="text-4xl font-bold leading-none mb-10 text-center tracking-wider text-gray-800">
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
