import React from "react";
import "./HomeFirstBranch.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import Slider from "../../../components/ImageSlider/Slider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Grushevka from "../../../Assets/Images/BlueBranch/grushevka/grushevka02.jpg";
import Malinovka from "../../../Assets/Images/BlueBranch/malinovka/malinovka02.jpg";
import Petrowshcina from "../../../Assets/Images/BlueBranch/petrowshcina/petrowshcina01.jpg";
import Michalowo from "../../../Assets/Images/BlueBranch/michalowo/michalowo-01.jpg";

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
              image={Malinovka}
              alt="Малиновка"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("fBranch.malTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("fBranch.malSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Petrowshcina}
              alt="Петровщина"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("fBranch.petroTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("fBranch.petroSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Michalowo}
              alt="Михалово"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("fBranch.michTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("fBranch.michSubTitle")}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ maxWidth: 300 }} className="brach-card">
            <CardMedia
              component="img"
              height="250"
              image={Grushevka}
              alt="Грушевка"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t("fBranch.grushTitle")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t("fBranch.grushSubTitle")}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
