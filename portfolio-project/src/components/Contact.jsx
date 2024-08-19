import React from "react";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contactMainContainer" id="contact-id">
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
          <a
            href="https://www.linkedin.com/in/harsh-sachan-8222b5214/"
            target="_blank"
          >
            <CiLinkedin size={"30px"} color="white" />
          </a>
          <a href="https://x.com/noob_code007" target="_blank">
            <FaXTwitter size={"30px"} color="white" />
          </a>
          <a href="https://github.com/Harsh2001007" target="_blank">
            <FaGithub size={"30px"} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}
