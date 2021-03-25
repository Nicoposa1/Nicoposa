import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/np.png'
import './index.css'

class NavbarHome extends React.Component {
  render(){
    return(
      <div className="container-fluid">
        <Navbar className="navbar-dark fixed-top" bg="dark" expand="lg">
          <Navbar.Brand href='/'><img className="Logo" src={Logo} alt="Nicolás Posa Logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Me">Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavbarHome;