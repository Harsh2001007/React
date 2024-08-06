import React from "react";
import { useState } from "react";

export default function ParentOne({ onNameChange }) {
  const [name, setName] = useState("");

  function nameStateHandler() {
    setName("harsh");
    onNameChange("harsh");
  }

  console.log(name);
  return (
    <div>
      <h1>i am parent 1</h1>
      <button onClick={nameStateHandler}>click to add name</button>
    </div>
  );
}
