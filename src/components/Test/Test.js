import React, { useState, useContext } from "react";

import { DataContext } from "../../context/DataContext";

export default function Test() {
      // Managing data display
      const [data] = useContext(DataContext);
      let { dataSelected, dataKeyHosp, dataKeyRea, dataKeyDead } = data;
      let dataKeySelected;

      console.log(dataSelected);
      console.log(dataKeyHosp);
      console.log(dataKeyRea);
      // let dataToDisplay;
      switch (dataSelected) {
            case "hosp":
                  dataKeySelected = dataKeyHosp;
                  // dataToDisplay = dataHospDec;
                  return;
            case "rea":
                  dataKeySelected = dataKeyRea;
                  // dataToDisplay = dataReaDec;

                  return;
            case "hosp":
                  dataKeySelected = dataKeyDead;
                  // dataToDisplay = dataDeadDec;

                  return;
      }
      console.log(dataKeySelected);

      return <div></div>;
}
