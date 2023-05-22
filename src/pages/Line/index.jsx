import React, {useState} from "react";
import { useSelector } from "react-redux";
import {  useLocation } from 'react-router-dom';
import "./index.css";


import { selectCurrentLineName, selectLine} from "../../store/linesSlice";
import LineSlide from "./LineSlide";
import Button from "@mui/material/Button";

const Line = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentLineName = path[2];

  const line = useSelector((state) => {
    return selectLine(state, currentLineName)
  });

  const stations = line && line.stations
  const [activeSlide, setActiveSlide] = useState(0)


  return (
    <div className="HomeFirstBranch">
      {/*<Slider lineName={line && line.line_name}/>*/}

      {/*<Lang />*/}
      <div className="dots">
        {stations && stations.map((st, index) => (<div key={index} onClick={() => setActiveSlide(index)} className="dot"/>))}
      </div>

      <div className="slider">
        <div className="slides-container" style={{paddingLeft: `-${440 * activeSlide}px`}}>
          {stations && stations.map((station) => <LineSlide key={station.station_description} station={station}/>)}
        </div>
      </div>

    </div>
  );
};

export default Line;
