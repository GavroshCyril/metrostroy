import React, { useEffect, useCallback } from "react";
import JwtDecode from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';
import { useRefresh } from '../hooks/useRefresh'
import { REFRESH_TOKEN_TIMEOUT } from './constants';

export const TokenManager = ({ children }) => {
  const { pathname } = useLocation();
  const onRefresh = useRefresh();
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken")

  const isUserLoggedIn = [
    "admin",
  ].some((url) => pathname.includes(url));

  const tokenRefresh = useCallback(
    (userJwt, id) => {
      onRefresh(userJwt).catch((error) => {
        console.error(
          `The process of refreshing Jwt token has been failed with error: ${error}`
        );
        clearInterval(id);
        navigate('/');
      });
    },
    [navigate, onRefresh]
  );

  useEffect(() => {
    if (refreshToken && isUserLoggedIn) {
      const decoded = JwtDecode(refreshToken);
  
      if (decoded && decoded.exp && Date.now() >= decoded.exp * 1000) {
        console.log("RefreshToken expired");
      }

      const id = setInterval(() => {
        tokenRefresh(refreshToken, id);
      }, REFRESH_TOKEN_TIMEOUT);
      return () => clearInterval(id);
    }
  }, [pathname, tokenRefresh, refreshToken, isUserLoggedIn])

  return <>{children}</>;
}