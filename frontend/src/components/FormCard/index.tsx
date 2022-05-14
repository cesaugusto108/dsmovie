import "./styles.css";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";

type Props = {
      movieId: string;
};

function FormCard({ movieId }: Props) {
      const [movie, setMovie] = useState<Movie>();

      useEffect(() => {
            axios.get(`${BASE_URL}/movies/${movieId}`).then((response) => {
                  setMovie(response.data);
            });
      }, [movieId]);

      return (
            <div className="dsmovie-form-container">
                  <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
                  <div className="dsmovie-card-bottom-container">
                        <h3>{movie?.title}</h3>
                        <form className="dsmovie-form">
                              <div className="form-group dsmovie-form-group">
                                    <label htmlFor="email">Informe seu email</label>
                                    <input type="email" className="form-control" id="email" />
                              </div>
                              <div className="form-group dsmovie-form-group">
                                    <label htmlFor="score">Informe sua avaliação (1 - 5)</label>
                                    <select defaultValue={5} className="form-control" id="score">
                                          <option value={1}> &#9734;</option>
                                          <option value={2}> &#9734;&#9734;</option>
                                          <option value={3}> &#9734;&#9734;&#9734;</option>
                                          <option value={4}> &#9734;&#9734;&#9734;&#9734;</option>
                                          <option value={5}> &#9734;&#9734;&#9734;&#9734;&#9734;</option>
                                    </select>
                              </div>
                              <div className="dsmovie-form-btn-container">
                                    <button type="submit" className="btn btn-secondary dsmovie-btn">
                                          Salvar
                                    </button>
                              </div>
                        </form>
                        <Link to="/">
                              <button className="btn btn-secondary dsmovie-btn mt-3">Cancelar</button>
                        </Link>
                  </div>
            </div>
      );
}

export default FormCard;
