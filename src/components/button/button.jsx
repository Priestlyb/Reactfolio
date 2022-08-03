import React from 'react';
import "./button.css";
import img from '../props/myResume.pdf';
import { TiSocialYoutube } from "react-icons/ti";
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Buttons() {
  return (
  <>
  <div className="button">

  <a href="http://linkedin.com/in/priestly-bassey-486278175" target="blank">
    <FaLinkedinIn className="social" />
  </a>
  
  <a href="https://github.com/Priestlyb" target="blank">
    <FaGithub className="social" />
  </a>

  <a href="https://twitter.com/priestlythedon" target="blank">
    <AiOutlineTwitter className="social" />
  </a>

  <a href="https://youtube.com/channel/UCdtPtJHab4H3WTnxjr0p1KQ" target='blank'>
          <TiSocialYoutube className="social" />
        </a>

  {/* <a href="'https://docs.google.com/forms/d/e/1FAIpQLSdtJC13gzCH93hCCMt5uDIp4gINm8HtG55YHZE1Bg7zP-HK8g/viewform?usp=sf_link" target="blank">
    <AiOutlineMail className="social" />
  </a> */}

<a href={img} download='Priestly`s Developer Resume'><button className='cv' type='submit'>Developer_Resume</button></a>

</div>

</>
  );
}

export default Buttons;
