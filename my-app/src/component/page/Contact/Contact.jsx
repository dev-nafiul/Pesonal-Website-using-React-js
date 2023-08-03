import React from 'react';
import { BsEnvelopeOpenFill, BsTelephone, BsFacebook, BsGithub, BsYoutube,BsSend } from 'react-icons/bs';
import '../Contact/contact.css'

function Contact() {
  return (
    <section className="Contact-page container ">
      <h1 className="contact-title">
        Get in <span>Touch </span>
      </h1>
      <div className="contact-item d-flex">
        <div className="contact-left card">
          <h2 className="c-left-title">Hire Me,</h2>
          <p>If you need help, feel free to contact me</p>
          <div className="icon-text d-flex">
            <BsEnvelopeOpenFill className='contact-icon'/>
            <div className="c-item">
              <span>Mail Me:</span>
              <h5>developernafiul1710@gmail.com</h5>
            </div>
          </div>
          <div className="icon-text d-flex">
            <BsTelephone className='contact-icon'/>
            <div className="c-item">
              <span>Call Me:</span> 
              <h5>+1 123-456-7890</h5>
            </div>
          </div>
          <div className="socal-links">
            <a href="https://www.facebook.com/profile.php?id=100069064403874">
              <BsFacebook />
            </a>
            <a href="https://github.com/yourgithubusername"> 
              <BsGithub />
            </a>
            <a href="https://www.youtube.com/yourchannel"> 
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="contact-right mt-5 ">
          <div className="input-group">
            <form action="" className='form-group '>
              <div className="input-item d-flex">
              <input type="text" placeholder='Your Name' className=' form-control' />
              <input type="email" placeholder='Your E-mail' className=' form-control' />
              <input type="text" placeholder='Your Subject' className=' form-control' />
              </div>
              <textarea className='form-control' placeholder='Message' cols="30" rows="10" style={{resize:'none'}}></textarea>
              <button type='submit' className='contact-button'>
              Submit
              <span className='contact_icon'><BsSend/></span>
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
