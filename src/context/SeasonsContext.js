import { useEffect, useState, createContext } from "react";

const SeasonsContext = createContext();

const SeasonsProvider = ({ children }) => {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    const getSeasons = async () => {
      const response = await fetch("https://api-friends.herokuapp.com/seasons");
      const data = await response.json();
      setSeasons(data.data);
    };
    getSeasons();
  }, []);

  return (
    <SeasonsContext.Provider value={{ seasons }}>
      {children}
    </SeasonsContext.Provider>
  );
};

export default SeasonsContext;
export { SeasonsProvider };
