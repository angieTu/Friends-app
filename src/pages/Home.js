import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";
import Button from "../components/primitives/Button";
import Image from "../components/primitives/Image";

import DataContext from "../context/DataContext";

const Home = () => {
  const { name, logo } = useContext(DataContext);

  return (
    <Container>
      <Heading>{name}</Heading>
      <Image src={logo}></Image>
    </Container>
  );
};

export default Home;
