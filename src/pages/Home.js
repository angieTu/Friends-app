import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";
import Image from "../components/primitives/Image";

import DataContext from "../context/DataContext";

const Home = () => {
  const { image } = useContext(DataContext);

  return (
    <Container className='home-container'>
      {/* <Heading className='home-title'>{name}</Heading> */}
      <Container className='images-container'>
        <Image className='image-cast' src={image} />
      </Container>
    </Container>
  );
};

export default Home;
