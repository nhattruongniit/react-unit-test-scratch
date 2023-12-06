import React, { createContext, PropsWithChildren, useContext } from "react";

// mock data
import { dataMe } from "../mocks/dataMe";

type AppContextType = {
  me: any;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  // states
  const me = dataMe;

  return (
    <AppContext.Provider
      value={{
        me,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
