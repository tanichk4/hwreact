import { createContext, useState, useEffect } from 'react';
const url = 'https://my.api.mockaroo.com/cards/123.json?key=778301b0'
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
      console.log({data})
      console.log(data.data)
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
