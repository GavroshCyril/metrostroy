import React, { useEffect, useCallback } from "react";
import JwtDecode from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { useRefresh } from '../hooks/useRefresh'
import { REFRESH_TOKEN_TIMEOUT } from './constants';
import { isUserLoggedIn, logout, update } from "../store/userSlice";



export const TokenManager = ({ children }) => {
  const { pathname } = useLocation();
  const onRefresh = useRefresh();
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem("refreshToken")
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(isUserLoggedIn);

  // const isUserLoggedIn = [
  //   "admin",
  // ].some((url) => pathname.includes(url));

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
    console.log("useEffect============");
    console.log("refreshToken", refreshToken);
    console.log("isLoggedIn", isLoggedIn);
    
    if (refreshToken && isLoggedIn) {
      const decoded = JwtDecode(refreshToken);

      
      if (decoded && decoded.exp && Date.now() >= decoded.exp * 1000) {
        console.log("RefreshToken expired");
      } else {
        console.log("decoded", decoded)
        const user = {
          id: decoded.id,
          name: decoded.name,
          role: decoded.role,
        }
        dispatch(update(user));
      }

      const id = setInterval(() => {
        tokenRefresh(refreshToken, id);
      }, REFRESH_TOKEN_TIMEOUT);
      return () => clearInterval(id);
    }
  }, [pathname, tokenRefresh, refreshToken, isUserLoggedIn])

  return <>{children}</>;
}