import { createContext, useContext } from 'react';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const CLIENT_ID = '388302183915-q8n5dqvqo6ogsqcd9es6aa7tsf3d2ldd.apps.googleusercontent.com';

  return (
    <ConfigContext.Provider value={{ CLIENT_ID }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const { CLIENT_ID } = useContext(ConfigContext);
  return { CLIENT_ID };
};
