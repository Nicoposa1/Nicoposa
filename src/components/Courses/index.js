import React from 'react'

import asyncImg from '../../images/asyncImg.png'

import './style.css'

class Courses extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor">
        <h1>Aproved Courses</h1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>React</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Courses;
