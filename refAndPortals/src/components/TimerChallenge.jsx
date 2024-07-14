import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const startButtonHandler = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  const stopButtonHandler = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timerIsActive ? stopButtonHandler : startButtonHandler}
          >
            {timerIsActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : "undefined"}>
          {timerIsActive ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
