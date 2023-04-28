import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsDetail = ({ match }) => {
  const [news, setNews] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/news/${match.params.id}`)
      .then((response) => setNews(response.data))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;
