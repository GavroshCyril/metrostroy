import React from "react";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Главная",
      icon: <FaTh />,
    },
    {
      path: "/map",
      name: "Карта метрополитена",
      icon: <FaUserAlt />,
    },
    {
      path: "/media",
      name: "Медиа",
      icon: <FaRegChartBar />,
    },
    {
      path: "/resources",
      name: "Интернет-ресурсы",
      icon: <FaCommentAlt />,
    },
    {
      path: "/contacts",
      name: "Контакты",
      icon: <FaShoppingBag />,
    },
    {
      path: "/search",
      name: "Поиск по сайту",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Logo</h1>
        </div>
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
