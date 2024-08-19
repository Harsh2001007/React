import React from "react";

export default function Buttons() {
  return (
    <div className="button-div-container">
      <div className="button-div">
        <button
          className="getintouchBtn"
          onClick={() => window.open("mailto:hs5686584@gmail.com", "_blank")}
        >
          Get In Touch
        </button>
        <button
          className="downloadcvBtn"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1TVJCNpjas6DmnhuMN-wwWOZzic98TBud/view?usp=drive_link"
            )
          }
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
