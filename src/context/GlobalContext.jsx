/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
} from 'react';
import useGlobal from '../hooks/useGlobal';

const globalContext = createContext();

export function GlobalProvider({ children }) {
  return (
    <globalContext.Provider value={{ ...useGlobal() }}>
      {children}
    </globalContext.Provider>
  );
}

export const useGlobalCtx = () => useContext(globalContext);
