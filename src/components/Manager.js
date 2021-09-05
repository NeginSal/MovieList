import { useState } from "react";

import List from "./List";

const Manager = ({ movies }) => {
  const [Keyword, setKeyword] = useState("");
  const [OverSeven, setOverSeven] = useState(false);

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
    }));
    return arr
      .filter((item) =>
        item.text.toLowerCase().includes(getKeyword.toLowerCase())
      )
      .filter((item) => (getOverSeven ? item.rate > 7 : true));
  }
  const data = filterItems(Keyword, OverSeven);

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
          <List items={data} />
        </div>
      </div>
    </div>
  );
};
export default Manager;
