import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import SliderContent from "../SliderContent";
import Dots from "../Dots";
import Arrows from "../Arrows";
// import sliderImage from "./sliderImageThird";
import "../slider.module.css";

import { selectLocalizedState, selectLocale } from "../../../store/localizationSlice";


function Slider({lineName}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const state = useSelector(selectLocalizedState);

  const sliderImage = [
    {
      title: state[lineName],
      description:
        "третья линия Минского метрополитена, открыта 6 ноября 2020 года",
      urls: "https://metropoliten.by/upload/iblock/e97/ANT_4709-2.jpg",
    },
    {
      title: state[lineName],
      description: "на данный момент длиной 3,53 км включает четыре станции",
      urls:
        "https://upload.wikimedia.org/wikipedia/commons/7/73/%D0%A1%D1%82%D0%B0%D0%BD%D1%86%D0%B8%D1%8F_%D0%BC%D0%B5%D1%82%D1%80%D0%BE_%D0%92%D0%BE%D0%BA%D0%B7%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_3.jpg",
    },
    {
      title: state[lineName],
      description: "будет пересекать Минск с юга на север",
      urls: "https://metropoliten.by/upload/iblock/767/ANT_4827-2.jpg",
    },
  ];

  const len = sliderImage.length - 1;


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  

  return (
    <div className="slider-bg">
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          activeIndex={activeIndex}
          sliderImage={sliderImage}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>
  );
}

export default Slider;
