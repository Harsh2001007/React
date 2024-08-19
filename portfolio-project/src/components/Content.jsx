import React from "react";
import avatarImg from "../assets/avatar.png";

export default function Content() {
  return (
    <div className="main-content-container">
      <div className="img-div">
        <img src={avatarImg} alt="my avatar" />
      </div>
      <div className="tagline-div">
        <p className="tagline">
          I do code and build mobile and web{" "}
          <span className="gradientText"> apps!</span>
        </p>
      </div>
      <div className="desc-div">
        <p className="desc-line">
          I am a seasoned frontend engineer with over 2 years of professional
          experience, specializing in React.js and React Native. My expertise
          lies in developing dynamic and user-friendly mobile and web
          applications, with a strong focus on creating cool and engaging UI
          designs.
        </p>
      </div>
    </div>
  );
}
