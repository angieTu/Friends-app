import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Heading from '../components/primitives/Heading';

import SeasonsContext from "../context/SeasonsContext";

const Seasons = () => {
  const { seasons } = useContext(SeasonsContext);
  return (
    <Container className='seasons-container'>
      {seasons &&
        seasons.map((season) => (
          <Container>
            <Heading>{season.number}</Heading>
            <Heading>{season.description}</Heading>
            <Heading>{season.air_date}</Heading>
            <Heading>{season.last_air_date}</Heading>
            <Heading>{season.numberEpisodes}</Heading>
          </Container>
        ))}
    </Container>
  );
};

export default Seasons;
