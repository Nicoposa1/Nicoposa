import React from 'react'

import './style.css'

import profileImage from '../../images/profile.jpg'

class Description extends React.Component {
  render(){
    return(
      <div className="container">
        <div className="child">
          <div className="img">
            <img src={profileImage} alt=""/>
          </div>
          <div className="description">
            <h1>Nicolás Posa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, labore harum eos aperiam temporibus deserunt illo exercitationem? Eaque deleniti ex, velit quo magnam dolor sequi nulla esse in iusto accusamus.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Description