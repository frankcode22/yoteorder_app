
import { createContext, useState, useEffect } from 'react';



const ReferenceDataContext = createContext({});

const ReferenceDataContextProvider = ({ children }) => {

    const [unicornTypes, setUnicornTypes] = useState([]);
    
  return (
    <ReferenceDataContext.Provider value={{ unicornTypes, setUnicornTypes }}>
      {children}
    </ReferenceDataContext.Provider>
  );
};

export {ReferenceDataContext, ReferenceDataContextProvider};