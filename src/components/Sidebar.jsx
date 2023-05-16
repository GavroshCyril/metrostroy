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
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isUserLoggedIn, isUserAdmin } from "../store/userSlice";

const Sidebar = ({ children }) => {
  const [t] = useTranslation();
  const isLoggedIn = useSelector(isUserLoggedIn);
  const isAdmin = useSelector(isUserAdmin);

  const routes = [
    {
      path: "/",
      name: t("nav.home"),
      icon: <HomeIcon />,
    },

    {
      path: "/project_of_minsk_metro",
      name: t("nav.projects"),
      icon: <SearchIcon />,
    },
    {
      path: "/first_queue",
      name: t("nav.stage"),
      icon: <MediaIcon />,
    },
    {
      path: "/map",
      name: t("nav.map"),
      icon: <MapIcon />,
    },

    {
      path: "/information",
      name: t("nav.kompozition"),
      icon: <ContactIcon />,
    },
    {
      path: "/resources",
      name: t("nav.info"),
      icon: <UsefulLink />,
    },
    {
      path: "/news",
      name: t("nav.news"),
      icon: <NewspaperIcon />,
    },
  ];

  const privateRoutes = [
    {
      path: "/admin",
      name: t("nav.panel"),
      icon: <UserIcon />,
    },
  ];

  let resultRoutes = [];

  if (isLoggedIn && isAdmin) {
    resultRoutes = routes.concat(privateRoutes);
  } else {
    resultRoutes = routes;
  }

  console.log("resultRoutes", resultRoutes);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="sidebar" style={{ width: isOpen ? "180px" : "65px" }} >
        <div className="link" onClick={toggle} >
          <MenuIcon />
        </div>

        {resultRoutes.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
          >
            <div className="icon">{item.icon}</div>
            <div
              className="link_text"
              style={{ opacity: isOpen ? "1" : "0", transition: "0.3s", marginTop: !isOpen ? "-25%" : null }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main style={{ marginLeft: isOpen ? "180px" : "50px" }}>{children}</main>
    </div>
  );
};

export default Sidebar;
