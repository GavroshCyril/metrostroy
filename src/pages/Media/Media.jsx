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

const Media = () => {
  const [t] = useTranslation();

  return (
    <div className="Media-container">
      <div className="Map">
        <div className="Map-container">
          <h2 className="title">{t("media.title")}</h2>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <p className="Media-paragraph">
            <span> {t("media.let")} </span>
            {t("media.description01")}
          </p>
          <YoutubeEmbed embedId="K0ytyKc1vwE" />
        </div>
        <Stack direction="row" spacing={1} className="content-span">
          <Chip label={t("media.label")} />
        </Stack>
        <ImagesList />
        <p className="Media-desc"> {t("media.description02")}</p>
        <Alert severity="info">
          <AlertTitle>{t("media.infoTitle")}</AlertTitle>
          {t("media.infoSubtitle")}
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
              href="../../Assets/documents/history.docx"
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
