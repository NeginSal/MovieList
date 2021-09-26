import React, { useEffect, useState } from "react";
import { getAllMovies } from "./components/Transportlayer";
import Manager from "./components/Manager";
import Loading from "./components/Loading";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getAllMovies().then((response) => {
      const movies = response.map((item) => ({
        id: item.id,
        text: item.name,
        rate: item.rate,
        done: false,
      }));
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return <Manager initMovies={movies} />;
};
export default App;
