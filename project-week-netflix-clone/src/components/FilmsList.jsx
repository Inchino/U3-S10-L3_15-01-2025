/* eslint-disable react/prop-types */
import { Row } from "react-bootstrap";
import SingleImage from "./SingleImage";

const FilmsList = ({ filmsToShow = [] }) => (
  <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
    {filmsToShow.slice(0, 6).map((film) => (
      <SingleImage film={film} key={film.imdbID} />
    ))}
  </Row>
);

export default FilmsList;
