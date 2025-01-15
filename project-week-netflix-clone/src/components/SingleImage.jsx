/* eslint-disable react/prop-types */
import { Col, Image } from "react-bootstrap";

const SingleImage = ({ film }) => (
  <Col className="mb-2 text-center px-1">
    <Image
      src={film.Poster}
      alt={film.Title}
      style={{ width: "301px", height: "164px" }}
      fluid
    />
  </Col>
);

export default SingleImage;
