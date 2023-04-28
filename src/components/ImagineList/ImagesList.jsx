import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography, Modal, Backdrop, Fade } from "@mui/material";

const classes = {
  container: {
    cursor: "pointer",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  img: {
    outline: "none",
    zIndex: 99,
  },
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size *
      rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImagesList() {
  /*   const classes = useStyles(); */
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value) => {
    setImage(value);
    setOpen(true);
    console.log(image);
  };
  return (
    <div className="Image-container">
      <ImageList
        styles={classes.gridList}
        variant="quilted"
        cols={4}
        rowHeight={150}
      >
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
              onClick={(e) => handleImage(item.img)}
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
      <Modal
        /* className={classes.modal} */
        style={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade
          in={open}
          timeout={500}
          style={classes.img} /*  className={classes.img} */
        >
          <img
            src={image}
            alt="asd"
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </Fade>
      </Modal>
    </div>
  );
}

const itemData = [
  {
    img:
      "https://metropoliten.by/images/history_M/1.%20%D0%9F%D0%B5%D1%80%D0%B2%D0%B0%D1%8F%20%D1%81%D0%B2%D0%B0%D1%8F.jpg",
    title: "01",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/3.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-3.jpg",
    title: "02",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/4.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-4.jpg",
    title: "03",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/10.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-10.jpg",
    title: "04",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/12.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-12.jpg",
    title: "05",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/16.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-16.jpg",
    title: "06",
  },
  {
    img:
      "https://metropoliten.by/images/history_M/17.%20%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-17.jpg",
    title: "07",
  },
  {
    img: "https://www.mirmetro.net/uploaded/images/minsk/history/02/02.jpg",
    title: "08",
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
