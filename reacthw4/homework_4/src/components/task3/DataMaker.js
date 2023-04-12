import React, { useState, useEffect } from "react";
const DataMaker = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [props.url]);

  return <div>{props.renderDataUrl(posts)}</div>;
};

export default DataMaker;
