import React from 'react';
import './header.css';
import { SiBattledotnet } from "react-icons/si";

function Header() {
  return (
    <div id='home' className='container header-container'>
      <h2>LET'S BUILD SOMETHING TOGETHER</h2>
      <h3>
      Hi, I'm <span> Priestly</span>
      </h3>
      <h3>
        A Front-End Web Developer
        <span><SiBattledotnet className="icons"/></span>
      </h3>
    </div>
  );
}
export default Header;
