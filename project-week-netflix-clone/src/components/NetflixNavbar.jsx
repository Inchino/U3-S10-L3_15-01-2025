import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

const NetflixNavbar = function () {
  const location = useLocation()
  return (
    <Navbar expand="lg" data-bs-theme="dark">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <Image src="assets/logo.png" width={100} height={55} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Link to="/" className={
            location.pathname === '/home' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              Home
            </Link>
            <Link to="/tvshows" className={
            location.pathname === '/tvshows' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }
            >
              TV Shows
            </Link>
            <Link to="/movies" className={
            location.pathname === '/movies' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              Movies
            </Link>
            <Link to="recentlyadded" className={
            location.pathname === '/menu' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              Recently Added
            </Link>
            <Link to="mylist" className={
            location.pathname === '/menu' ? 'nav-link active fw-bold' : 'nav-link fw-bold'
            }>
              My List
            </Link>
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
        <Link to="#">
          <i className="bi bi-search icons d-lg-block d-none"></i>
        </Link>
        <Link to="#">
          <Nav id="kids" className="fw-bold d-lg-block d-none">
            KIDS
          </Nav>
        </Link>
        <Link to="#">
          <i className="bi bi-bell icons d-lg-block d-none"></i>
        </Link>
        <Link to="#">
          <i className="bi bi-person-circle icons d-lg-block d-none"></i>
        </Link>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;
