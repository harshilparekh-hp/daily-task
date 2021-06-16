import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import './header.styles.css';

const Header = () => {
  return (
    <div>
      <Navbar expand='sm' collapseOnSelect bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#'>DailyTask</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#'>Home</Nav.Link>
              <Nav.Link href='#'>Login</Nav.Link>
              <Nav.Link href='#'>Developer Info.</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
