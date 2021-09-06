import { useState } from "react";
import List from "./List";
import Details from "./Details";

const Manager = ({ movies }) => {
  const [Keyword, setKeyword] = useState("");
  const [OverSeven, setOverSeven] = useState(false);
  const [filmId, setfilmId] = useState(null);

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }
  function handleOverSevenChange(e) {
    setOverSeven(e.target.checked);
  }
  function filterItems(getKeyword, getOverSeven) {
    const arr = movies.map((item) => ({
      id: item.id,
      text: item.name,
      rate: item.rate,
      filmId: null,
    }));
    return arr
      .filter((item) =>
        item.text.toLowerCase().includes(getKeyword.toLowerCase())
      )
      .filter((item) => (getOverSeven ? item.rate > 7 : true));
  }
  const data = filterItems(Keyword, OverSeven);

  function handleClick(id) {
    console.log("id", id);
    setfilmId(id);
  }

  return (
    <div>
      <div>
        <div>
          Keyword
          <input type="text" value={Keyword} onChange={handleKeywordChange} />
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
          {filmId && <Details id={filmId} />}
          <List items={data} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Manager;
