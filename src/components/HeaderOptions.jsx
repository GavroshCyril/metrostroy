import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import "./HeaderOptions.css";
import { useTranslation } from "react-i18next";
import { isUserLoggedIn, logout } from "../store/userSlice";

import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { update } from "../store/localizationSlice";

const HeaderOptions = () => {
  const [t] = useTranslation();

  const WhiteBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),

    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[300],
    },
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    dispatch(update(lng));
  };

  const isLoggedIn = useSelector(isUserLoggedIn);
  console.log("isLoggedIn", isLoggedIn)

  const onLogOut = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    Axios.delete(`http://localhost:3000/user/logout/${refreshToken}`)
      .then((res) => {
        if (res.status === 204) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          navigate("/auth");
        } else {
          console.log("Something went wrong during logout", res);
        }
      })
      .catch((err) => {
        console.error("Something went wrong during logout", err);
      });
    console.log("dispatch logout")
    dispatch(logout());
  };

  return (
    <Stack className="input-lang" spacing={2} direction="row">
      <WhiteBtn onClick={() => changeLanguage("en")} variant="contained">
        ENG
      </WhiteBtn>
      <WhiteBtn onClick={() => changeLanguage("bel")} variant="contained">
        {t("bel")}
      </WhiteBtn>
      <WhiteBtn
        color="primary"
        onClick={() => changeLanguage("ru")}
        variant="contained"
      >
        {t("ru")}
      </WhiteBtn>
      {isLoggedIn ? (
        <Button onClick={() => onLogOut()} variant="contained">
          {t("logout")}
        </Button>
      ) : (
        <Button onClick={() => navigate("/auth")} variant="contained">
          {t("login")}
        </Button>
      )}
    </Stack>
  );
};

export default HeaderOptions;
