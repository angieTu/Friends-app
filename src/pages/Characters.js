import React, { useContext } from "react";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";

import CardCharacter from '../components/CardCharacter';

import CharactersContext from "../context/CharactersContext";

const Characters = () => {
  const { characters } = useContext(CharactersContext);
  
  return (
    <Container className='characters-container'>
      {characters.map((character) => (
        <CardCharacter 
        img={character.image} 
        name={character.nameCharacter} 
        actor={character.name} 
        id={character._id} 
        key={character._id}/>
      ))}
    </Container>
  );
};

export default Characters;
