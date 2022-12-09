import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ContactIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/AccountTree";
import MediaIcon from "@mui/icons-material/MenuBook";
import MapIcon from "@mui/icons-material/MapOutlined";
import UsefulLink from "@mui/icons-material/AttachFileOutlined";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = ({ children }) => {
  const [t] = useTranslation();
  const menuItem = [
    {
      path: "/",
      name: t("nav.home"),
      icon: <HomeIcon />,
    },

    {
      path: "/minskmetroprojects",
      name: t("nav.projects"),
      icon: <SearchIcon />,
    },
    {
      path: "/firstline",
      name: t("nav.stage"),
      icon: <MediaIcon />,
    },
    {
      path: "/metroschema",
      name: t("nav.map"),
      icon: <MapIcon />,
    },

    {
      path: "/kompozitions",
      name: t("nav.kompozition"),
      icon: <ContactIcon />,
    },
    {
      path: "/info",
      name: t("nav.info"),
      icon: <UsefulLink />,
    },
    {
      path: "/admin",
      name: t("nav.panel"),
      icon: <UserIcon />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
        <div style={{ marginLeft: isOpen ? "45%" : "33%" }} className="bars">
          <MenuIcon onClick={toggle} />
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? "200px" : "50px" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
