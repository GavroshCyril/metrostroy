import React from "react";
import "./HomeFirstBranch.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Slider from "../../../components/ImageSlider/Slider";

const Home = () => {
  const [t] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="HomeFirstBranch">
      <Slider />

      <Stack className="input-lang" spacing={2} direction="row">
        <Button onClick={() => changeLanguage("en")} variant="contained">
          ENG
        </Button>
        <Button onClick={() => changeLanguage("bel")} variant="contained">
          БЕЛ
        </Button>
        <Button
          color="primary"
          onClick={() => changeLanguage("ru")}
          variant="contained"
        >
          РУС
        </Button>
      </Stack>
      <div className="content">{t("contact.label")}</div>
    </div>
  );
};

export default Home;
