import React from "react";
import "./Resources.css";
import { useTranslation } from "react-i18next";
import Lang from "../../components/HeaderOptions";
import { Alert, Stack, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";

const Resources = () => {
  const [t] = useTranslation();
  return (
    <div className="ContactsWrapper">
      <div className="Resources">
        <div className="Map-container">
          <h2 className="title"> {t("nav.info")}</h2>
        </div>
        <Lang />
      </div>

     
      <div className="content">
        <h1>{t("resources.history")}</h1>
        <div className="description">
          <img
            src="https://metropoliten.by/images/o_metro/glav590.jpg"
            alt=""
          />
          <p className="resources-desc">
            {t("resources.desc01")}
            <br /> <br />
            {t("resources.desc02")}
            <br /> <br />
            {t("resources.desc03")}
          </p>
        </div>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<ForkLeftIcon />}>
            <Link href="/map" underline="none">
              {t("resources.map")}
            </Link>
          </Button>
        </Stack>
        <div className="content ">
          <h2 className="usefull-title"> {t("resources.usefullLinks")}</h2>
          <div className="resources-cards">
            
            <Link
              href="http://metrostroy.by/"
              underline="none"
              className="Link"
            >
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://sun9-56.userapi.com/impg/c858120/v858120669/21410a/xC6rE6eaytE.jpg?size=793x785&quality=96&sign=a3925e47dc6a7e207888613963bf112a&type=album"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {t("resources.minskMetroStroy")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>

            <Link
              href="https://metropoliten.by/"
              underline="none"
              className="Link"
            >
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Minsk_metro_logo.svg/1200px-Minsk_metro_logo.svg.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {t("resources.minskMetro")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>

            <Link
              href="https://president.gov.by/ru"
              underline="none"
              className="Link"
            >
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://konnyisportgomel.by/upload/iblock/694/%D0%A1%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%B8%D0%BA%D0%B0_7l4fJIv.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {t("resources.prezidenta")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>

            <Link href="https://pravo.by/" underline="none" className="Link">
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image="https://ohrana.gov.by/content/uploads/sites/8/2021/01/pravo-by-1024x1024.png"
                    alt="gportal pravo by"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {t("resources.portalRepBel")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            <Link
              href="https://minsk.gov.by/ru/"
              underline="none"
              className="Link"
            >
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="265"
                    image="https://p-shkola.by/upload/iblock/692/692e74bec18d633e873120b22bf601f7.jpg"
                    alt="portal mingorispolkom"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {t("resources.portalMinObr")}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        </div>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<PrintIcon />}>
            <Link
              href="https://metropoliten.by/o_metropolitene/?print=y"
              underline="none"
            >
              {t("printMaterial")}
            </Link>
          </Button>
          <Button variant="outlined" endIcon={<DownloadIcon />}>
            <Link
              href="../../Assets/documents/metro-history.docx"
              underline="none"
              download
            >
              {t("downloadMaterial")}
            </Link>
          </Button>
          <Button variant="outlined" endIcon={<DownloadIcon />}>
            <Link href="./schema.docx" underline="none" download>
              {t("resources.schema")}
            </Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Resources;
