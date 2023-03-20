import { useState } from "react";
import Movie from "./Movie";

var moviesArray = [
  {
    title: "The King's Man",
    year: "2021"
  },
  {
    title: "The Dark Knight",
    year: "2008"
  }
];

export default function MovieList() {
  const [moviesList, setMoviesList] = useState(moviesArray);

  function handleForm(e) {
    e.preventDefault(); //prevent actual form submission
    // get values from form and make a new movie json object
    let newMovie = {
      title: e.target.title.value,
      year: e.target.year.value
    };
    // update moviesList state variable using the setMoviesList setter function
    // we need to modify the array in such a way that it's an IMMUTABLE change - .push is a MUTABLE change because it directly modifies the array
    // array spread syntax:
    setMoviesList(
      [
        ...moviesList,
        newMovie
      ]
    );
    // creates a new array starting with contents of existing array, then append new values to the new array (copy)
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <label htmlFor="title">Movie Title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="year">Year:</label>
        <input type="text" id="year" name="year" />
        <button type="submit">Add movie</button>
      </form>
      {
        moviesList.map((m) => (
          <Movie
            key={m.title + m.year}
            title={m.title}
            year={m.year}
          />
        ))
      }
    </div>
  );
}