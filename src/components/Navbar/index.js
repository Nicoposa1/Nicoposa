import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../images/nplogo.png'
import './index.css'

class NavbarHome extends React.Component {
  render(){
    return(
      <Navbar className="navbar-dark fixed-top" bg="dark" expand="lg">
        <Navbar.Brand href="#home"><img className="Logo" src={Logo} alt="Nicolás Posa Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Me</Nav.Link>
            <Nav.Link href="">Skills</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarHome;