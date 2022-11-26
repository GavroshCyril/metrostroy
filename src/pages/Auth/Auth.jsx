import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios"
import JwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

import { useTranslation } from "react-i18next";
import { update } from '../../store/userSlice'

const Search = () => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [ userName, setUserName ] = useState();
  const [ userPassword, setUserPassword ] = useState();
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:3000/user/login", {
        name: userName,
        password: userPassword
    })
    .then((responce) => {
        if (responce.status === 200) {
            const token = responce.data && responce.data.accessToken
            const refreshToken = responce.data && responce.data.refreshToken
            const decoded = JwtDecode(token);
            const user = {
              id: decoded.id,
              name: decoded.name,
              role: decoded.role,
            }

            localStorage.setItem("token", token)
            localStorage.setItem("refreshToken", refreshToken)
         
            dispatch(update(user))
            navigate('/');
        } else {
            console.log("Something went wrong", responce)
        }
    })
    .catch((err) => {
        console.log("err", err)

    })
}

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
          onChange={(event) => {
            setUserName(event.target.value)
          }}
        />
        <TextField
          label={t("login.password")}
          fullWidth={true}
          size="small"
          margin="normal"
          type="password"
          className="auth-form__input"
          onChange={(event) => {
            setUserPassword(event.target.value)
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
          onClick={(event) => {
            login(event)
          }}
        >
          {t("login.logIn")}
        </Button>
      </form>
    </div>
  );
};

export default Search;
