import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href="/find-your-location">Find location</Nav.Link>
            <Nav.Link href="/My-Trip">My Trips</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}


export default NavigationBar;