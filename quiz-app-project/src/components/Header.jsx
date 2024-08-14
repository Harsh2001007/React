import React from "react";
import headerImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <>
      <header>
        <img src={headerImg} alt="quiz app image" />
        <h1>React quiz</h1>
      </header>
    </>
  );
}
