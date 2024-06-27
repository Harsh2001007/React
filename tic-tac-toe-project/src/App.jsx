import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"player 1"} playerSymbol={"x"} />
          <Player initialName={"player 2"} playerSymbol={"o"} />
        </ol>
      </div>
      Log
    </main>
  );
}

export default App;
