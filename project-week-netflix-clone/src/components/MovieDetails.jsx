import { Row, Col, Image, Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const OMDbKey = 'ea139948'

const MovieDetails = function () {
  const [details, setDetails] = useState(null)
  const [comments, setComments] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          'http://www.omdbapi.com/?apikey=' + OMDbKey + '&i=' + params.movieID
        )
        if (resp.ok) {
          let data = await resp.json()
          console.log(data)
          setDetails(data)
        } else {
          console.log('error fetching details')
        }
      } catch (error) {
        console.log(error)
      }
    }
    const fetchComments = async () => {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            params.movieID,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQzYjlhMWI0MDZiZTAwMTRiN2I3NGEiLCJpYXQiOjE2OTg5MzcyNDksImV4cCI6MTcwMDE0Njg0OX0.U6sYge_5-XWfrZBppfhekwu7Lzo5dubPgo1tRqpX3p4',
            },
          }
        )
        if (response.ok) {
          let data = await response.json()
          setComments(data)
        } else {
          console.log('error fetching comments')
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchDetails()
    fetchComments()
  }, [params.movieID])

  return (
    <>
      <h1 className="text-center text-white">Movie Details</h1>
      <Row>
        <Col className="mb-3 text-center px-1">
        {details && (
          <>
          <Image
            src={details.Poster}
            alt={details.Title}
            fluid
          />
          <p className="mb-2 text-center fw-bold">{details.Title}</p>
          <p>{details.Info}</p>
          <p>{details.Year}</p>
          <ul style={{ listStyleType: 'none' }}>
            {comments.map((c) => (
              <li className="my-3" key={c._id}>
                {c.comment}
              </li>
            ))}
          </ul>
          <Button
                variant="primary"
                onClick={() => {
                  navigate('/menu')
                }}
              >
                Torna al Menu
            </Button>
            </>
        )}
        </Col>
      </Row>
    </>
  );
};

export default MovieDetails;
