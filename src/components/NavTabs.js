import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';

import './pages/assets/css/nav.css'
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Anastayzia Kerschen</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About
          </Nav.Link>
      <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Nav.Link>
      <Nav.Link           href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</Nav.Link>
          <Nav.Link           href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>

  );
}

export default NavTabs;
