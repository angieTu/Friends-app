import { createContext, useState, useEffect } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        "https://api-friends.herokuapp.com/characters?limit=15"
      );
      const data = await response.json();
      setCharacters(data.data);
    };
    getCharacters();
  }, []);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContext;
export { CharactersProvider };
