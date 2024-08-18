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
          I do code and make content{" "}
          <span className="gradientText">about it!</span>
        </p>
      </div>
      <div className="desc-div">
        <p className="desc-line">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </div>
    </div>
  );
}
