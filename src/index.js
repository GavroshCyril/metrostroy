import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import store from './store/store'
import 'react-tooltip/dist/react-tooltip.css'
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(38,65,103)', // задаем розовый цвет для основного цвета
            contrastText: "#ffffff"
        },
        background: {
            default: '#fffefe', // задаем белый цвет фона
        },
    },

});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
