import React from 'react'

import profileImg from '../../images/profile.jpg'

import './style.css'

class Courses extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor">
        <h1>Aproved Course</h1>
        <div className="card">
          <img src={profileImg} alt=""/>
          <div className="card-body">
            <p>Que haces cabezo</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Courses;
