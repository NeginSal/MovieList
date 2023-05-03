import React, { useEffect, useState } from "react";
import { getAllMovies } from "./Transportlayer";

function AllMovies({ filteredMovies, handleDoneBtn }) {

  return (
    <div>
      <ul>
        {filteredMovies.map((movie) => (
          <li data-id={movie.id}>
            {`${movie.name} ${movie.rate}`}
            <button onClick={() => handleDoneBtn(movie.id)}>
              {movie.done ? "done" : " undone"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllMovies;