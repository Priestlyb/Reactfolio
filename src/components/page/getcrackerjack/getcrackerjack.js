import "./getcrackerjack.css";
import { Link, Outlet } from "react-router-dom";
import bg from "../getcrackerjack/getcrackerjack.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

const getcrackerjack = () => {
  return (
    <div className='truth-container'>
      <div className='truth-head'>
        <div className="truth-img">
          <img  src={bg} alt="/" />
        </div>
        <div className='bg-shadow' />
        <div className='title'>
          <h2 className='py-2'>Get crackerjack</h2>
          <h3>Link generator</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p classname='desctitle'>Project</p>
          <h2>Overview</h2>
          <p>
          A front-end task given to me by FLEXISAF, To design a mobile product experience for a target audience of Millennials and GenZ group to access resources and information as participants in a tech-based internship program.
          </p>

          <div className="acbtn">
          <a href="https://getcrackerjack.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          <a href="https://github.com/Priestlyb/Get-CrackerJack" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Code</button>
          </a>
          </div>

          <Link to='/'>
          <p><AiOutlineRollback />Back</p>
          </Link>
        </div>

        <div className='coltec'>
          <div className='p-2'>
            <p className='coltec-tittle'>Technologies</p>
            <div className=''>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className="text">
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
          <Outlet />
      </div>
    </div>
  )
};

export default getcrackerjack;
