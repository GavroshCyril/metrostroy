import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  return (
    <div className="Image-container">
      <ImageList variant="quilted" cols={4} rowHeight={150}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            cols={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].cols
            }
            rows={
              pattern[
                index - Math.floor(index / pattern.length) * pattern.length
              ].rows
            }
          >
            <img
              {...srcset(
                item.img,
                200,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].rows,
                pattern[
                  index - Math.floor(index / pattern.length) * pattern.length
                ].cols
              )}
              alt={item.title}
              loading="lazy"
            />
            <Typography
              variant="body2"
              component="span"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                color: "white",
                background: "rgba(0,0,0, .3)",
                p: "5px",
                borderTopRightRadius: 8,
              }}
            ></Typography>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://img-fotki.yandex.ru/get/26144/51545939.70/0_d5676_4283d68f_XXL.jpg",
    title: "01",
  },
  {
    img: "https://img-fotki.yandex.ru/get/54905/51545939.70/0_d5678_772719_XXL.jpg",
    title: "02",
  },
  {
    img: "https://transphoto.org/photo/11/80/15/1180154.jpg",
    title: "03",
  },
  {
    img: "http://www.adsl.kirov.ru/projects/articles/2016/09/12/muzey-minskogo-metro/6692651425e0568d82605c71a6b_prev.jpg",
    title: "04",
  },
];

const pattern = [
  {
    rows: 3,
    cols: 2,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 2,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];
