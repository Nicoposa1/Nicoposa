import React from 'react'

import './style.css'

import profileImage from '../../images/profile.jpg'
// import bottomImage from '../../images/bottom.png'

class Description extends React.Component {
  render(){
    return(
      <div className="cont-des">
        <div className="child">
          <div className="img">
            <img src={profileImage} alt=""/>
          </div>
          <div className="description">
            <h1 className="tittle-des">Nicolás Posa</h1>
            <p className="tex-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, labore harum eos aperiam temporibus deserunt illo exercitationem? Eaque deleniti ex, velit quo magnam dolor sequi nulla esse in iusto accusamus.</p>
          </div>
        </div>
        <div className="bottom-img">
          {/* <img src={bottomImage} alt=""/> */}
        </div>
      </div>
    )
  }
}

export default Description