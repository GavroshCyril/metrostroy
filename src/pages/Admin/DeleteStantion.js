import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import Axios from "axios";
import {
  selectLocalizedState,
  selectLocale,
} from "../../store/localizationSlice";
import { useLocalisation } from "../../hooks/useLocalisation";
import { useLines } from "../../hooks/useLines";
import { StationsModal } from "./StationsModal";
import { useTranslation } from "react-i18next";

export const DeleteStantion = ({
  stationName,
  stationDescription,
  setStationDeleted,
  color = "transparent",
}) => {
  const [isChanging, setIsChanging] = useState(false);
  const locale = useSelector(selectLocale);
  // const [values, setValues] = useState({
  //   name: title
  // });
  const [t] = useTranslation();
  const [value, setValue] = useState();
  const [shouldReRender, setShouldReRender] = useState(false);
  const getLocalisation = useLocalisation();
  const getLines = useLines();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const deleteStation = () => {
    Axios.delete(
      `http://localhost:3000/station/${stationName}/${stationDescription}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log("res.data", res.data);
        setIsChanging(false);
        setShouldReRender(true);
        setStationDeleted(stationName);
      }
    });
    setIsOpen(false);
  };

  useEffect(() => {
    getLocalisation();
    getLines()
      .then((localizationResult) => {})
      .catch((err) => {
        console.error("err", err);
      });
  }, [shouldReRender]);

  const content = <div>{t("sure")}</div>;

  return (
    <>
      <Grid
        item
        md={9}
        xs={12}
        sx={{
          backgroundColor: color,
        }}
      ></Grid>
      <Grid item md={3} xs={12} className="buttonContainer">
        <Button color="error" variant="contained" onClick={handleOpenModal}>
          {t("delete")}
        </Button>
      </Grid>
      <StationsModal
        header={t("deleteStation")}
        content={content}
        onSave={deleteStation}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};
