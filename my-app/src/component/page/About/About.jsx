import React from 'react'
import '../About/about.css'
import Cv from '../../../assets/steve-Cv.pdf';
import { FaDownload } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function About() {
  return (
    <div className='mainabout mt-5 container'>
      <h1 className='about-title'>
          About <span>Me</span>
        </h1>
        <div className="about-content d-flex">
    <div className="about-left col-md-6">
    <div className="about-content">
          <div className="info-content container">
            <h2 className="about-sub-titel">Personal Info</h2>
            <div className="ab_text ">
              <div className="about-left">
                <span>First Name: Nafiul Hasan</span>
                <span>Last Name: Mehedi</span>
                <span>Age:22 Year's</span>
                <span>Frelance: Available</span>
                <span>Phone: +8801824401348</span>
              </div>
              <div className="about-right">
                <span>E-mail: developernafiul1710@gmail.com</span>
                <span>Nationality: Bangladeshi</span>
                <span>Address: Natore, Rajshahi, Bangladesh</span>
                <span>Language: English,Hindi,Bangla</span>
              </div>

            </div>
            <a href={Cv} download={''} className='home_button ab-button'>
              Download CV
              <span className='button_icon'><FaDownload/></span>
            </a>
          </div>
          
        </div>
    </div>
    <div className="about-right col-md-6">
    <div className="cards">

<div className="icon-box">
  <h1 className='ic-header'>02+</h1>
  <p className="ic-text">Year's Exparience</p>
</div>
<div className="icon-box">
  <h1 className='ic-header'>50+</h1>
  <p className="ic-text">Complete Project</p>
</div>
<div className="icon-box">
  <h1 className='ic-header'>55+</h1>
  <p className="ic-text">Client</p>
</div>
<div className="icon-box">
  <h1 className='ic-header'>50+</h1>
  <p className="ic-text">Happy Customer</p>
</div>

</div>
     </div>
    </div >
      <div className="skills mb-5">
        <h1 className="title-skills text-center">My <span>Skills:</span></h1>
       <div className="progress-bar-group ">
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
        strokeWidth={3.5}
         text={`95%`}
         value={95}
         className='progressbar'
        />
        <h className="bootom-title">Html</h>
        </div>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
        strokeWidth={3.5}
         text={`90%`}
         value={90}
         className='progressbar'
        />
        <h className="bootom-title">CSS</h>
        </div>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
        strokeWidth={3.5}
         text={`60%`}
         value={60}
         className='progressbar'
        />
        <h className="bootom-title">Javascript</h>
        </div>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
        strokeWidth={3.5}
         text={`80%`}
         value={80}
         className='progressbar'
        />
        <h className="bootom-title">WordPress</h>
        </div>
        <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar 
        strokeWidth={3.5}
         text={`80%`}
         value={80}
         className='progressbar'
        />
        <h className="bootom-title">React js</h>
        </div>
        </div>
      </div>
       


    </div>
  )
}

export default About
