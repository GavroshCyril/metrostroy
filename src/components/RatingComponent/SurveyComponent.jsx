import React from "react";
import { useState, useEffect } from "react";
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

const colors = {
  orange: "rgb(250, 175, 0)",
  grey: "#a9a9a9",
};

function BasicRating() {
  const [value, setValue] = React.useState(5);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
      .post("/reviews", { name, content })
      .then((response) => {
        setReviews([...reviews, { name, content }]);
        setName("");
        setContent("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={styles.container}>
      <Typography variant="h5">
        {" "}
        Уже посещали музей? <br /> Поделитесь мнением!{" "}
      </Typography>
      <div className="start-container" style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={40}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleAddReview}
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Комментарий"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            multiline
            rows={6}
            style={{ width: 600 }}
            /* defaultValue="Поделитесь вашим мнением о посещенном объекте :)"  */
          />
        </div>
      </Box>

      <Stack spacing={2} direction="row" /* justifyContent={"center"} */>
        <Button type="submit" style={styles.button} variant="contained">
          Отправить
        </Button>
      </Stack>
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

export default BasicRating;
