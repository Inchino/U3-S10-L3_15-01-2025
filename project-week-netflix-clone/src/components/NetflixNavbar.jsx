import { Container, Navbar, Nav, Image } from "react-bootstrap";

const NetflixNavbar = function () {
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src="assets/logo.png" width={100} height={55} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#home" className="fw-bold active">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>
          </Nav>
          <Container className="d-flex align-items-center m-0 p-0 my-2 d-lg-none">
            <Nav className="bi bi-search icons"></Nav>
            <Nav id="kids" className="fw-bold">
              KIDS
            </Nav>
            <Nav className="bi bi-bell icons"></Nav>
            <Nav className="bi bi-person-circle icons"></Nav>
          </Container>
        </Navbar.Collapse>
        <Nav.Link href="#">
          <i className="bi bi-search icons d-lg-block d-none"></i>
        </Nav.Link>
        <Nav.Link href="#">
          <Nav id="kids" className="fw-bold d-lg-block d-none">
            KIDS
          </Nav>
        </Nav.Link>
        <Nav.Link href="#">
          <i className="bi bi-bell icons d-lg-block d-none"></i>
        </Nav.Link>
        <Nav.Link href="#">
          <i className="bi bi-person-circle icons d-lg-block d-none"></i>
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
