import React, { useEffect, useState } from "react";
import { getAllMovies } from "./components/Transportlayer";
import Manager from "./components/Manager";

const App = () => {
  const [Movies, setMovie] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMovies().then((response) => {
      setMovie(
        response.map((item) => ({
          id: item.id,
          name: item.name,
          rate: item.rate,
        }))
      );
      setLoading(false);
    });
  }, []);

  if (Loading) {
    return "Please wait...";
  }
  return (
    <div>
      <Manager movies={Movies} />
    </div>
  );
};
export default App;
