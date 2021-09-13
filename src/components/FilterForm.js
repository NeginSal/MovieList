//import React, { useEffect, useState } from "react";

const FilterForm = ({ Keyword, OverSeven, onChangeInputs }) => {
  return (
    <div>
      <div>
        Keyword
        <input
          type="text"
          value={Keyword}
          onChange={(e) =>
            onChangeInputs({ value: e.target.value, name: e.target.value })
          }
          name="Keyword"
        />
      </div>
      <div>
        Only over 7.0
        <input
          type="checkbox"
          checked={OverSeven}
          onChange={(e) =>
            onChangeInputs({ value: e.target.checked, name: e.target.name })
          }
          name="overseven"
        />
      </div>
    </div>
  );
};

export default FilterForm;
