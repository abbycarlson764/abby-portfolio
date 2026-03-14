import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand="md" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand-text">
          <img src="/logo.svg" alt="AC" height="44" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/projects"
              className="nav-link-custom"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/writing"
              className="nav-link-custom"
            >
              Writing
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link-custom"
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
