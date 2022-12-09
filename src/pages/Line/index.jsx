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
  const [t] = useTranslation();
  const state = useSelector(selectLocalizedState);
  console.log("state Home", state)
  
  const { pathname } = useLocation();
  console.log("pathname", pathname)

  const path = pathname.split("/");
  console.log("path", path[2])
  
  const currentLineName = path[2];
  console.log("currentLineName", currentLineName)

  const line = useSelector((state) => {
    return selectLine(state, currentLineName)
  });
  console.log("line00", line)
  console.log("line00", line && line.line_name)

  const stations = line && line.stations
  console.log("stations", stations)
  // const lineName 
  // console.log("line_name", line?.line_name)

  if (line) {
    console.log("line_name", line.line_name)
  }
  const imageLink = "http://localhost:3000/station/image/"
  // console.log("line00", state)

  return (
    <div className="HomeFirstBranch">
      <Slider lineName={line && line.line_name}/>

      <Lang />

      <div className="content">
        <div className="description">
          {stations && stations.map((station) => {
            console.log("station", station)
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
          

          {/* <Card sx={{ maxWidth: 345 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Bogushevicha}
              alt="Францишка Богушевича"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("tBranch.bogushTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("tBranch.bogushSubTitle")}
              </Typography>
            </CardContent>
          </Card> */}

          {/* <Card sx={{ maxWidth: 345 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Yubileynaja}
              alt="Юбилейная"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("tBranch.yubileyTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("tBranch.yubileySubTitle")}
              </Typography>
            </CardContent>
          </Card> */}

          {/* <Card sx={{ maxWidth: 345 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Sloboda}
              alt="Слобода"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("tBranch.slobodaTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("tBranch.slobodaSubTitle")}
              </Typography>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Line;
