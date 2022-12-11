import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import Link from "@mui/material/Link";
import Lang from "../../components/HeaderOptions";
import "./Frunzenskaya.css";

const Home = () => {
  const [t] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="HomeFirstBranch">
      <Lang />

      <div className="content">
        <h1 className="title">fsdff</h1>
        <div className="description">
          {" "}
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
                href="../../Assets/documents/redBranch/frunzenskaya.docx"
                underline="none"
                download
              >
                {t("downloadMaterial")}
              </Link>
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
