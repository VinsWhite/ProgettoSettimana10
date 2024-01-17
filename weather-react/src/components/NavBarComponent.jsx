import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><h2 className='text-primary fw-bold'>WEATHER.IT</h2></Navbar.Brand> {/* qui viene refreshata la pagina */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-dark">Home</Link>
            <Link to="/news" className="nav-link text-dark">Notizie</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
