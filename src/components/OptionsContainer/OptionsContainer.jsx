import React from "react";
import BtnOptions from "../BtnOptions/BtnOptions";
import "./OptionsContainer.css";

const OptionsContainer = ({ Question, Dato }) => {
  return (
    <div className="options-container">
      {Dato.respuestas.map((resp) => {
        return (
          <BtnOptions Question={Question} key={resp.respuesta} Dato={resp} />
        );
      })}
    </div>
  );
};

export default OptionsContainer;
