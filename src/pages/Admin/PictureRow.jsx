import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Input,
  CardMedia,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import Axios from "axios";
import { useDispatch } from "react-redux";
import {
  selectLocalizedState,
  selectLocale,
} from "../../store/localizationSlice";
import { useLocalisation } from "../../hooks/useLocalisation";
import { updateCurrentLineImage } from "../../store/linesSlice";
import "./PictureRow.jsx";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useTranslation } from "react-i18next";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const PictureRow = ({ lineName, pictureName }) => {
  const [t] = useTranslation();
  const [isChanging, setIsChanging] = useState(false);
  const locale = useSelector(selectLocale);
  const [shouldReRender, setShouldReRender] = useState(false);
  const onLocalisation = useLocalisation();
  const imageLink = "http://localhost:3000/station/image/";
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const savePicture = (e) => {
    Axios.post(
      "http://localhost:3000/station/image",
      {
        image: selectedImage,
        lineName,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        const { filename } = res.data;

        const image = {
          lineName,
          filename,
        };
        dispatch(updateCurrentLineImage(image));
      }
    });
  };

  useEffect(() => {
    onLocalisation()
      .catch((err) => {
        console.error("err", err);
      });
  }, [shouldReRender]);

  return (
    <>
      <Grid item md={9} xs={12}>
        <CardMedia
          className="card-img"
          style={{ width: "50%", marginBottom: "50px" }}
          component="img"
          height="200"
          image={imageLink + pictureName}
          alt="Остановка"
        />
      </Grid>
      <Grid item md={3} xs={12} className="buttonContainer">
        {
          <Button
            startIcon={<AutoFixHighIcon />}
            color="primary"
            variant="contained"
            onClick={handleOpenModal}
          >
            {t("admin.changeImg")}
          </Button>
        }
      </Grid>

      <div>
        <Modal
          open={open}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {t("admin.loadImg")}
            </Typography>
            <Input
              name="image"
              fullWidth
              required
              variant="outlined"
              width={100}
              height={100}
              type="file"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={(e) => savePicture(e)}
            >
              {t("save")}
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleCloseModal}
            >
              {t("close")}
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
};
