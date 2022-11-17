import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Auth.css";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [t] = useTranslation();
  return (
    <div className="auth-form">
      <Typography variant="h3" component="div">
        {t("login.title")}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="auth-form__subtitle"
      >
        {t("login.subTitle")}
      </Typography>
      <form className="auth-form__form">
        <TextField
          label={t("login.login")}
          fullWidth={true}
          size="small"
          margin="normal"
          className="auth-form__input"
        />
        <TextField
          label={t("login.password")}
          fullWidth={true}
          size="small"
          margin="normal"
          type="password"
          className="auth-form__input"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          {t("login.logIn")}
        </Button>
      </form>
    </div>
  );
};

export default Search;
