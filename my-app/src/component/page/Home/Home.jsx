// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'
import Picture from '../../../assets/nafiul.png';
import '../Home/home.css';
import { FaArrowRight } from "react-icons/fa";
function Home() {
  return (
    <div className='home-section'>
      <div className="home_image">
      <img src={Picture} alt="" />
      </div>
      <div className="home_content">
        <h1 className='home_title'>
          <span>I'm Nafiul Hasan</span> <br />
          Web Designer
        </h1>
        <p className="home_discription">
          I'm form Bangladesh. I love coding & i try to learn more something. I'm basically work as a Front-end Web developer and Wordpress expert.I try to create more atractive design.
        </p>
        <Link to={'/component/page/About'} className='home_button'>
            More About Me {''}<span className='button_icon'><FaArrowRight/></span>
        </Link>
      </div>
      <div className="color-bloc-home"></div>
    </div>
  )
}

export default Home
