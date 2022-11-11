import React from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ContactIcon from "@mui/icons-material/CallOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MediaIcon from "@mui/icons-material/CameraAltOutlined";
import MapIcon from "@mui/icons-material/MapOutlined";
import UsefulLink from "@mui/icons-material/AttachFileOutlined";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Главная",
      icon: <HomeIcon />,
    },
    {
      path: "/map",
      name: "Карта метрополитена",
      icon: <MapIcon />,
    },
    {
      path: "/media",
      name: "Медиа",
      icon: <MediaIcon />,
    },
    {
      path: "/resources",
      name: "Интернет-ресурсы",
      icon: <UsefulLink />,
    },
    {
      path: "/contacts",
      name: "Контакты",
      icon: <ContactIcon />,
    },
    {
      path: "/search",
      name: "Поиск по сайту",
      icon: <SearchIcon />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
