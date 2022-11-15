import React from "react";
import "./Map.css";
import MapImg from "../../Assets/Images/mapMetro.jpg";
import MapLabel from "../../Assets/Images/mapLabel.png";

const Map = () => {
  return (
    <div className="MapWrapper">
      <div className="Map">
        <div className="Map-container">
          <h2 className="Map-title">
            Схема линий метро Минского метрополитена
          </h2>
        </div>
      </div>
      <div className="Map-info">
        <img src={MapLabel} alt="" className="Map-label" />
        <img src={MapImg} alt="" className="Map-img" />
      </div>
    </div>
  );
};

export default Map;
