import React, { createContext, useState } from "react";

// Data import

import COVID0905 from "../assets/data/COVID/COVID0905.json";
import dead from "../assets/data/COVID/COVID0905DeadAge.json";
import hosp from "../assets/data/COVID/COVID0905HospAge.json";
import rea from "../assets/data/COVID/COVID0905ReaAge.json";
import data from "../assets/data/COVID/COVIDNewCase1205.json";
import dataNat from "../assets/data/COVID/COVIDNewCaseNatio2105.json";
import C19USA from "../assets/data/COVID/owid/C19USACasesOverTime2205.json";
import C19FRA from "../assets/data/COVID/owid/C19FRACasesOverTime2205.json";
import C19SPA from "../assets/data/COVID/owid/C19SPACasesOverTime2205.json";
import C19GER from "../assets/data/COVID/owid/C19GERCasesOverTime2205.json";
import C19GBR from "../assets/data/COVID/owid/C19GBRCasesOverTime2205.json";
// console.log(C19GER);
console.log(C19FRA);

const dataUpdated = COVID0905;
const test = "test";
export const DataContext = createContext();

export const DataContextProvider = (props) => {
      const [datasReactVis, setDatasReactVis] = useState([
            data,
            dataNat,
            dataUpdated,
            dead,
            hosp,
            rea,
      ]);
      const [datasVX, setDatasVX] = useState([
            data,
            dataNat,
            dataUpdated,
            C19USA,
            C19FRA,
            C19SPA,

            // C19GER,
            // C19GBR,
      ]);

      return (
            <DataContext.Provider value={[datasReactVis, datasVX]}>
                  {props.children}
            </DataContext.Provider>
      );
};

export default DataContextProvider;
