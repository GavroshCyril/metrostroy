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
      <div className="Admin">
        <div className="Map-container">
          <h2 className="title">{t("admin.panel")}</h2>
        </div>
        <Lang />
      </div>
      <div className="mainPage">
        <HomeAdmin />
      </div>
    </div>
  );
};

export default Admin;
