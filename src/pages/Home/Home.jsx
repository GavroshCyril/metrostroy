import React, {useEffect, useState} from "react";
import "./Home.css";
import {useDispatch, useSelector} from "react-redux";

import logoMetro from "../../Assets/Images/minsk-metro-logo.png";
import Lang from "../../components/HeaderOptions";
import { selectLocalizedState } from "../../store/localizationSlice";
import { selectLines } from "../../store/linesSlice";
import Slide from "./Slide";
import Button from "@mui/material/Button";
import {setHeaderState} from "../../store/headerSlice";
import {useTranslation} from "react-i18next";

const Home = () => {
  const state = useSelector(selectLocalizedState);
  const linesState = useSelector(selectLines);
  const [activeSlide, setActiveSlide] = useState(0)

  const dispatch = useDispatch()
  const [t] = useTranslation();

  console.log(linesState)
  useEffect(() => {
    dispatch(setHeaderState({title: state.home_title, image: "../../Assets/Images/kavalskaya.jpg"}))
  }, [t])

  return (
    <div className="Home">
      <div className="Home-container">
        <Lang />

        <Button onClick={() => setActiveSlide(activeSlide - 1)}> Назад</Button>
        <div style={{height: "600px", width: '1320px'}}>
          <div className="slides-container" style={{paddingLeft: `${440 * activeSlide}px`}}>
            {linesState.map((line) =>
              <Slide key={line.title} line={line}/>
            )}
          </div>
        </div>
        <Button onClick={() => setActiveSlide(activeSlide + 1)}> Вперёд</Button>

      </div>
    </div>
  );
};

export default Home;
