import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  function inputHandler(identifier, newValue) {
    setUserInput((previnput) => {
      return {
        ...previnput,
        [identifier]: +newValue,
      };
    });
  }

  const isValidData = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput inputHandler={inputHandler} userInput={userInput} />
      {isValidData ? (
        <Result results={userInput} />
      ) : (
        <p className="center">Please enter duration more than 0</p>
      )}
    </>
  );
}

export default App;
