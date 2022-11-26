import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { useSelector } from 'react-redux';
import Axios from "axios"

import { isUserLoggedIn } from '../store/userSlice'

const HeaderOptions = () => {
  const navigate = useNavigate();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const isLoggedIn = useSelector(isUserLoggedIn)

  const onLogOut = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    Axios.delete(`http://localhost:3000/user/logout/${refreshToken}`)
    .then((res) => {
      if(res.status === 204) {
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        navigate("/auth");
      } else {
        console.log("Something went wrong during logout", res)
      }
    })
    .catch((err) => {
      console.error("Something went wrong during logout", err)
    })


  }

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
      {isLoggedIn ? 
        <Button
          color="error"
          onClick={() => onLogOut()}
          variant="contained"
        >
          ВЫХОД
        </Button>
        :
        <Button
          color="success"
          onClick={() => navigate('/auth')}
          variant="contained"
        >
          ЛОГИН
        </Button>
      }
      
    </Stack>
  );
};

export default HeaderOptions;
