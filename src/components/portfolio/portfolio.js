import "./portfolio.css";
import { Link, Outlet } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="members" className="container members-container">
      <p className="sub">PROJECTS</p>
      <h1 className="member-txt">What I've Built</h1>

      <div className="member member-1">

        <div className="member-img">
          <img className="img" src="https://i.pinimg.com/564x/cb/84/f8/cb84f892686a88e54ecf74ef8e9ddbb6.jpg" alt="/" />
        </div>
        
        <div className="member-info">
          <h1 className="name">Trvth Travel Agency</h1>
          <h3 className="position">Founder</h3>
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
          <img className="img" src="https://i.pinimg.com/564x/8f/04/1a/8f041ad8f89d07aa921ea728ee313b0b.jpg" alt="/" />
        </div>
        
        <div className="member-info">
          <h1 className="name">BrickWall Engineering Ltd</h1>
          <h3 className="position">Contract Worker</h3>
          <h4 className="about">
          Brickwall Engineering Limited is on a mission of becoming a dominant provider of specialized engineering services in IT, Structural Engineering, Energy Solutions and Logistics.
          </h4>
          <div className="link">
            <Link to="/brickwallengineeringltd" className="contact-member">
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
