// page.context.ts
import { createContext, useContext } from "react";
export interface NAMEState {
  isLoading: boolean;
}
export const NAMEContext = createContext<NAMEState>({} as any);

export const useNAME = () => useContext(NAMEContext);
