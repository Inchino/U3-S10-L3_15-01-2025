/* eslint-disable react/prop-types */
import { Component } from "react";
import Loading from "./Loading";
import Error from "./Error";
import FilmsList from "./FilmsList";

const URL = "http://www.omdbapi.com/?apikey=a4e2f60f&s=";

class AdminArea extends Component {
  state = {
    films: {}, // Inizialmente un oggetto vuoto
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(URL + this.props.saga);
      if (response.ok) {
        let films = await response.json();
        this.setState({ films, isLoading: false, isError: false });
      } else {
        console.error(`HTTP error: ${response.status}`);
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.error("Network error:", error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    const { isLoading, isError, films } = this.state;

    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && (
          <FilmsList filmsToShow={films.Search || []} />
        )}
      </div>
    );
  }
}

export default AdminArea;
