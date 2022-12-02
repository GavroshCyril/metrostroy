import React from "react";
import "./Home.css";
import logoMetro from "../../Assets/Images/minsk-metro-logo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Lang from "../../components/HeaderOptions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectLocalizedState } from "../../store/localizationSlice";

const Home = () => {
  const [t] = useTranslation();
  const state = useSelector(selectLocalizedState);
  console.log("state", state)

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="main-img">
          <img src={logoMetro} className="logo" alt="Misk Metro Logo" />
        </div>
        <span className="Home-title">
          {state.home.title} <br />
          <span>{state.home.subtitle} </span>
        </span>
        <Lang />

        <div className="card-container">
          <Link href="/bluebranch" underline="none" className="Link">
            <Card sx={{ maxWidth: 500 }} className="Card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://metropoliten.by/upload/iblock/078/DSC_0144.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {t("home.moscowTitle")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t("home.moscowSubtitle")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack className="card-btn" spacing={2} direction="row">
                <Button variant="outlined"> {t("more")}</Button>
              </Stack>
            </Card>
          </Link>

          <Link href="/redbranch" underline="none">
            <Card sx={{ maxWidth: 500 }} className="Card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://metropoliten.by/upload/iblock/705/DSC_0802.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {t("home.avtozavodskayaTitle")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t("home.avtozavodskayaSubTitle")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack className="card-btn" spacing={2} direction="row">
                <Button variant="outlined">{t("more")}</Button>
              </Stack>
            </Card>
          </Link>
          <Link href="/greenbranch" underline="none">
            <Card sx={{ maxWidth: 500 }} className="Card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://metropoliten.by/upload/iblock/c72/ANT_4784-2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {t("home.zelenoluzskayaTitle")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t("home.zelenoluzskayaSubTitle")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Stack className="card-btn" spacing={2} direction="row">
                <Button variant="outlined">{t("more")}</Button>
              </Stack>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
