import "./skill.css";
import img1 from '../props/css.png';
import img2 from '../props/bootstrap.png';
import img3 from '../props/javascript.png';
import img4 from '../props/react.png';
import img5 from '../props/tailwind.png';
import img6 from '../props/figma.png';
import img7 from '../props/shopify.png';
import img8 from '../props/netlify.png';

const Skill = () => {
  return (
    <div id="skills" className="container skills-container">
      <p className="sub">SKILLS</p>
      <h1 className="skill-txt">What I Can Do</h1>

      <div className="skills">
        <div className="skill-item">
            <img src={img6} alt='' />
            Figma
        </div>
        <div className="skill-item">
            <img src={img1} alt='' />
            CSS
        </div>
        <div className="skill-item">
            <img src={img2} alt='' />
            BootStrap
        </div>
        <div className="skill-item">
            <img src={img3} alt='' />
            JavaScript
        </div>
        <div className="skill-item">
            <img src={img4} alt='' />
            React
        </div>
        <div className="skill-item">
            <img src={img5} alt='' />
            Tailwind
        </div>
        <div className="skill-item">
            <img src={img7} alt='' />
            Shopify
        </div>
        <div className="skill-item">
            <img src={img8} alt='' />
            Netlify
        </div>
      </div>
    </div>
  )
};

export default Skill;
