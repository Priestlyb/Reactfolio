import "./gregory-university-exit-form.css";
import { Link, Outlet } from "react-router-dom";
import bg from "./site.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

const gregoryuniversityexitform = () => {
  return (
    <div className='truth-container'>
      <div className='truth-head'>
        <div className="truth-img">
          <img  src={bg} alt="/" />
        </div>
        <div className='bg-shadow' />
        <div className='title'>
          <h2 className='py-2'>Gregory University, Uturu!</h2>
          <h3>Online Exit Form</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p classname='desctitle'>Project</p>
          <h2>Overview</h2>
          <p>
          The Online Exit Form was develop for my final project. It was develop to improve offline system (i.e the paper form) to an Online System, Designed using next-js a React Framework.
          </p>

          <div className="acbtn">
          <a href="https://gregory-university-exit-form.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          <a href="https://github.com/Priestlyb/next-js_online-exit-form" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Code</button>
          </a>
          </div>

          <Link to='/'>
          <p className="back"><AiOutlineRollback />Back</p>
          </Link>
        </div>

        <div className='coltec'>
          <div className='p-2'>
            <p className='coltec-tittle'>Technologies</p>
            <div className=''>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> React js
              </p>
              <p className="text">
                <RiRadioButtonFill className='pr-1' /> Email js
              </p>
            </div>
          </div>
        </div>
          <Outlet />
      </div>
    </div>
  )
};

export default gregoryuniversityexitform;
