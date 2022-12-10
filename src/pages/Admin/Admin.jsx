import React from "react";
import "./Admin.css";
import { HomeAdmin } from "./HomeAdmin";
import { useTranslation } from "react-i18next";
import Lang from "../../components/HeaderOptions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const Admin = () => {
  const [t] = useTranslation();

  return (
    <div className="Admin-container">
      <div className="Map">
        <div className="Map-container">
          <h2 className="title">{t("admin.panel")}</h2>
        </div>
        <Lang />
      </div>
      <div className="mainPage">
        <div className="admin-info">
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="warning">
              Перед началом администрирования веб-приложением, ознакомьтесь с
              руководством администратора, кликнув на{" "}
              <Link
                href="../../Assets/documents/admin-guide.docx"
                underline="none"
                download
              >
                «Руководство администратора»
              </Link>
            </Alert>
          </Stack>
        </div>
        <HomeAdmin />
      </div>
    </div>
  );
};

export default Admin;
