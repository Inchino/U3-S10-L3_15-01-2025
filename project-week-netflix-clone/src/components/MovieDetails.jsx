import { Row, Col, Image, Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TrendingNow from "./TrendingNow"
import WatchItAgain from "./WatchItAgain"
import NewReleases from "./NewReleases"

const MovieDetails = function () {
    const params = useParams()
    console.log('PARAMS OBJECT', params)

    const [foundMovie, setFoundMovie] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const result = films.find((film) => {
          return film.id.toString() === params.movieId
        })
        console.log('RESULT', result)
        if (result) {
          setFoundMovie(result)
        } else {
          navigate('/not-found')
        }
      }, [])
    
      console.log('RENDER')

  return (
    <>
      <h1 className="text-center text-white">Movie Details</h1>
      <Row>
        <Col className="mb-3 text-center px-1">
          <Image
            src={foundMovie.Poster}
            alt={foundMovie.Title}
            fluid
          />
          <p className="mb-2 text-center fw-bold">{foundMovie.Title}</p>
          <Button
                variant="primary"
                onClick={() => {
                  navigate('/menu')
                }}
              >
                Torna al Menu
            </Button>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetails;
