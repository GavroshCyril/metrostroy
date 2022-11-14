import React from "react";
import "./Map.css";
import MapImg from "../../Assets/Images/shema-metro.jpg";

const Map = () => {
  return (
    <div className="Map">
      <div className="Map-container">
        <h2 className="Map-title">Схема метрополитена</h2>
        <img className="Map-img" src={MapImg} alt="Shema Metro" />
      </div>
    </div>
  );
};

export default Map;
