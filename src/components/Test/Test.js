import React, { useState, useContext } from "react";

import { DataContext } from "../../context/DataContext";

export default function Test() {
      const [data, setData] = useState({
            dataSelected: "rea",
      });
      const { dataSelected } = data;
      let dataKeyHosp = {
            h: "hosph",
            f: "hospf",
      };
      let dataKeyRea = {
            h: "reah",
            f: "reaf",
      };
      let dataKeyDead = {
            h: "deadh",
            f: "deadf",
      };

      const dataKeySelected =
            dataSelected === "hosp"
                  ? dataKeyHosp
                  : dataSelected === "rea"
                  ? dataKeyRea
                  : dataKeyDead;

      console.log(data);

      console.log(dataKeySelected);

      // switch (dataSelected) {
      //       case "category1":
      //             option = "option1";
      //             return;
      //       case "category2":
      //             option = "option2";
      //             return;
      //       case "category3":
      //             option = "option3";
      //             return;
      // }
      return (
            <div>
                  <select
                        onChange={(event) => {
                              setData({
                                    dataSelected: event.target.value,
                              });
                        }}
                  >
                        <option value="hosp">hospitalisés</option>
                        <option value="rea">réanimation</option>
                        <option value="dead">décès</option>
                  </select>
                  <div>TEST IN PROGRESS</div>
            </div>
      );
}
