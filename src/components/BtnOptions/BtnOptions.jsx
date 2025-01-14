import React from "react";
import "./BtnOptions.css";

const BtnOptions = ({ Question, Dato }) => {
  const validation = (key) => {
    Dato.isCorrect
      ? key.target.classList.add("correct")
      : key.target.classList.add("inCorrect");
    setTimeout(() => {
      Question(Dato.isCorrect);
    }, "500");
  };
  return (
    <button className="btn-options" onClick={validation}>
      {Dato.respuesta}
    </button>
  );
};

export default BtnOptions;
