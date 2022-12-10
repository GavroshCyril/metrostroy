import React from "react";
import "./Search.css";
import { useTranslation } from "react-i18next";
import Lang from "../../components/HeaderOptions";
import Prospect from "../../Assets/Images/UsefullImages/prospect01.jpg";
import Rasporyazenie from "../../Assets/Images/UsefullImages/rasporyazenie01.jpg";
import Prikaz from "../../Assets/Images/UsefullImages/prikaz01.jpg";
import SienceMap from "../../Assets/Images/UsefullImages/sienceMap.jpg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import Link from "@mui/material/Link";

const Search = () => {
  const [t] = useTranslation();
  return (
    <div className="ContactsWrapper">
      <div className="Search">
        <div className="Map-container">
          <h2 className="title"> {t("media.title")}</h2>
        </div>
        <Lang />
      </div>
      <div className="content">
        <p>{t("media.description01")}</p>
        <div className="description">
          <div className="project-img">
            <img src={Prospect} alt="Ленинский проспект в 70 годах" />
            <Stack direction="row" spacing={1}>
              <Chip className="project-label" label={t("media.leninprosp")} />
            </Stack>
          </div>
          <p className="project-paragraph">
            {t("media.description02")}
            <br /> <br />
            {t("media.description03")}
          </p>
        </div>

        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="warning">
            <AlertTitle>{t("media.alertTitle")}</AlertTitle>
            {t("media.alertDesc01")}
            <b> {t("media.alertDesc02")} </b>
          </Alert>
        </Stack>
        <div className="first-description-info">
          <p>
            {t("media.description04")}
            <b> {t("media.description04bold")} </b>, {t("media.description05")}
          </p>
          <img
            className="info-img"
            src={Rasporyazenie}
            alt="Распоряжение о создании метро 6 июля 1976 года"
          />
          <img
            className="info-img"
            src={Prikaz}
            alt="Приказ о строительсве метро"
          />
        </div>
        <div className="second-description-info">
          <img
            className="second-info-img"
            src={SienceMap}
            alt="Распоряжение о создании метро 6 июля 1976 года"
          />
          <Stack direction="row" spacing={1}>
            <Chip className="project-label" label={t("media.perspectiva")} />
          </Stack>
        </div>
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

export default Search;
