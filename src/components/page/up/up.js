import "./up.css";
import { Link, Outlet } from "react-router-dom";
import bg from "../up/up.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

const huntamazonfinds = () => {
  return (
    <div className='truth-container'>
      <div className='truth-head'>
        <div className="truth-img">
          <img  src={bg} alt="/" />
        </div>
        <div className='bg-shadow' />
        <div className='title'>
          <h2 className='py-2'>up</h2>
          <h3>Link generator</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p classname='desctitle'>Project</p>
          <h2>Overview</h2>
          <p>
          Help a friend of mine to develop the front-end aspect of a link generator project he is working on.
          </p>

          <div className="acbtn">
          <a href="https://up-priestlyb.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          <a href="https://github.com/Priestlyb/up" target="_blank" rel="noopener noreferrer">
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
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> React js
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> React hook (use-local-storage)
              </p>
            </div>
          </div>
        </div>
          <Outlet />
      </div>
    </div>
  )
};

export default huntamazonfinds;
