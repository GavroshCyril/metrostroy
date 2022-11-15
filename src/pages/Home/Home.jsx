import React from "react";
import "./Home.css";
import logoMetro from "../../Assets/Images/minsk-metro-logo.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Link from "@mui/material/Link";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="main-img">
          <img src={logoMetro} className="logo" alt="Misk Metro Logo" />
        </div>
        <span className="Home-title">
          Вирутальный музей <br />
          <span> Минского метрополитена</span>
        </span>

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
                    Московская <br /> (1-ая линия метро)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Московская линия (1-я линия) - первая линия Минского
                    метрополитена, открыта 30 июня 1984г. Линия длиной 19,2 км
                    включает пятнадцать станций. Московская линия почти целиком
                    проходит под главной магистралью города
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
                    Автозаводская <br /> (2-ая линия метро)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Автозаводская линия (2-я линия) - вторая линия Минского
                    метрополитена, открыта 31 декабря 1990 года. Сейчас линия
                    длиной 18,1 км включает четырнадцать станций и пересекает
                    Минск с юго-востока на запад
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
                    Зеленолужская <br /> (3-ая линия метро)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Зеленолужская линия (3-я линия) - третья линия Минского
                    метрополитена, открыта 6 ноября 2020 года. Сейчас линия
                    длиной 3,53 км включает четыре станции и будет пересекать
                    Минск с юга на север.
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
