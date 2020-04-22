import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
      const [data, setData] = useState({
            dataSelected: "hosp",
            dataKeyHosp: {
                  h: "hosph",
                  f: "hospf",
            },
            dataKeyRea: {
                  h: "reah",
                  f: "reaf",
            },
            dataKeyDead: {
                  h: "deadh",
                  f: "deadf",
            },
      });
      return (
            <DataContext.Provider value={[data, setData]}>
                  {props.children}
            </DataContext.Provider>
      );
};
