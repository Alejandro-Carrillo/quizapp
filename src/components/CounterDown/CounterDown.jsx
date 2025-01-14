import React, { useEffect } from "react";
import "./CounterDown.css";

const CounterDown = ({ circle, Count }) => {
  useEffect(() => {
    let as = document.querySelector(".bar-count-down");
    circle ? as.classList.add("css-carga") : as.classList.remove("css-carga");
  }, [circle]);

  return (
    <div className="box-graphic-count-down">
      <span className="number-count-down">{Count}</span>
      <svg className="img-count-down">
        <circle className="bar-count-down" r="17" cx="50%" cy="50%"></circle>
      </svg>
    </div>
  );
};

export default CounterDown;
