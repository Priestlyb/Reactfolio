import React from 'react';
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";
import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <div className="social-links">

        <a href="http://linkedin.com/in/priestly-bassey-486278175" target='blank'>
          <AiOutlineLinkedin className="social" />
        </a>
        
        <a href="https://www.instagram.com/gemini_loner" target='blank'>
          <BsInstagram className="social" />
        </a>

        <a href="https://youtube.com/channel/UCdtPtJHab4H3WTnxjr0p1KQ" target='blank'>
          <TiSocialYoutube className="social" />
        </a>

        {/* <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FI3EBUW5ENSN3E1&e=ATO8xQ3qwVPe5PKbyVmc0rnkM9PlEs5ki1ir6VM6rPOH6ndPY8k-I_bVFLHIDhCtBn9FKS8mFa-OVZ0cGE1b4iw&s=1" target='blank'>
          <AiOutlineWhatsApp className="social" />
        </a> */}
        <a href="https://twitter.com/priestlythedon" target='blank'>
          <AiOutlineTwitter className="social" />
        </a>

      </div>
    </div>
  );
}
export default Footer;
