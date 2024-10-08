import React from "react";

export default function Experience() {
  return (
    <div className="expDiv" id="experience">
      <div>
        <p className="expText">EXPERIENCE</p>
      </div>
      <div className="expCard">
        <div className="expCardTop">
          <div className="companyLogo">
            <img
              src="https://media.licdn.com/dms/image/D560BAQEQcnsvGYY7_Q/company-logo_200_200/0/1721651671864/university_living_logo?e=2147483647&v=beta&t=ffr_nhNjcHq-25YnEeOZzn46pWIxeSIqA7Hzzck-x18"
              alt=""
              className="companyLogoImg"
            />
          </div>
          <div className="roleTitle">
            <p className="roleTitleText">
              Software Engineer at University Living Pvt Ltd.
            </p>
          </div>
          <div className="roleDuration">
            <p className="roleDurationText">Oct 2022 - Present</p>
          </div>
        </div>
        <div className="expCardBottom">
          <p className="companyExpDesc">
            As a software engineer specializing in frontend development, I have
            expertise in React and React Native, creating responsive and
            user-friendly web applications and mobile apps. My strong
            proficiency in JavaScript, HTML, and CSS enables me to build
            scalable and efficient solutions. I have successfully developed and
            implemented various mobile app modules for my company, demonstrating
            my ability to deliver high-quality software that meets business
            needs.
          </p>
        </div>
      </div>
      <div className="expCard">
        <div className="expCardTop2">
          <div className="companyLogo">
            <img
              src="https://w7.pngwing.com/pngs/368/622/png-transparent-hitachi-hd-logo.png"
              alt=""
              className="companyLogoImg"
            />
          </div>
          <div className="roleTitle">
            <p className="roleTitleText">
              Software Engineer Trainee at Hitachi Systems.
            </p>
          </div>
          <div className="roleDuration">
            <p className="roleDurationText">April 2022 - October 2022</p>
          </div>
        </div>
        <div className="expCardBottom">
          <p className="companyExpDesc">
            As a Software Engineer Trainee with a focus on frontend development,
            I am building my expertise in React and React Native, working on
            projects that involve creating intuitive web applications and mobile
            apps. My growing proficiency in JavaScript, HTML, and CSS allows me
            to contribute effectively to development tasks. I have had the
            opportunity to develop and assist in creating various mobile app
            modules, gaining valuable experience in real-world software
            development.
          </p>
        </div>
      </div>
    </div>
  );
}
