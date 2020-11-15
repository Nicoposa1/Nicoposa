import React from 'react'

import asyncImg from '../../images/asyncImg.png'

import './style.css'

class Courses extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor-courses">
        <h1 className="tittle-course">Aproved Courses</h1>
        <div className="row row-courses">
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de Asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <div className="card">
              <div className="card-content">
                <img src={asyncImg} alt=""/>
                <div className="text">
                  <h4>Curso de asincronismo con JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Courses;
