import React from "react";
import "./Map.css"; /* 
import MapImg from "../../Assets/Images/mapMetro.jpg"; */
import MapLabel from "../../Assets/Images/shema.jpg";

const Map = () => {
  return (
    <div className="MapWrapper">
      <div className="Map">
        <div className="Map-container">
          <h2 className="title">
            Схема развития минского метрополитена и рельсового транспорта до
            2050 года
          </h2>
        </div>
      </div>
      <div className="Map-info">
        <img src={MapLabel} alt="" className="Map-img" />
      </div>
    </div>
  );
};

export default Map;
