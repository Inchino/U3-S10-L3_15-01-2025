import { Dropdown, Container } from "react-bootstrap";

const Banner = function () {
  return (
    <Container fluid className="d-flex justify-content-between">
      <Container fluid className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <Dropdown className="ms-4 mt-1">
          <Dropdown.Toggle variant="outline-secondary" className="rounded-0">
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      <i className="bi bi-grid icons"></i>
      <i className="bi bi-grid-3x3 icons"></i>
    </Container>
  );
};

export default Banner;
