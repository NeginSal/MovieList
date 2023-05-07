import React, { useEffect, useState } from "react";
import { getAllMovies } from "./components/Transportlayer";
import Search from "./components/Search";
import ButtonFilter from "./components/ButtonFilter";
import CheckBox from "./components/CheckBox";
import AllMovies from "./components/AllMovies";

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
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>

        <Search Keyword={Keyword} handleKeywordChange={handleKeywordChange} />
        <ButtonFilter handleDoneChange={handleDoneChange} />
        <CheckBox OverSeven={OverSeven} handleOverSevenChange={handleOverSevenChange} />
        <AllMovies
          filteredMovies={filteredMovies}
          handleDoneBtn={handleDoneBtn}
        />
      </div>
    </div>
  );
};

export default App;
