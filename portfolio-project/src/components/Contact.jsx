import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contactMainContainer">
      <div className="subContactContainer">
        <div className="contactTitle">
          <p className="contactTitleText">Contact</p>
        </div>
        <div className="contactDesc">
          <p className="contactDescText">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies{" "}
          </p>
        </div>
        <div className="contactEmail">
          <MdOutlineAttachEmail />
          <p className="contactEmailText">hs5686584@gmail.com</p>
        </div>
        <div className="contactIcons">
          <a href="#">
            <CiLinkedin size={"30px"} color="white" />
          </a>
          <a href="#">
            <FaXTwitter size={"30px"} color="white" />
          </a>
          <a href="#">
            <FaGithub size={"30px"} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
