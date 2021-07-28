import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navbar2 = () => {
  return (
    <Navbar
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff" }}
      expand='lg'
      fixed='top'
    >
      <Container>
        <Navbar.Brand href='/' style={{ color: "#fff" }}>
          Andres Diaz
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          style={{ color: "#fff" }}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav
            className='justify-content-end me-auto'
            style={{ width: "100%" }}
          >
            <Nav.Link href='/' style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link href='/portfolio' style={{ color: "#fff" }}>
              Portfolio
            </Nav.Link>
            <Nav.Link href='/about' style={{ color: "#fff" }}>
              About
            </Nav.Link>
            <Nav.Link href='/contact' style={{ color: "#fff" }}>
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

<style></style>;

export default Navbar2;
