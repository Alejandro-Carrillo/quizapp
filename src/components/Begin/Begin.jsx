import React from "react";
import "./Begin.css";

const Begin = ({ start }) => {
  return (
    <div className="bigin ">
      <div className="window-bigin ">
        <h2 className="title-bigin">Quiz app</h2>
        <div className="title-window-bigin ">
          Tienes 1 minuto para responder 10 preguntas sobre el universo
        </div>
        <button onClick={start} className="btn-window-bigin ">
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Begin;
