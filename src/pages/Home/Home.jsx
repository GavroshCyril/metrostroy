import React from "react";
import "./Home.css";
import logoMetro from "../../Assets/Images/minsk-metro-logo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Home = () => {
  const [t] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="Home">
      <div className="Home-container">
        <div className="main-img">
          <img src={logoMetro} className="logo" alt="Misk Metro Logo" />
        </div>
        <span className="Home-title">
          {t("home.title")} <br />
          <span>{t("home.subtitle")} </span>
        </span>

        <Stack className="input-lang" spacing={2} direction="row">
          <Button onClick={() => changeLanguage("en")} variant="contained">
            ENG
          </Button>
          <Button
            color="primary"
            onClick={() => changeLanguage("ru")}
            variant="contained"
          >
            РУС
          </Button>
        </Stack>
        <div className="card-container">
          <Link href="/" underline="none" className="Link">
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
            </Card>
          </Link>

          <Link href="/" underline="none">
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
            </Card>
          </Link>
          <Link href="/" underline="none">
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
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
