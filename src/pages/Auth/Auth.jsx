import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import Axios from "axios";
import JwtDecode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import { useTranslation } from "react-i18next";
import { update } from "../../store/userSlice";
import showPwdImg from "./showPassword.svg";
import hidePwdImg from "./hidePassword.svg";

const Search = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userPasswordDirty, setUserPasswordDirty] = useState(false);
  const [userNameError, setUserNameError] = useState(
    "Поле с логином не может быть пустым"
  );
  const [userPasswordError, setUserPasswordError] = useState(
    "Поле с паролем не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (userNameError || userPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError, userPasswordError]);

  const userNameHandler = (e) => {
    setUserName(e.target.value);
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(e.target.value)) {
      setUserNameError("Неккоректный логин");

      if (!e.target.value) {
        setUserNameError("Поле с паролем не может быть пустым");
      }
    } else {
      setUserNameError("");
    }
  };

  const userPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 15) {
      setUserPasswordError("Пароль должен быть длинее 2 и меньше 15 символов");
      if (!e.target.value) {
        setUserPasswordError("Поле с паролем не может быть пустым");
      } else {
        setUserPasswordError("");
      }
    }
  };

  const bluerHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
    }
  };

  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:3000/user/login", {
      name: userName,
      password: userPassword,
    })
      .then((responce) => {
        if (responce.status === 200) {
          const token = responce.data && responce.data.accessToken;
          const refreshToken = responce.data && responce.data.refreshToken;
          const decoded = JwtDecode(token);
          const user = {
            id: decoded.id,
            name: decoded.name,
            role: decoded.role,
          };

          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);

          dispatch(update(user));
          navigate("/admin");
        } else {
          console.log("Something went wrong", responce);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  return (
    <div className="auth-form">
      <Typography variant="h3" component="div">
        {t("admin.title")}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="auth-form__subtitle"
      >
        {t("admin.subTitle")}
      </Typography>
      <form className="auth-form__form">
        {userNameDirty && userNameError && (
          <div style={{ color: "red" }}>{userNameError}</div>
        )}
        <TextField
          onBlur={(e) => bluerHandler(e)}
          label={t("admin.login")}
          name="userName"
          fullWidth={true}
          size="small"
          margin="normal"
          className="auth-form__input"
          onChange={(e) => {
            userNameHandler(e);
          }}
        />
        {userPasswordDirty && userPasswordError && (
          <div style={{ color: "red" }}>{userPasswordError}</div>
        )}
        <div className="pwd-container">
          <TextField
            onBlur={(e) => bluerHandler(e)}
            label={t("admin.password")}
            name="userPassword"
            fullWidth={true}
            size="small"
            margin="normal"
            type={isRevealPwd ? "text" : "password"}
            className="auth-form__input"
            /*  onChange={(e) => {
            userPasswordHandler(e);
          }} */
            onChange={(e) => setPwd(e.target.value)}
          />

          <img
            title={isRevealPwd ? "Скрыть пароль" : "Показать пароль"}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </div>
        <Button
          /*   disabled={!formValid} */
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 3,
          }}
          onClick={(event) => {
            login(event);
          }}
        >
          {t("admin.logIn")}
        </Button>
        <small>
          Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
        </small>
      </form>
      
      <small >Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></small>
    </div>
  );
};

export default Search;
