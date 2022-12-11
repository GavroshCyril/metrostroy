import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import "./index.css";
import { useTranslation } from "react-i18next";
import Slider from "../../components/ImageSlider/ThirdSlider/SliderThird";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Lang from "../../components/HeaderOptions";

import Vokzalnaya from "../../Assets/Images/GreenBranch/vokzalnaya/vokzalnaya02.jpg";
import Bogushevicha from "../../Assets/Images/GreenBranch/bogushevicha/bogushevicha02.jpg";
import Yubileynaja from "../../Assets/Images/GreenBranch/yubileynaya/yubileynaya01.jpg";
import Sloboda from "../../Assets/Images/GreenBranch/sloboda/sloboda01.jpg";
import { selectLocalizedState } from "../../store/localizationSlice";

import { selectCurrentLineName, selectLine} from "../../store/linesSlice";

const Line = () => {
  const state = useSelector(selectLocalizedState);
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentLineName = path[2];

  const line = useSelector((state) => {
    return selectLine(state, currentLineName)
  });

  const stations = line && line.stations
  const imageLink = "http://localhost:3000/station/image/"

  return (
    <div className="HomeFirstBranch">
      <Slider lineName={line && line.line_name}/>

      <Lang />

      <div className="content">
        <div className="description">
          {stations && stations.map((station) => {
            return (
              <Card sx={{ maxWidth: 345 }} className="brach-card">
                <CardMedia
                  component="img"
                  height="250"
                  image={imageLink + station.station_picture}
                  alt="Вокзальная"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {state[station.station_name]}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {state[station.station_description]}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Line;
