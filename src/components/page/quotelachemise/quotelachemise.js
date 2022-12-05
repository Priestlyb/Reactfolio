import "./quotelachemise.css";
import { Link, Outlet } from "react-router-dom";
import bg from "../quotelachemise/Home.png"
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineRollback } from 'react-icons/ai';

const quotelachemise = () => {
  return (
    <div className='truth-container'>
      <div className='truth-head'>
        <div className="truth-img">
          <img className="bg-img" src={bg} alt="/" />
        </div>
        <div className='bg-shadow' />
        <div className='title'>
          <h2 className='py-2'>Quote la chemise</h2>
          <h3>Wordpress/Namecheap</h3>
        </div>
      </div>

      <div className='truth-sub'>
        <div className='desc'>
          <p classname='desctitle'>Project</p>
          <h2>Overview</h2>
          <p>
          Quote la chemise is an E-commerce Webite designed with Wordpress, Fully Responsive for any device and user friendly following the integration of Easy communication with our costumer service with the help of Facebook Chat Plugin - Live Chat Plugin for WordPress
          </p>
          <a href="http://quotelachemise.com" target="_blank" rel="noopener noreferrer">
            <button className='btn'>Demo</button>
          </a>
          {/* <button className='btn'>Code</button> */}

          <Link to='/'>
          <p><AiOutlineRollback />Back</p>
          </Link>
        </div>

        <div className='coltec'>
          <div className='p-2'>
            <p className='coltec-tittle'>Technologies</p>
            <div className=''>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Wordpress
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Elementor
              </p>
              <p className="text">
                <RiRadioButtonFill className='pr-1' /> Site Kit by Google
              </p>
              <p className='text'>
                <RiRadioButtonFill className='pr-1' /> Wordfence Security
              </p>
            </div>
          </div>
        </div>
          <Outlet />
      </div>
    </div>
  )
};

export default quotelachemise;
