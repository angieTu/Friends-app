import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Image from "../components/primitives/Image";
import Link from '../components/primitives/Link';

import DataContext from "../context/DataContext";

const Home = () => {
  const { image } = useContext(DataContext);

  return (
    <Container className='home-container'>
      {/* <Heading className='home-title'>{name}</Heading> */}
      <Container className='images-container'>
      <Link href='https://api-friends.herokuapp.com/info' target='_blank'> 
        <Image className='image-cast' src={image} /> 
      </Link>
      </Container>
    </Container>
  );
};

export default Home;
