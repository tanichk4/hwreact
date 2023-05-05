import { useEffect, useState, createContext } from "react";

const BASE_URL = "https://my.api.mockaroo.com/cards/123.json?key=778301b0";

export const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((res) => {
        setData([res]);
        setUsers([...users, data]);
      });
    console.log(users);
    console.log(data);
  }, []);

  return (
    <CardsContext.Provider value={{ data }}>{children}</CardsContext.Provider>
  );
};

export default CardsProvider;
