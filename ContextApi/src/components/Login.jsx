import React from "react";
import { useState, useContext } from "react";
import GlobalDemoContext from "../context/DemoContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const { setUser } = useContext(GlobalDemoContext);

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassWord(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={handleUserName}
        value={username}
      />
      <input
        type="text"
        placeholder="username"
        onChange={handlePassword}
        value={password}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
