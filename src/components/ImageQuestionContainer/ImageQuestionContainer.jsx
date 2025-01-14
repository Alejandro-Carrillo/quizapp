import React from "react";
import "./ImageQuestionContainer.css";

const ImageQuestionContainer = ({ Dato }) => {
  return (
    <div className="image-question-container">
      <img className="img-quiz" src={Dato.imagen} alt="Imagen" />
      <h2 className="title-ask">{Dato.pregunta}</h2>
    </div>
  );
};

export default ImageQuestionContainer;
