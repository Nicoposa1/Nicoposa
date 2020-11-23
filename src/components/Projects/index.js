import React from 'react'

import './index.css'

import project1 from '../../images/project/opconstrucciones.png'
import project2 from '../../images/project/pb.png'
import project3 from '../../images/project/opc.png'
import project4 from '../../images/project/jsgame.png'
import project5 from '../../images/project/responsive.png'
class Projects extends React.Component{
 render(){
   return(
    <div className="contendor-projects">
      <div className="contenedor-tittle">
        <h1 className="tittle-p">Some Projects</h1>
        <div className="row row-courses">
          <div className="col-6 col-md-4 p-0">
            <div className="con-p">
              <div className="project-content">
                <a target="_blank" rel="noreferrer" href="https://nicoposa1.github.io/Bootstrap.github.io/">
                  <figure>
                    <img src={project1} className="project-image" alt=""/>
                  </figure>
                  <div className="con-text">
                    <h4>Platzi Badges</h4>
                    <p>Bootstrap css</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="con-p">
              <div className="project-content">
                <a href="http://opconstrucciones.com/" target="_blank" rel="noreferrer">
                  <figure>
                    <img src={project2} className="project-image" alt=""/>
                  </figure>
                  <div className="con-text">
                    <h4>OP Construcciones</h4>
                    <p>Bootstrap css</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="con-p">
              <div className="project-content">
                <a href="https://nicoposa1.github.io/OPConstruccioness.github.io/" target="_blank" rel="noreferrer">
                  <figure>
                    <img src={project3} className="project-image" alt=""/>
                  </figure>
                  <div className="con-text">
                    <h4>Platzi Badges</h4>
                    <p>HTML css JS</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="con-p">
              <div className="project-content">
                <a href="https://nicoposa1.github.io/proyectoDeJavaSript/" target="_blank" rel="noreferrer">
                  <figure>
                    <img src={project4} className="project-image" alt=""/>
                  </figure>
                  <div className="con-text">
                    <h4>Simon says</h4>
                    <p>HTML css JS</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 p-0">
            <div className="con-p">
              <div className="project-content">
                <a target="_blank" rel="noreferrer" href="https://nicoposa1.github.io/ProyectoResponsive/">
                  <figure>
                    <img src={project5} className="project-image" alt=""/>
                  </figure>
                  <div className="con-text">
                    <h4>Proyecto responsive</h4>
                    <p>HTML CSS JS</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
 }
}

export default Projects