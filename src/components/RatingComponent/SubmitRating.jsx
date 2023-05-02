import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Rating.css";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import {
  Stack,
  Button,
  Box,
  TextField,
  Typography,
  Rating,
} from "@mui/material";
import { selectReviews } from "../../store/reviewsSlice";
// selectReviews

const colors = {
  orange: "rgb(250, 175, 0)",
  grey: "#a9a9a9",
};

function SubmitRating() {
  const [value, setValue] = React.useState(5);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const reviewsFromStore = useSelector(selectReviews);
  console.log("reviewsFromStore", reviewsFromStore)

  useEffect(() => {
    // console.log("reviewsFromStore", reviewsFromStore)
    // axios
    //   .get("/api/reviews")
    //   .then((response) => {
    //     setReviews(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleAddReview = (event) => {
    event.preventDefault();
    axios
      .post("/api/reviews", { name, content })
      .then((response) => {
        setReviews([...reviews, { name, content }]);
        setName("");
        setContent("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*   const handleDeleteReview = (id) => {
    axios
      .delete(`/api/reviews/${id}`)
      .then((response) => {
        setReviews(reviews.filter((review) => review.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }; */

  return (
    <div className="rating-container" style={styles.container}>
      <Typography
        className="rating-title"
        fontWeight={700}
        variant="h4"
        component="h2"
      >
        Нас уже оценили!
      </Typography>

      <div className="submit-review-container">
        {reviewsFromStore.map((review) => {
          return (<div className="submit-review">
            <span className="submit-review-date">{review.date_at}</span>
            <div className="submit-review-rating">
              <Typography fontWeight={500} variant="subtitle1" component="h2">
                {review.name}
              </Typography>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={review.rating}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
            <div className="submit-review-text">
              {review.review}
            </div>
          </div>)
        })}
      </div>

      {/* <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.name}: {review.content}
            <button onClick={() => handleDeleteReview(review.id)}>
              Удалить Комментарий
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flexStart",
    marginTop: 40,
    maxWidth: 400,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 10,
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 200,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    marginTop: 10,
  },
};

export default SubmitRating;
