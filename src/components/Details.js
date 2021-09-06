import { useEffect, useState } from "react";

function getServerData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Film #" + id);
    }, 3000);
  });
}

const Details = ({ id }) => {
  const [Loading, setLoading] = useState(true);
  const [description, setdescription] = useState("");

  useEffect(() => {
    getServerData(id).then((data) => {
      setdescription(data);
      setLoading(false);
    });
  });

  return <div>{Loading ? "Please wait..." : description}</div>;
};

export default Details;
