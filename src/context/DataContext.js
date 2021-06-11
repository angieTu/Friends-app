import { useEffect, createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [firstDate, setFirstDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://api-friends.herokuapp.com/info");
      const data = await response.json();
      setFirstDate(data.data[0].firstDate);
      setLastDate(data.data[0].lastDate);
      setName(data.data[0].name);
      setLogo(data.data[0].logo);
      setImage(data.data[0].image)
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ firstDate, lastDate, name, logo, image }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
