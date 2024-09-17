import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    /*<div>
        <nav>
            <ul>
                <li>
                    <Link to = "/">Inicio</Link>
                </li>
                <li>
                    <Link to = "/contact">Contacto</Link>
                </li>
                <li>
                    <Link to = "/us">Nosotros</Link>
                </li>
                <li>
                    <Link to = "/login">Iniciar Sesión</Link>
                </li>
            </ul>
        </nav>
    </div>*/
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sistema Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link> 
            <Nav.Link href="/contact">Contactenos</Nav.Link>  
            <Nav.Link href="/us">Nosotros</Nav.Link> 
            <Nav.Link href="/login">Inicio de Sesión</Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  )
}

export default Menu