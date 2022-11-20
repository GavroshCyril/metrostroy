import React from "react";
import "./Map.css";
import MapImg from "../../Assets/Images/shemaMetro02.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red, blue, green } from "@mui/material/colors";
import Lang from "../../components/Lang";

const Map = () => {
  const RedBranch = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    fontSize: 12,
    backgroundColor: red[700],
    "&:hover": {
      backgroundColor: red[900],
    },
  }));

  const BlueBranch = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    fontSize: 12,
    backgroundColor: blue[700],
    "&:hover": {
      backgroundColor: blue[900],
    },
  }));

  const GreenBranch = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    fontSize: 10,
    backgroundColor: green[400],
    "&:hover": {
      backgroundColor: green[600],
    },
  }));

  return (
    <div className="MapWrapper">
      <div className="MapImg">
        <div className="Map-container">
          <h2 className="title">Схема минского метрополитена</h2>
        </div>
        <Lang />
      </div>
      <Stack direction="row" spacing={2}>
        <RedBranch
          className="redBranch branch"
          variant="contained"
          href="/redbranch"
        >
          Автозаводская линия
        </RedBranch>
        <BlueBranch
          className="blueBranch branch"
          variant="contained"
          href="/bluebranch"
        >
          Московская линия
        </BlueBranch>

        <GreenBranch
          className="greenBranch branch"
          variant="contained"
          href="/greenbranch"
        >
          Зеленолужская линия
        </GreenBranch>
      </Stack>

      <div className="Map-info">
        <img className="content-img" src={MapImg} alt="" />
      </div>
    </div>
  );
};

export default Map;
