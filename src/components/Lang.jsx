import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import i18n from "../i18n";

const Lang = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
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
  );
};

export default Lang;
