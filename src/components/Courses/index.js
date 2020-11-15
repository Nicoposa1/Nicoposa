import React from 'react'

import asyncImg from '../../images/diplomas/asyncImg.png'
import backend from '../../images/diplomas/backend.png'
import jspro from '../../images/diplomas/jspro.png'
import reactesc from '../../images/diplomas/reactesc.png'
import responsive from '../../images/diplomas/responsive.png'
import react from '../../images/diplomas/react.png'
import ecmascript from '../../images/diplomas/ecmascript.png'
import redux from '../../images/diplomas/redux.png'
import fundamentosjs from '../../images/diplomas/fundamentosjs.png'
import fundamentosnode from '../../images/diplomas/fundamentosnode.png'

import './style.css'

class Courses extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor-courses">
        <h1 className="tittle-course">Aproved Courses</h1>
        <div className="row row-courses">
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={jspro} alt=""/>
                <div className="text">
                  <h4>Curso Profesional de JavaScript</h4>
                  <p className="p-courses">Platzi-2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={reactesc} alt=""/>
                <div className="text">
                  <h4>Curso Práctico de React JS</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
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
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={responsive} alt=""/>
                <div className="text">
                  <h4>Curso de Responsive Design</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={backend} alt=""/>
                <div className="text">
                  <h4>Curso de Backend con Node</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={react} alt=""/>
                <div className="text">
                  <h4>Curso de React.js</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={fundamentosjs} alt=""/>
                <div className="text">
                  <h4>Fundamentos de JavaScript</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={fundamentosnode} alt=""/>
                <div className="text">
                  <h4>Curso de Fundamentos de Node.js</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={redux} alt=""/>
                <div className="text">
                  <h4>Curso de React Router y Redux</h4>
                  <p className="p-courses">Platzi-2020</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="card">
              <div className="card-content">
                <img src={ecmascript} alt=""/>
                <div className="text">
                  <h4>Curso de ECMAScript 6+</h4>
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
