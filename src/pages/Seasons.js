import React, { useContext } from "react";

import Container from "../components/primitives/Container";

import SeasonsContext from "../context/SeasonsContext";

const Seasons = () => {
  const { seasons } = useContext(SeasonsContext);
  return (
    <Container className='seasons-container'>
      {seasons &&
        seasons.map((season) => (
          <Container>
            <h1>{season.number}</h1>
            <h2>{season.description}</h2>
          </Container>
        ))}
    </Container>
  );
};

export default Seasons;
