import React from "react";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="experienceDiv">
      <div className="title">
        <p className="skillText">EXPERIENCE WITH</p>
      </div>
      <div className="expIcons">
        <FaJsSquare color="#C1C0C0" size={"42px"} />
        <FaReact color="#C1C0C0" size={"42px"} />
        <FaNode color="#C1C0C0" size={"55px"} />
        <FaHtml5 color="#C1C0C0" size={"42px"} />
        <FaCss3 color="#C1C0C0" size={"42px"} />
      </div>
    </div>
  );
}
