import React, { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, taskName: action.payload }];
    case "DELETE_TASK":
      return state.filter((d) => d.id !== action.payload);
  }
};

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Todo App {todos.length}</h1>
      <div>Todo item :</div>
      <input
        type="text"
        onBlur={(e) => dispatch({ type: "ADD_TASK", payload: e.target.value })}
      />
      {todos.map((item) => (
        <li key={item.id}>
          {item.taskName}
          <button
            onClick={() => dispatch({ type: "DELETE_TASK", payload: item.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}
