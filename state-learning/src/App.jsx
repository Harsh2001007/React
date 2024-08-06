import { useState } from "react";
import ParentOne from "./components/ParentOne";

function App() {
  const [stateFromChild, setStateFromChild] = useState("");

  function handleNameChange(name) {
    setStateFromChild(name);
  }

  return (
    <>
      <h1>Bye world</h1>
      <p>{stateFromChild}</p>
      <ParentOne onNameChange={handleNameChange} />
    </>
  );
}

export default App;
