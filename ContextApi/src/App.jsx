import { useState } from "react";
import "./App.css";
import DemoContextProvider from "./context/DemoContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <DemoContextProvider>
      <h1>Bye World!</h1>
      <Login />
      <Profile />
    </DemoContextProvider>
  );
}

export default App;
