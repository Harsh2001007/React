import { createContext } from "react";
import ChildA from "./components/ChildA";
import { useState } from "react";

const data = createContext();
const data2 = createContext();
const data3 = createContext();

function App() {
  const name = "harsh";
  const gender = "male";
  const [personality, setPersonality] = useState("silenced");
  return (
    <>
      <data2.Provider value={gender}>
        <data3.Provider value={{ per: personality, setter: setPersonality }}>
          <ChildA name={name} />
        </data3.Provider>
      </data2.Provider>
    </>
  );
}

export default App;
export { data2, data3 };
