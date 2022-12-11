import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { isUserLoggedIn } from "../store/userSlice";

const Sidebar = ({ children }) => {
  const [t] = useTranslation();
  const isLoggedIn = useSelector(isUserLoggedIn);

  const routes = [
    {
      path: "/",
      name: t("nav.home"),
      icon: <HomeIcon />,
    },

    {
      path: "/search",
      name: t("nav.projects"),
      icon: <SearchIcon />,
    },
    {
      path: "/media",
      name: t("nav.stage"),
      icon: <MediaIcon />,
    },
    {
      path: "/map",
      name: t("nav.map"),
      icon: <MapIcon />,
    },

    {
      path: "/contacts",
      name: t("nav.kompozition"),
      icon: <ContactIcon />,
    },
    {
      path: "/resources",
      name: t("nav.info"),
      icon: <UsefulLink />,
    }
  ];

  const privateRoutes = [
    {
      path: "/admin",
      name: t("nav.panel"),
      icon: <UserIcon />,
    },
  ]

  let resultRoutes = [];
  
  
  console.log("isLoggedIn0", isLoggedIn)
  if (isLoggedIn) {
    resultRoutes = routes.concat(privateRoutes)
  } else {
    resultRoutes = routes
  }
  console.log("resultRoutes", resultRoutes)

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "200px" : "50px" }}>
        <div style={{ marginLeft: isOpen ? "45%" : "33%" }} className="bars">
          <MenuIcon onClick={toggle} />
        </div>

        {resultRoutes.map((item, index) => (
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
