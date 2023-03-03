import React from "react";
import "./Socialsbar.scss";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { line } from "../../../assets";

const Socialsbar = () => {
  return (
    <>
      <div className="sidebar-container-left">
        <div className="sidebar-container-left-content">
          <DiGithubFull className="git" />
          <FaLinkedin className="linkedin" />
          <FaTwitter className="twiter" />
          <img src={line} alt="Line" className="line" />
        </div>
      </div>
      <div className="sidebar-container-right">
        <div className="sidebar-container-right-content">
          <p>Imranahmad.com</p>
          <img src={line} alt="Line" className="line" />
        </div>
      </div>
    </>
  );
};

export default Socialsbar;
