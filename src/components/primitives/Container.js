import React from "react";

const Container = ({ as = "div", children }) => {
  const Component = as;
  return <Component>{children}</Component>;
};

export default Container;
