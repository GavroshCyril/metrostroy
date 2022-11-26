import React from "react";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import ContactIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/AccountTree";
import MediaIcon from "@mui/icons-material/MenuBook";
import MapIcon from "@mui/icons-material/MapOutlined";
import UsefulLink from "@mui/icons-material/AttachFileOutlined";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Главная",
      icon: <HomeIcon />,
    },

    {
      path: "/search",
      name: "Проекты Минского метро (1969-1977)",
      icon: <SearchIcon />,
    },
    {
      path: "/media",
      name: "Первая очередь (1977-1984)",
      icon: <MediaIcon />,
    },
    {
      path: "/map",
      name: "Карта метрополитена",
      icon: <MapIcon />,
    },

    {
      path: "/contacts",
      name: "Выставочная экспозиция",
      icon: <ContactIcon />,
    },
    {
      path: "/resources",
      name: "Интернет-ресурсы",
      icon: <UsefulLink />,
    },
    {
      path: "/admin",
      name: "Панель администратора",
      icon: <UserIcon />,
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
