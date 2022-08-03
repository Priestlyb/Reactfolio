import React from "react";
import "./nav.css";
import { FcHome } from "react-icons/fc";
import { RiMailAddLine } from "react-icons/ri";
import { MdStorage } from "react-icons/md"

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <FcHome className="icon active-nav" />
      </a>
      <a href="#members">
        <MdStorage className="icon" />
      </a>
      <a href="#contact">
        <RiMailAddLine className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
