import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const startButtonHandler = () => {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimeStarted(true);
  };

  const stopButtonHandler = () => {
    clearTimeout(timer.current);
  };
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p style={{ color: "red" }}>You lost! </p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={timeStarted ? stopButtonHandler : startButtonHandler}
          >
            {timeStarted ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : "undefined"}>
          {timeStarted ? "Timer is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
