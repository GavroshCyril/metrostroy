import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import { useSelector } from "react-redux";
import Axios from "axios";

import { isUserLoggedIn } from "../store/userSlice";

import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const HeaderOptions = () => {
  const WhiteBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[50]),

    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: grey[300],
    },
  }));

  const navigate = useNavigate();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isLoggedIn = useSelector(isUserLoggedIn);

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
  };

  return (
    <Stack className="input-lang" spacing={2} direction="row">
      <WhiteBtn onClick={() => changeLanguage("en")} variant="contained">
        ENG
      </WhiteBtn>
      <WhiteBtn onClick={() => changeLanguage("bel")} variant="contained">
        БЕЛ
      </WhiteBtn>
      <WhiteBtn
        color="primary"
        onClick={() => changeLanguage("ru")}
        variant="contained"
      >
        РУС
      </WhiteBtn>
      {isLoggedIn ? (
        <Button onClick={() => onLogOut()} variant="contained">
          ВЫХОД
        </Button>
      ) : (
        <Button onClick={() => navigate("/auth")} variant="contained">
          ЛОГИН
        </Button>
      )}
    </Stack>
  );
};

export default HeaderOptions;
