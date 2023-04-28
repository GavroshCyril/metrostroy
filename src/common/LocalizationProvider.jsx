import React, { useEffect, useCallback } from "react";
import JwtDecode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { useRefresh } from "../hooks/useRefresh";
import { useLocalisation } from "../hooks/useLocalisation";

import { REFRESH_TOKEN_TIMEOUT } from "./constants";
import { useLines } from "../hooks/useLines";

export const LocalizationProvider = ({ children }) => {
  const { pathname } = useLocation();
  const onRefresh = useRefresh();
  const onLocalisation = useLocalisation();
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken");
  const onLines = useLines();

  const isUserLoggedIn = ["admin"].some((url) => pathname.includes(url));

  useEffect(() => {
    onLocalisation()
      .then((localizationResult) => {})
      .catch((err) => {
        console.error("err", err);
      });

    // }, [pathname])
  }, []);

  useEffect(() => {
    onLines()
      .then((linesResult) => {})
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return <>{children}</>;
};
