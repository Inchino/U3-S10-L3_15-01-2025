/* eslint-disable react/prop-types */
import { Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom";

const SingleImage = ({ film }) => (
  <Col className="mb-2 text-center px-1">
    <Link to={"/moviedetails/" + film.imdbID}>
    <Image
      src={film.Poster}
      alt={film.Title}
      style={{ width: "301px", height: "164px" }}
      fluid
    />
    </Link>
  </Col>
);

export default SingleImage;
