import "./truth.css";
import { Link, Outlet } from "react-router-dom";
import bg from "../truth/Adventure.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

const Truth = () => {
  return (
    <div className='truth-container'>
      <div className='truth-head'>
        <div className="truth-img">
          <img src={bg} alt="/" />
        </div>
        <div className='bg-shadow' />
        <div className='title'>
          <h2 className='py-2'>Trvth Travel Agency</h2>
          <h3>React JS / Bootstrap / Netlify</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This app was built using React JS and is hosted on Netlify. Travel with safety, accountabilty, flexiblity. Try! Trvth Travel Agency number one best Travelling Agency in the World. Don't Miss!!! 30% Offer for first five Taxi rides.
          </p>

          <div className="acbtn">
          <a href="https://trvth.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          <a href="https://github.com/Priestlyb/Truth" target="_blank" rel="noopener noreferrer">
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Bootstrap
              </p>
              <p className="text">
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
            </div>
          </div>
        </div>
          <Outlet />
      </div>
    </div>
  )
};

export default Truth;
