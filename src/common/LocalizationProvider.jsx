import React, { useEffect, useCallback } from "react";
import JwtDecode from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';
import { useRefresh } from '../hooks/useRefresh'
import { useLocalisation } from '../hooks/useLocalisation'

import { REFRESH_TOKEN_TIMEOUT } from './constants';

export const LocalizationProvider = ({ children }) => {
  const { pathname } = useLocation();
  const onRefresh = useRefresh();

  const onLocalisation = useLocalisation();
  
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken")

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

  }, [pathname, isUserLoggedIn])

  return <>{children}</>;
}