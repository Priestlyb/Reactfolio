import "./contact.css";
import React, { useState } from 'react';
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_bassey', 'template_bassey', form.current, 'user_Kr7iGuivtEP0uR57DsGBa')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
        <div id="contact" className="container wrapper">
          <h1 className="c-title">Contact</h1>
          <h1 className="c-sub">CONNECT WITH ME</h1>
          <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder='Name'
                name='user_name'
              /> <b/>
              <input
                type="text"
                placeholder='Subject'
                name='user_subject'
              /> <b/>
              <input
                type="text"
                placeholder='Email'
                name='user_email'
              />
              <textarea rows="5" placeholder='Message' name='message'/>
              <button>Send <RiMailSendLine className='ion' /></button>
              {done && "Sent Successful... 24hrs to reply, if Urgent, Contact me on my Socials"}
          </form>
          <p className="c-desc">
            <strong>What’s your story?</strong> Get in touch. Programming is like sex:
One mistake and you have to support it for the rest of your life.
          </p>
          </div>
  );
}

export default Contact;
