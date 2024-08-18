import React, { useState } from "react";

export default function InputContainer({ btnMethod, onStateChange }) {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value);
    onStateChange(e.target.value);
  }
  return (
    <>
      <div>InputContainer</div>
      <div>
        <input type="text" onChange={handleInput} value={text} />
        <button onClick={btnMethod}>click me to save!</button>
      </div>
    </>
  );
}
