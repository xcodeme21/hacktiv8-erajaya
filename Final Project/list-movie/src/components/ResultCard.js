import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchList, watched } =
    useContext(GlobalContext);

  let storedMovie = watchList.find((mov) => mov.imdbID === movie.imdbID);
  let storedMovieWatched = watched.find((mov) => mov.imdbID === movie.imdbID);

  const watchListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={`${movie.Poster}`} alt={`${movie.Title} Poster`} />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">{movie.Year}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchListDisabled}
            onClick={() => {
              addMovieToWatchlist(movie);
              console.log(movie);
            }}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie);
              console.log("action watched");
            }}
          >
            Add to Watched
          </button>

          <Link to={`/detail/${movie.imdbID}`}>
            <button className="btn">Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
