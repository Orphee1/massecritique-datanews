import React from "react";

export default function CustomToolTip(props) {
      return (
            <div className="custom-tooltip">
                  <p style={{ fontWeight: "bold" }}>
                        {props.type} par tranches d'âge:{" "}
                  </p>
                  <p>0 à 9 ans: {props.value9}</p>
                  <p>10 à 19 ans: {props.value19}</p>
                  <p>20 à 29 ans: {props.value29}</p>
                  <p>30 à 39 ans: {props.value39}</p>
                  <p>40 à 49 ans: {props.value49}</p>
                  <p>50 à 59 ans: {props.value59}</p>
                  <p>60 à 69 ans: {props.value69}</p>
                  <p>70 à 79 ans: {props.value79}</p>
                  <p>80 à 89 ans: {props.value89}</p>
                  <p>plus de 90 ans: {props.value90}</p>
                  <p className="label">Total : {props.total} </p>
            </div>
      );
}
