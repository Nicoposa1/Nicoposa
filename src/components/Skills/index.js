import React from 'react'

import './index.css'
import reactjs from '../../images/react.svg'

class Skills extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor">
        <h1>Skills</h1>
        <div className="row fila container-sm">
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-5 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
