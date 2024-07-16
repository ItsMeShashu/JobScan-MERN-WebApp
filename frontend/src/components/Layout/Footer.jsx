/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Context } from "../..";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Shashwat Garg </div>
      <div>
        <Link
          to={"https://www.linkedin.com/in/shashwat-garg-9731a4281/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={""} target="_blank">
          <RiProfileFill />
        </Link>
        <Link to={"https://github.com/ItsMeShashu"} target="_blank">
          <FaGithub />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
