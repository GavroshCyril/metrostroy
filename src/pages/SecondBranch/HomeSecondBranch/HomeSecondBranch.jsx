import React from "react";
import "./HomeSecondBranch.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Slider from "../../../components/ImageSlider/SliderSecond";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Kamennaya from "../../../Assets/Images/RedBranch/kamennaya/kamennaya01.jpg";
import Sportiwnaya from "../../../Assets/Images/RedBranch/Sportivnaya/sportivnaya-03.jpg";
import Frunzenskaya from "../../../Assets/Images/RedBranch/frunzenskaya/frunzenskaya01.jpg";
import Partizanskaya from "../../../Assets/Images/RedBranch/partizanskaya/partizanskaya01.jpg";

const Home = () => {
  const [t] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="HomeFirstBranch">
      <Slider />

      <Stack className="input-lang" spacing={2} direction="row">
        <Button onClick={() => changeLanguage("en")} variant="contained">
          ENG
        </Button>
        <Button onClick={() => changeLanguage("bel")} variant="contained">
          БЕЛ
        </Button>
        <Button
          color="primary"
          onClick={() => changeLanguage("ru")}
          variant="contained"
        >
          РУС
        </Button>
      </Stack>

      <div className="content">
        <div className="description">
          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Kamennaya}
              alt="Каменная горка"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("sBranch.kamTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.kamSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Sportiwnaya}
              alt="Спортивная"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("sBranch.sportTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.sportSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Frunzenskaya}
              alt="Фрунзенская"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("sBranch.frunzTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.frunzSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Partizanskaya}
              alt="Партизанская"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("sBranch.partizTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.partizSubTitle")}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
