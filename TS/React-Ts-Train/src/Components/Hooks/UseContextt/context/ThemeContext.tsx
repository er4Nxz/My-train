import React, { createContext, type PropsWithChildren } from "react";
import Themes from "./Thems";

export const MyContext = createContext(Themes);

const ThemesContext: React.FC<PropsWithChildren> = ({ children }) => {
  return <MyContext.Provider value={Themes}>{children}</MyContext.Provider>;
};
export default ThemesContext;
