import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

const Add = () => {
  const OMDB_KEY = "a402c1df";

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();

    let keyword = e.target.value;

    setQuery(keyword);

    fetch(
      `https://www.omdbapi.com/?apikey=${OMDB_KEY}&r=json&type=movie&s=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResults(data.Search);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={changeHandler}
              placeholder="Search For Movie.."
            />
          </div>

          {results && (
            <ul className="results">
              {results.map((movie, index) => (
                <li key={index}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
