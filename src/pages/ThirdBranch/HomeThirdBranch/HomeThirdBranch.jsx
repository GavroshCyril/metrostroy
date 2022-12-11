import React from "react";
import "./HomeThirdBranch.css";
import { useTranslation } from "react-i18next";
import Slider from "../../../components/ImageSlider/ThirdSlider/SliderThird";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Lang from "../../../components/HeaderOptions";

import Vokzalnaya from "../../../Assets/Images/GreenBranch/vokzalnaya/vokzalnaya02.jpg";
import Bogushevicha from "../../../Assets/Images/GreenBranch/bogushevicha/bogushevicha02.jpg";
import Yubileynaja from "../../../Assets/Images/GreenBranch/yubileynaya/yubileynaya01.jpg";
import Sloboda from "../../../Assets/Images/GreenBranch/sloboda/sloboda01.jpg";

const Home = () => {
  const [t] = useTranslation();

  return (
    <div className="HomeFirstBranch">
      <Slider />

      <Lang />

      <div className="content">
        <h2 className="usefull-title">Полезные ссылки:</h2>
        <div className="description">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={Vokzalnaya}
              alt="Вокзальная"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("tBranch.vokzTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("tBranch.vokzSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
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
          </Card>

          <Card sx={{ maxWidth: 345 }}>
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
          </Card>

          <Card sx={{ maxWidth: 345 }}>
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
