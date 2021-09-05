//import { getAllMovies } from "./components/Transportlayer";
import { useState } from "react";
import List from "./components/List";
import MOVIES from "./data.json";

const App = () => {
  const [Keyword, setKeyword] = useState("");
  const [OverSeven, setOverSeven] = useState(false);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }
  function handleOverSevenChange(e) {
    setOverSeven(e.target.checked);
  }

  return (
    <>
      <h2>FiltrableList!</h2>
      <div>
        Keyword:
        <input type="text" value={Keyword} onChange={handleKeywordChange} />
      </div>
      <div>
        <input type="checkbox" checked={OverSeven} onChange={handleOverSevenChange}/>
        Only over 7.0
      </div>
      <div>
        <List items={MOVIES} />
      </div>
    </>
  );
};

export default App;
