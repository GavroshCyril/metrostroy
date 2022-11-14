import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Auth.css";

const Search = () => {
  return (
    <div className="auth-form">
      <Typography variant="h3" component="div">
        Авторизируйтесь
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="auth-form__subtitle"
      >
        чтобы получить доступ к кабинету администратора
      </Typography>
      <form className="auth-form__form">
        <TextField
          label="Логин"
          fullWidth={true}
          size="small"
          margin="normal"
          className="auth-form__input"
        />
        <TextField
          label="Пароль"
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
          Войти в личный кабинет
        </Button>
      </form>
    </div>
  );
};

export default Search;
