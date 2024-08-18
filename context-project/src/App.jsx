import { useState } from "react";
import InputContainer from "./components/InputContainer";
import RenderDiv from "./components/RenderDiv";
import { GlobalContext } from "./context/context";

function App() {
  const [parent, setParent] = useState("");
  const [testParent, setTestParent] = useState("");

  function handleLift(value) {
    setParent(value);
  }

  function buttonClick() {
    setTestParent(parent);
  }

  return (
    <>
      <GlobalContext.Provider value={{ testParent, setTestParent }}>
        <div>bye world</div>
        {testParent}
        <InputContainer btnMethod={buttonClick} onStateChange={handleLift} />
        <RenderDiv />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
