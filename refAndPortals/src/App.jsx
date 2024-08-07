import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not Easy"} targetTime={8} />
        <TimerChallenge title={"Getting Tough"} targetTime={11} />
        <TimerChallenge title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
