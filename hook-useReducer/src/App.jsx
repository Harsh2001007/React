import { useReducer, useState } from "react";
import Todo from "./components/Todo";

const initialState = 5;

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
};

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrease
        </button>
      </div>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default App;
