import { createContext, useContext } from "react";

export const NAMEContext = createContext<NAMEState>({});

export const useNAME = () => useContext(NAMEContext);
