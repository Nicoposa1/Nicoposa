import React from 'react'

import './index.css'
import reactjs from '../../images/react.svg'
import bootstrapImg from '../../images/bootstrap.svg'
import htmlImg from '../../images/html.svg'
import jsImg from '../../images/javascript.svg'
import cssImg from '../../images/css3.svg'
import typeImg from '../../images/typescript.svg'
import gitImg from '../../images/git.svg'
import sass from '../../images/sass.svg'
import webpack from '../../images/webpack.svg'

class Skills extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor" id="skills">
        <h1>Skills</h1>
        <div className="row fila container-sm">
          <div className="col-6 col-md-4 columna">
            <img src={htmlImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">HTML 5</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={jsImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">JavaScript</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={reactjs} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">React JS</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={cssImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">CSS 3</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={bootstrapImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">Bootstrap</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={typeImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">TypeScript</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={gitImg} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">Git and GitHub</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={sass} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">Sass</h3>
          </div>
          <div className="col-6 col-md-4 columna">
            <img src={webpack} className="rounded mx-auto d-block" alt=""/>
            <h3 className="text-center">Webpack</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
