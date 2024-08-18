import { useState } from "react";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <h2>Harsh Sachan</h2>
      </div>
      <div className="header-right">
        <div className="header-link-container">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </header>
  );
}
