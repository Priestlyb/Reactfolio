/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './home.css';
import img from '../props/me.jpg';
import Buttons from '../button/button';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <img src={img} alt='' />
      </div>

      <div className='intro'>
          <h1>Who I Am</h1>
          <p>// Priestly Patrick Bassey is a designer <strong>WHO CODES</strong>
          </p>
          <p>
            I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive front-end web applications while learning back-end technologies. I have always had a knack for technology and working with computers since childhood. In 2019 I started working with HTML & CSS to make some minor edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.
          </p>
          <p>
            I started learning javascript and was even more enthused with making websites interactive. I then started freelancing for e-commerce companies on the Shopify platform. I am now spending my time building projects with React JS, Netlify, and learning new technologies.
          </p>
          <p>
            Keep Exploring.
          </p>
      </div>
    
      <Buttons />
    </div>
  );
}

export default Home;
