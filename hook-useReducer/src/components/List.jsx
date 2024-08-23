import React from "react";

export default function List({ todos, setToDos }) {
  return (
    <>
      {todos.map((item) => (
        <li key={item.id}>
          {item.taskName}
          <button
            onClick={() => setToDos({ type: "DELETE_TASK", payload: item.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
}
