import React from "react";

const Heading = ({ children, level = 1 }) => {
  const Title = `h${level}`;
  return <Title>{children}</Title>;
};

export default Heading;
