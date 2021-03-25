import React from 'react'

import './style.css'

import profile from '../../images/profile.jpg'

class Home extends React.Component {
  render() {
    return ( 
      <div className="container-fluid cont" id="Home">
        <div className="box">
          <div className="ProfileImage">
            <img src={profile} alt=""/>
          </div>
          <div className="front">
            <h2>Front End Developer</h2>
          </div>
        </div>
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div>
    ) 
  }
}
export default Home;

