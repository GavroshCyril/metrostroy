import React, { useEffect } from "react";
import "./News.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Box,
  Typography,
  CardActions,
  Link,
  Stack,
  Button,
} from "@mui/material";
import Lang from "../../components/HeaderOptions";
import News from "../../components/News";

const Home = () => {
  const [t] = useTranslation();

  const news = [
    {
      date: "22.04.2023 12:22",
      title: "ПРИНЯЛИ ДОСТОЙНОЕ УЧАСТИЕ В РЕСПУБЛИКАНСКОМ СУББОТНИКЕ",
      content:
        "Государственное предприятие «Минский метрополитен» и АО «Метровагонмаш» (г. Мытищи, Российская Федерация) подписали контракт на поставку 28 новых современных вагонов метро для белорусской подземки. Из них планируется сформировать 7 четырехвагонных электропоездов",
    },
    {
      date: "21.04.2023 14:16",
      title: "22 АПРЕЛЯ МЕТРО БУДЕТ РАБОТАТЬ ПО ГРАФИКУ РАБОЧЕГО ДНЯ",
      content:
        "Вниманию пассажиров! 22 апреля 2023 года, в день республиканского субботника, движение электропоездов Минского метрополитена будет организовано по графику рабочего дня. 22 апреля работники государственного предприятия «Минский метрополитен» примут активное участие в республиканском субботнике. ",
    },

    {
      date: "20.03.2022 09:14",
      title: "МИНСКИЙ МЕТРОПОЛИТЕН ЗАКУПИТ 28 ВАГОНОВ В РОССИИ",
      content:
        "Метрополитеновцы занимались наведением порядка на рабочих местах и благоустройством закрепленной территории. Работы велись на станциях и в пешеходных переходах всех линий, в электродепо «Московское» и «Могилевское», инженерных корпусах, здании эксплуатационного персонала, двух общежитиях предприятия, а также на закрепленных за метрополитеном территориях в Московском районе столицы. ",
    },
  ];

  return (
    <div className="News">
      <div className="News-container">
        <span className="News-title">Новости</span>
        <Lang />

        <div className="card-container">
          <div className="news-cotainer">
            {news.map((item, index) => (
              <News
                key={index}
                date={item.date}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
