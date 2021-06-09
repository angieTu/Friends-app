import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";

import CharactersContext from "../context/CharactersContext";

const Characters = () => {
  const { characters } = useContext(CharactersContext);
  return (
    <Container>
      {characters.map((character) => (
        <Heading>{character.name}</Heading>
      ))}
    </Container>
  );
};

export default Characters;
