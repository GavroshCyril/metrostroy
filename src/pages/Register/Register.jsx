import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, TextField, Button } from "@mui/material";
import Axios from "axios";
import JwtDecode from "jwt-decode";
import { useNavigate, Link } from "react-router-dom";
import "../Auth/Auth.css";
import { useTranslation } from "react-i18next";
import { update } from "../../store/userSlice";
import showPwdImg from "../Auth/showPassword.svg";
import hidePwdImg from "../Auth/hidePassword.svg";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";

const Register = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userPasswordDirty, setUserPasswordDirty] = useState(false);
  const [userNameError, setUserNameError] = useState("Придумайте логин");
  const [formValid, setFormValid] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  useEffect(() => {
    if (userNameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userNameError]);

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

  const bluerHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;
      case "userPassword":
        setUserPasswordDirty(true);
        break;
    }
  };

  const register = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3000/user", {
      name: userName,
      password: userPassword,
      confirmPassword: confirmPassword,
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
          // navigate("/admin");
        } else {
          console.log("Something went wrong", responce);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getInputStatus = () => {
    return pwd.length > 0 ? <PasswordStrengthMeter password={pwd} /> : "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверяем совпадение пароля и подтверждения пароля
    if (password !== confirmPassword) {
      // Выкидываем ошибку на уровне фронта
      setErrorMessage("Пароль и подтверждение пароля не совпадают!");

      // // Выполняем обработку ошибки на бэкенде
      // try {
      //   const response = await Axios.post("/", {
      //     password,
      //     confirmPassword,
      //   });
      //   alert(response.data.message); // Выводим сообщение об успехе
      // } catch (error) {
      //   console.error(error);
      //   setErrorMessage(error.response.data.error);
      // }
    } else {
      // Если пароль и подтверждение пароля совпадают, записываем данные в базу данных
      // запись в MySQL ...
      try {
        await Axios.post("http://localhost:3000/user", { userName, password, confirmPassword });
        navigate("/auth")
      } catch (error) {
        console.error(error);
        setErrorMessage(error.response.data.error);
      }
    }
  };
  return (
    <div className="auth-form">
      <Typography variant="h3" component="div">
        {t("register.title")}
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="auth-form__subtitle"
      >
        {t("register.subTitle")}
      </Typography>
      <form onSubmit={handleSubmit} className="auth-form__form">
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
            /* onChange={(e) => {
            userPasswordHandler(e);
          }} */
            /* onChange={(e) => setPwd(e.target.value)}
            value={pwd} */
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            title={isRevealPwd ? "Скрыть пароль" : "Показать пароль"}
            src={isRevealPwd ? hidePwdImg : showPwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </div>

        {getInputStatus()}

        {/* <div className="pwd-container"> */}
        <TextField
          onBlur={(e) => bluerHandler(e)}
          label={t("register.repeatPass")}
          name="confirmPassword"
          fullWidth={true}
          size="small"
          margin="normal"
          type={isRevealPwd ? "text" : "password"}
          className="auth-form__input"
          /* onChange={(e) => {
            userPasswordHandler(e);
          }} */
          /*  onChange={(e) => setPwd(e.target.value)} */
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorMessage && <div className="error">{errorMessage}</div>}
        {/* </div> */}
        <Button
          disabled={!formValid}
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
          // onClick={(event) => {
          //   register(event);
          // }}
        >
          {t("register.logIn")}
        </Button>
      </form>

      <small>
        Уже есть аккаунт? <Link to="/auth">Войти в личный кабинет</Link>
      </small>
    </div>
  );
};

export default Register;
