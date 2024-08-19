import { useState } from "react";

export default function Header() {
  return (
    <header id="home">
      <div className="header-left">
        <h2>Harsh Sachan</h2>
      </div>
      <div className="header-right">
        <div className="header-link-container">
          <a href="#home">Home</a>
          <a href="#projectId">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact-id">Contact</a>
        </div>
      </div>
    </header>
  );
}
