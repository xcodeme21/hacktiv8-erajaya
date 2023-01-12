import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Detail = () => {
  const OMDB_KEY = "a402c1df";
  const location = useLocation();
  const imdbID = location.pathname.split("/").pop();
  const [result, setResult] = useState([]);
  console.log(result);

  fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_KEY}&r=json&type=movie&i=${imdbID}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        setResult(data);
      } else {
        setResult([]);
      }
    });

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Detail Movie</h1>
        </div>
        <div>
          <div align="right">
            <Link to="/add" className="btn">
              Back
            </Link>
          </div>{" "}
          <br />
          <br />
          <div className="flex-container">
            <div>
              <img src={result.Poster} />
            </div>
            <div>
              <div className="info">
                <div className="header">
                  <h3 className="title">{result.Title}</h3>
                  <h4 className="release-date">{result.Year}</h4>
                </div>
                <div align="left">
                  <p>Genre : {result.Genre}</p>
                  <br />
                  <p>Country : {result.Country}</p>
                  <br />
                  <p>Released : {result.Released}</p>
                  <br />
                  <p>Rated : {result.Rated}</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div>
            <p>{result.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
