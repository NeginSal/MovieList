import React, { useEffect, useState } from "react";
import { getAllMovies } from "./components/Transportlayer";

const App = () => {
  const [Movies, setMovie] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Keyword, setKeyword] = useState("");
  const [OverSeven, setOverSeven] = useState(false);
  const [filterByDone, setfilterByDone] = useState("ALL");

  useEffect(() => {
    getAllMovies().then((response) => {
      const newMovies = response.map((item) => ({
        id: item.id,
        name: item.name,
        rate: item.rate,
        done: false,
      }));
      setMovie(newMovies);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const newFilteredMovies = Movies.filter((item) =>
      item.name.toLowerCase().includes(Keyword.toLowerCase())
    )
      .filter((item) => (OverSeven ? item.rate > 7 : true))
      .filter((item) =>
        filterByDone === "ALL" ? true : item.done === (filterByDone === "DONE")
      );
    setFilteredMovies(newFilteredMovies);
  }, [Movies, filterByDone, Keyword, OverSeven]);

  function handleDoneBtn(id) {
    setMovie(() =>
      Movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, done: !movie.done };
        }
        return movie;
      })
    );
  }

  function handleDoneChange(filter) {
    setfilterByDone(filter);
  }
  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }
  function handleOverSevenChange(e) {
    setOverSeven(e.target.checked);
  }
  if (Loading) {
    return "Please wait...";
  }

  return (
    <div>
      <div>
        <div>
          Keyword
          <input type="text" value={Keyword} onChange={handleKeywordChange} />
        </div>
        <div>
          <button onClick={() => handleDoneChange("ALL")}>all</button>
          <button onClick={() => handleDoneChange("DONE")}>done</button>
          <button onClick={() => handleDoneChange("UNDONE")}>undone</button>
        </div>
        <div>
          Only over 7.0
          <input
            type="checkbox"
            checked={OverSeven}
            onChange={handleOverSevenChange}
          />
        </div>
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
      </div>
    </div>
  );
};

export default App;
