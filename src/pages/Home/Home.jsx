import React from "react";
import "./Home.css";
import logoMetro from "../../Assets/Images/minsk-metro-logo.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="main-img">
          <img src={logoMetro} className="logo" alt="" />
        </div>
        <span className="Home-title">
          Веб-приложение <span> Минского метрополитена</span>
        </span>
      </div>
    </div>
  );
};

export default Home;
