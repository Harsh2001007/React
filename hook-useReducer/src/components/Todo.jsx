import React, { useReducer } from "react";
import List from "./List";

const initialState = [{ id: 1, taskName: "playing fifa" }];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, taskName: action.payload }];
    case "DELETE_TASK":
      return state.filter((d) => d.id !== action.payload);

    case "RESET":
      return initialState;
  }
};

export default function Todo() {
  const [todos, setToDos] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Todo App {todos.length}</h1>
      <div>Todo item :</div>
      <div>
        <button onClick={() => setToDos({ type: "RESET" })}>Reset all</button>
      </div>
      <input
        type="text"
        onBlur={(e) => setToDos({ type: "ADD_TASK", payload: e.target.value })}
      />
      <List todos={todos} setToDos={setToDos} />
    </div>
  );
}
