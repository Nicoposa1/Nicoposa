import React from 'react'

import './index.css'
import reactjs from '../../images/react.svg'

class Skills extends React.Component{
  render(){
    return(
      <div className="container-fluid contenedor">
        <div className="">
          <h1>Skills</h1>
        </div>
        <div className="card">
          <img src={reactjs} alt=""/>
          <h3>React</h3>
        </div>
      </div>
    )
  }
}

export default Skills
