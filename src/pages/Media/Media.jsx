import React from "react";
import "./Media.css";
import ImagesList from "../../components/ImagineList/ImagesList";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import Stack from "@mui/material/Stack";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";
import Lang from "../../components/HeaderOptions";
const Media = () => {
  const [t] = useTranslation();

  return (
    <div className="Media-container">
      <div className="Map">
        <div className="Map-container">
          <h2 className="title">{t("search.title")}</h2>
        </div>
        <Lang />
      </div>
      <div className="content">
        <div className="description">
          <YoutubeEmbed embedId="K0ytyKc1vwE" />
          <p className="Media-paragraph">
            <span>{t("search.let")} </span>
            {t("search.description01")}
          </p>
        </div>
        <Stack direction="row" spacing={1} className="content-span">
          <Chip label={t("search.label")} />
        </Stack>
        <ImagesList />
        <p className="Media-desc"> {t("search.description02")}</p>
        <p className="Media-desc"> {t("search.description03")}</p>
        <p className="Media-desc"> {t("search.description04")}</p>

        <Alert severity="info" sx={{marginTop: "10px"}}>
          <AlertTitle>{t("search.infoTitle")}</AlertTitle>
          {t("search.infoSubtitle")}
        </Alert>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<PrintIcon />}>
            <Link
              href="https://metropoliten.by/o_metropolitene/history_of_the_development/?print=y"
              underline="none"
            >
              {t("printMaterial")}
            </Link>
          </Button>
          <Button variant="outlined" endIcon={<DownloadIcon />}>
            <Link
              href="../../Assets/documents/history.pdf"
              underline="none"
              download
            >
              {t("downloadMaterial")}
            </Link>
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Media;
