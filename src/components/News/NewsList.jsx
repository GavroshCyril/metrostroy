import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/news")
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>News List</h2>
      {news.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href={`/news/${item.id}`}>Read more</a>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsList;
