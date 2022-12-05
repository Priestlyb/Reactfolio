import "./huntamazonfinds.css";
import { Link, Outlet } from "react-router-dom";
import bg from "../huntamazonfinds/site.png"
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
          <h2 className='py-2'>Hunt Amazon Finds</h2>
          <h3>Blog Site</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p classname='desctitle'>Project</p>
          <h2>Overview</h2>
          <p>
          Hunt Amazon Finds is a blog site i designed with React js framwork, stored the data with mongo db with the help of node js and it framework, express js. Find cool amazon gadgets, kictchen tools, home appliances, e.t.c, all from Amazon!
          </p>

          <div className="acbtn">
          <a href="https://huntamazonfinds.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          <a href="https://github.com/Priestlyb/Hunt-Amazon-Finds" target="_blank" rel="noopener noreferrer">
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
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> React js
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Node js
              </p>
              <p className="text">
                <RiRadioButtonFill className='pr-1' /> Express js
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Mongo DB
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
