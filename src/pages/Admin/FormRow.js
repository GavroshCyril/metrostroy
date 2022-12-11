import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import Axios from "axios";
import {
  selectLocalizedState,
  selectLocale,
} from "../../store/localizationSlice";
import { useLocalisation } from "../../hooks/useLocalisation";
import CreateIcon from "@mui/icons-material/Create";
import { useTranslation } from "react-i18next";

export const FormRow = ({ title, name }) => {
  const [t] = useTranslation();
  const [isChanging, setIsChanging] = useState(false);
  const locale = useSelector(selectLocale);

  const [value, setValue] = useState(title);
  const [shouldReRender, setShouldReRender] = useState(false);
  const onLocalisation = useLocalisation();

  const saveTitle = () => {
    Axios.put("http://localhost:3000/localization", {
      locale: locale,
      value: value,
      category: name,
    }).then((res) => {
      if (res.status === 200) {
        setIsChanging(false);
        setShouldReRender(true);
      }
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
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
        <TextareaAutosize
          style={{ width: "50%" }}
          // fullWidth
          label=""
          // name="home_title"
          onChange={handleChange}
          required
          value={value}
          variant="outlined"
          type="text"
          readOnly={!isChanging}
        />
      </Grid>
      <Grid item md={3} xs={12} className="buttonContainer">
        {isChanging ? (
          <>
            <Button
              color="primary"
              variant="contained"
              onClick={(e) => saveTitle(e)}
            >
              {t("save")}
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setIsChanging(false)}
            >
              {t("cancel")}
            </Button>
          </>
        ) : (
          <Button
            startIcon={<CreateIcon />}
            color="primary"
            variant="contained"
            onClick={() => setIsChanging(true)}
          >
            {t("change")}
          </Button>
        )}
      </Grid>
    </>
  );
};
