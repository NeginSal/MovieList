import { useEffect, useState } from "react";
import { getMovie } from "./Transportlayer";

const Details = ({ id,onClickBack }) => {
  const [Loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetchAndUpdate(id);
  }, []);

  function fetchAndUpdate(id) {
    setLoading(true);
    getMovie(id).then((data) => {
      setName(data.name);
      setdescription(data.description);
      setLoading(false);
    });
  }

  return <div>
    Loading ? (<Loading/>): (
      <div>
        <h3>Detail</h3>
        <div>
          <div>{`Name:${name}`}</div>
          <div>{`Description:${description}`}</div>
          <button onClick={onClickBack}>Back</button>
        </div>
      </div>
    )
    </div>;
};

export default Details;
