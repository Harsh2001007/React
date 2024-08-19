import React from "react";
import FoodAppLogo from "../assets/fooplazaLogo.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import expTracker from "../assets/expTracker.png";

export default function Projects() {
  return (
    <div className="projectMainContainer" id="projectId">
      <div className="projectHeaderDiv">
        <p className="projectText">PROJECTS</p>
      </div>
      <div className="projectCardDiv">
        <div
          className="projectCard"
          onClick={() =>
            window.open(
              "https://github.com/Harsh2001007/Food-Island-RN-Project.git",
              "_blank"
            )
          }
        >
          <div className="projectUpper">
            <img src={FoodAppLogo} alt="" className="foodLogoImg" />
          </div>
          <div className="projectLower">
            <div className="visit">
              <p className="visitText">click here to visit</p>
            </div>
            <div className="projectName">
              <p className="projectNameText">
                React Native - Food Delivery App{" "}
              </p>
              <p>
                <FaArrowUpRightFromSquare color="white" />
              </p>
            </div>
          </div>
        </div>
        <div
          className="projectCard"
          onClick={() =>
            window.open(
              "https://github.com/Harsh2001007/weekend-react-projects.git",
              "_blank"
            )
          }
        >
          <div className="projectUpper">
            <img src={expTracker} alt="" className="foodLogoImg" />
          </div>
          <div className="projectLower">
            <div className="visit">
              <p className="visitText">click here to visit</p>
            </div>
            <div className="projectName">
              <p className="projectNameText">React js - Expense Tracker </p>
              <p>
                <FaArrowUpRightFromSquare color="white" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
