import React from "react";
import "./Filled.css";

const Overlay = ({ score }) => {
  const again = () => {
    window.location.reload();
  };

  let text = "";
  if (score <= 5) {
    text = "Lo siento";
  } else if (score >= 6 && score <= 9) {
    text = "Buen trabajo";
  } else {
    text = "Exelente !!!";
  }

  return (
    <div className="filled">
      <div className="window">
        <div className="title-window">Acertaste {score} de 10</div>
        <img className="img-result" src={"./img/" + text + ".png"} alt="" />
        <h2 className="text-result">{text}</h2>
        <button className="btn-window" onClick={again}>
          Volver a jugar
        </button>
      </div>
    </div>
  );
};

export default Overlay;
