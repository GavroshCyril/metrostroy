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
import Link from "@mui/material/Link";
import Lang from "../../../components/HeaderOptions";

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
      <Lang />

      <div className="content">
        <div className="description">
          <Card sx={{ maxWidth: 345 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Kamennaya}
              alt="Каменная горка"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="infoName"
              >
                {t("sBranch.kamTitle")}
                {/* <Stack className="card-btnBranch" spacing={2} direction="row">
                  <Button variant="outlined">{t("more")}</Button>
                </Stack> */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.kamSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 345 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Sportiwnaya}
              alt="Спортивная"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="infoName"
              >
                {t("sBranch.sportTitle")}
                {/* <Stack className="card-btnBranch" spacing={2} direction="row">
                  <Button variant="outlined">{t("more")}</Button>
                </Stack> */}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("sBranch.sportSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Link href="/frunzenskaya" underline="none">
            <Card sx={{ maxWidth: 345 }} className="brach-card">
              <CardMedia
                component="img"
                height="250"
                image={Frunzenskaya}
                alt="Фрунзенская"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="infoName"
                >
                  {t("sBranch.frunzTitle")}
                  <Stack className="card-btnBranch" spacing={2} direction="row">
                    <Button variant="outlined">{t("more")}</Button>
                  </Stack>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("sBranch.frunzSubTitle")}
                </Typography>
              </CardContent>
            </Card>
          </Link>

          <Link href="/parizanskaya" underline="none">
            <Card sx={{ maxWidth: 345 }} className="brach-card">
              <CardMedia
                component="img"
                height="250"
                image={Partizanskaya}
                alt="Партизанская"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="infoName"
                >
                  {t("sBranch.partizTitle")}
                  <Stack className="card-btnBranch" spacing={2} direction="row">
                    <Button variant="outlined">{t("more")}</Button>
                  </Stack>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t("sBranch.partizSubTitle")}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
