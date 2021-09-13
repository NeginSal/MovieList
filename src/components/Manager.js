import { useState } from "react";
import List from "./List";
import Details from "./Details";
import FilterForm from "./FilterForm";

const Manager = ({ initMovies }) => {
  const [Keyword, setKeyword] = useState("");
  const [OverSeven, setOverSeven] = useState(false);
  const [filmId, setfilmId] = useState(null);
  const [mode, setMode] = useState("unDone");

  const filterItems = () => {
    return initMovies
      .filter((item) => (mode === "done" ? item.done : !item.done))
      .filter((item) => item.text.toLowerCase().includes(Keyword.toLowerCase()))
      .filter((item) => (OverSeven ? item.rate > 7 : true));
  };

  function handleChangeInput({ value, name }) {
    if (name === "keyword") setKeyword(value);
    else setOverSeven(value);
  }

  if (filmId > 0) {
    return <Details id={filmId} onClickBack={() => setfilmId(null)} />;
  }

  return (
    <>
      <h2>Filterable List!</h2>
      <FilterForm
        onChangeInputs={handleChangeInput}
        keyword={Keyword}
        overseven={OverSeven}
      />
      <div>
        <button onClick={() => setMode("unDone")}>UnDone</button>
        <button onClick={() => setMode("done")}>Done</button>
      </div>
      <div>
        <List items={filterItems()} onClick={(id) => setfilmId(id)} />
      </div>
    </>
  );
};
export default Manager;
