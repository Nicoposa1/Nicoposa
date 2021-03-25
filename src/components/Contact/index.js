import React from 'react'

import './styles.css'
import linkedin from '../../images/icons/linkedin.svg'
import github from '../../images/icons/github.png'
import cv from '../../images/icons/cv.png'
import twitter from '../../images/icons/twitter.svg'
import dev from '../../images/icons/dev.svg'
import email from '../../images/icons/email.png'

class Contact extends React.Component{
  render(){
    return(
      <div className="container-fluid contact" id="contact">
        <div className="cont-contact">
          <div className="contact-tittle">
            <h1>Contact</h1>
          </div>
          <div className="cv">
            <a href="https://drive.google.com/file/d/1aLTJp1fiDU8CGsnrmrc2wn166ZgtVDT0/view?usp=sharing" target="_blank" className="anchor" rel="noreferrer">
              <img src={cv} alt=""/> <h3>See my CV</h3>
            </a>
          </div>
          <div className="cv">
            <a href="mailto:nicoposa57@gmail.com" target="_blank" className="anchor" rel="noreferrer">
              <img src={email} alt=""/> <h3>nicoposa57@gmail.com</h3>
            </a>
          </div>
          <div className="social-media">
            <div className="social">
              <a href="https://www.linkedin.com/in/nicolasposa/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt=""/>
                <h3>Linkedin</h3>
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/Nicoposa1" target="_blank" rel="noreferrer">
                <img src={github} alt=""/>
                <h3>GitHub</h3>
              </a>
            </div>
            <div className="social">
              <a href="https://dev.to/nicoposa1" target="_blank" rel="noreferrer">
                <img src={dev} alt=""/>
                <h3>Dev.to</h3>
              </a>
            </div>
            <div className="social">
              <a href="https://twitter.com/nicoposa1" target="_blank" rel="noreferrer">
                <img src={twitter} alt=""/>
                <h3>Twitter</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
