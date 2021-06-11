import React from "react";

const Heading = ({ children, level = 1 , ...props}) => {
  const Title = `h${level}`;
  return <Title {...props}>{children}</Title>;
};

export default Heading;
