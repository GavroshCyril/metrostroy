import React from "react";
import "./Resources.css";
import { useTranslation } from "react-i18next";
import Lang from "../../components/HeaderOptions";

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
    </div>
  );
};

export default Resources;
