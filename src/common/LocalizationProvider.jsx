import React, { useEffect, useCallback } from "react";
import JwtDecode from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';
import { useRefresh } from '../hooks/useRefresh'
import { useLocalisation } from '../hooks/useLocalisation'

import { REFRESH_TOKEN_TIMEOUT } from './constants';
import { useLines } from "../hooks/useLines";

export const LocalizationProvider = ({ children }) => {
  const { pathname } = useLocation();
  const onRefresh = useRefresh();

  const onLocalisation = useLocalisation();
  
  const navigate = useNavigate();
  
  const refreshToken = localStorage.getItem("refreshToken")
  const onLines = useLines();

  const isUserLoggedIn = [
    "admin",
  ].some((url) => pathname.includes(url));

  useEffect(() => {
      onLocalisation()
      .then((localizationResult) => {
        console.log('localizationResult 000', localizationResult)
      })
      .catch((err) => {
        console.error('err', err)
      })
    //   console.log('localizationResult', localizationResult)
    //   tokenRefresh(refreshToken, id);

  // }, [pathname])
  }, [])

  useEffect(() => {
    onLines()
    .then((linesResult) => {
      console.log('onLines 000', linesResult)
    })
    .catch((err) => {
      console.error('err', err)
    })
  //   console.log('localizationResult', localizationResult)
  //   tokenRefresh(refreshToken, id);

  }, [])

  return <>{children}</>;
}