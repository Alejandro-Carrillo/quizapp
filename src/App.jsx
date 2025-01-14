import Questions from "./Questions.js";
import "./index.css";
import { useState, useEffect } from "react";
import ImageQuestionContainer from "./components/ImageQuestionContainer/ImageQuestionContainer.jsx";
import OptionsContainer from "./components/OptionsContainer/OptionsContainer.jsx";
import Filled from "./components/Filled/Filled.jsx";
import CounterDown from "./components/CounterDown/CounterDown.jsx";
import Begin from "./components/Begin/Begin.jsx";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(true);
  const [remainingTime, setRemainingTime] = useState(0);
  const [circle, setCircle] = useState(false);
  const [isbegin, setIsBegin] = useState(false);

  const nextQuestion = (e) => {
    if (e === true) setScore(score + 1);

    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
      setCircle(false);
    }
  };
  /* --------------------------- */

  useEffect(() => {
    const caunter = setInterval(() => {
      if (remainingTime > 0) setRemainingTime((prev) => prev - 1);
      if (remainingTime === 0) {
        clearInterval(caunter);
        setIsFinished(true);
      }
    }, 1000);
    return () => clearInterval(caunter);
  }, [remainingTime]);

  /* --------------------------------- */
  const started = () => {
    setIsFinished(false);
    setRemainingTime(60);
    setCircle(true);
    setIsBegin(true);
  };
  /* --------------------------------- */
  return (
    <main className="app">
      {isFinished === true && <Filled score={score} />}
      {isbegin === false && <Begin start={started} />}
      <CounterDown circle={circle} Count={remainingTime} />
      <ImageQuestionContainer Dato={Questions[currentQuestion]} />
      <OptionsContainer
        Question={nextQuestion}
        Dato={Questions[currentQuestion]}
      />
      <a href="https:/carrillodev.com/" className="foot" target="__blank">
        Alejandro Carrillo | carrillodev.com
      </a>
    </main>
  );
}

export default App;
