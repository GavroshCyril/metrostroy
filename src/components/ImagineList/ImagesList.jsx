import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Avatar, Tooltip, Typography } from "@mui/material";
import profileImg from "../../Assets/Images/minsk-metro-logo.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size *
      rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={200}>
      {itemData.map((item, index) => (
        <ImageListItem
          key={item.img}
          cols={
            pattern[index - Math.floor(index / pattern.length) * pattern.length]
              .cols
          }
          rows={
            pattern[index - Math.floor(index / pattern.length) * pattern.length]
              .rows
          }
          sx={{
            cursor: "pointer",
          }}
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
          <Tooltip
            title="Источник: metropoliten.by"
            sx={{
              position: "absolute",
              bottom: "3px",
              right: "3px",
            }}
          >
            <Avatar src={profileImg} imgProps={{ "aria-hidden": true }} />
          </Tooltip>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img:
      "https://metropoliten.by/images/history_M/2.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-2.jpg",
    title: "Breakfast",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/3.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-3.jpg",
    title: "Burger",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/4.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-4.jpg",
    title: "Camera",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/7.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-7.jpg",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/6.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-6.jpg",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const pattern = [
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
