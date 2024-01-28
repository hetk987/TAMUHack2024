import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { createContext, useState, useEffect } from 'react';


function NavigationBar() {

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home"><span style={{color:'red'}}>A</span>ero<span style={{color:' #4169E1'}}>A</span>dvice</Navbar.Brand>
          <Nav>
            <Nav.Link href="/trips">My Trips</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/tickets">View Tickets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;