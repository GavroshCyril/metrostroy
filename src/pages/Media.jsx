import React from "react";
import "./Media.css";
import ShemaMetro from "../Assets/Images/shema-metro.jpg";

const Media = () => {
  return (
    <div>
      <img src={ShemaMetro} alt="Схема метро" className="shema" />
    </div>
  );
};

export default Media;
