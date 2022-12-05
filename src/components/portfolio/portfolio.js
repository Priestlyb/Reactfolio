import "./portfolio.css";
import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="members" className="container members-container">
      <p className="sub">DEVELOPER PROJECTS</p>
      <h1 className="member-txt">What I've Built</h1>

<div className="member member-1">

  <div className="member-img">
    <img className="img" src="https://i.pinimg.com/564x/e1/8e/f3/e18ef37979fff32826c87c1cbaa3e823.jpg" alt="/" />
  </div>
  
  <div className="member-info">
    <h1 className="name">Gregory University, Uturu!</h1>
    <h3 className="position">Developer (final year project)</h3>
    <h4 className="about">
    The Online Exit Form was develop for my final project. It was develop to improve offline system (i.e the paper form) to an Online System, Designed using next-js a React Framework.
    </h4>
    <div className="link">
      <Link to="/gregoryuniversityexitform" className="contact-member">
        More Info
      </Link>
    </div>
    <Outlet />
  </div>
</div>

      <div className="member member-1">

        <div className="member-img">
          <img className="img" src="https://i.pinimg.com/564x/cb/84/f8/cb84f892686a88e54ecf74ef8e9ddbb6.jpg" alt="/" />
        </div>
        
        <div className="member-info">
          <h1 className="name">Trvth Travel Agency</h1>
          <h3 className="position"> Front-end Developer</h3>
          <h4 className="about">
            Travel with safety, accountabilty, flexiblity. Try! Trvth Travel Agency number one best Travelling Agency in the World. Don't Miss!!! 30% Offer for first five Taxi rides.
          </h4>
          <div className="link">
            <Link to="/truth" className="contact-member">
              More Info
            </Link>
          </div>
          <Outlet />
        </div>
      </div>

      <div className="member member-1">

        <div className="member-img">
          <img className="img" src="https://i.pinimg.com/564x/2e/fe/b7/2efeb7bd5ba0c265d547bcc388589b3d.jpg" alt="/" />
        </div>
        
        <div className="member-info">
          <h1 className="name">Quote la chemise</h1>
          <h3 className="position">CEO & Developer</h3>
          <h4 className="about">
          Quote la chemise is an E-commerce Webite designed with Wordpress, Fully Responsive for any device and user friendly following the integration of Easy...
          </h4>
          <div className="link">
            <Link to="/quotelachemise" className="contact-member">
              More Info
            </Link>
          </div>
          <Outlet />
        </div>
      </div>

<div className="member member-1">

  <div className="member-img">
    <img className="img" src="https://i.pinimg.com/564x/a8/1e/18/a81e18c50eaeb1fd29d9c2fefcd7033f.jpg" alt="/" />
  </div>
  
  <div className="member-info">
    <h1 className="name">Hunt Amazon Finds</h1>
    <h3 className="position">Founder & Developer</h3>
    <h4 className="about">
    Hunt Amazon Finds is a blog site i designed with React js framwork, stored the data with mongo db with the help of node js....
    </h4>
    <div className="link">
      <Link to="/huntamazonfinds" className="contact-member">
        More Info
      </Link>
    </div>
    <Outlet />
  </div>
</div>

<div className="member member-1">

  <div className="member-img">
    <img className="img" src="https://i.pinimg.com/564x/bc/4e/fb/bc4efb13be331425b7792266601b32c8.jpg" alt="/" />
  </div>
  
  <div className="member-info">
    <h1 className="name">UP</h1>
    <h3 className="position">Front-end Developer</h3>
    <h4 className="about">
  Help a friend of mine to develop the front-end aspect of a link generator project he is working on.
    </h4>
    <div className="link">
      <Link to="/up" className="contact-member">
        More Info
      </Link>
    </div>
    <Outlet />
  </div>
</div>

<div className="member member-1">

  <div className="member-img">
    <img className="img" src="https://i.pinimg.com/564x/cb/6b/cd/cb6bcd8f1fe01e599871a4ce0ee085d5.jpg" alt="/" />
  </div>
  
  <div className="member-info">
    <h1 className="name">Get Crackerjack</h1>
    <h3 className="position">Front-end Developer</h3>
    <h4 className="about">
  A front-end task given to me by FLEXISAF, To design a mobile product experience for a target audience of Millennials and GenZ group to access resources and information as participants in a tech-based internship program.
    </h4>
    <div className="link">
      <Link to="/getcrackerjack" className="contact-member">
        More Info
      </Link>
    </div>
    <Outlet />
  </div>
</div>
      
    </div>
  )
};

export default Portfolio;
