import React from "react";
import "./Media.css";
import ImagesList from "../../components/ImagineList/ImagesList";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import Stack from "@mui/material/Stack";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const Media = () => {
  return (
    <div className="Media-container">
      <div className="Map">
        <div className="Map-container">
          <h2 className="title">История развития минского метрополитена</h2>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <p className="Media-paragraph">
            <span> П </span>остановление о строительстве метрополитена в столице
            БССР городе Минске было принято Советом Министров СССР 4 февраля
            1977 года. 3 мая 1977 года было начато строительство метро, а 4
            ноября 1977 года со строительной площадки будущей станции «Парк
            Челюскинцев» начаты работы по проходке тоннелей. 29 июня 1984 года,
            в канун 40-й годовщины освобождения Минска от немецко-фашистских
            захватчиков в годы Великой Отечественной войны, началось регулярное
            движение поездов Минского метрополитена. Была запущена первая линия
            от станции «Институт Культуры» до станции «Московская»,
            протяженностью 7,84 километра с восьмью станциями и электродепо
            «Московское». Эксплуатация первого участка линии метро показала
            необходимость продления ветки и в 1986 году был введен в
            эксплуатацию участок от станции «Московская» до станции «Восток»
            протяженностью 1,71 километра.
          </p>
          <YoutubeEmbed embedId="K0ytyKc1vwE" />
        </div>
        <Stack direction="row" spacing={1} className="content-span">
          <Chip label="Архивные изображения строительства метрополитена" />
        </Stack>
        <ImagesList />
        <p className="Media-desc">
          Отличительной особенностью строительства Минского метрополитена стала
          небольшая глубина заложения станций. Из-за высокого уровня подъема
          грунтовых вод станции пришлось размещать буквально под земной
          поверхностью, на глубине всего 10-17 метров. Самой глубокой на
          сегодняшний день является станция «Юбилейная площадь», расположенная
          на глубине более 25 метров. Эксплуатация первого участка линии метро
          показала необходимость продления ветки и в 1986 году был введен в
          эксплуатацию участок от станции «Московская» до станции «Восток»
          протяженностью 1,71 километра. С 1985 года было начато строительство
          первого участка второй линии метро от станции «Тракторный завод» до
          станции «Фрунзенская». Его протяженность составила 6,12 километра. В
          1990 году в постоянную эксплуатацию введены первые шесть станций
          Автозаводской линии.
        </p>
        <Alert severity="info">
          <AlertTitle>
            С пуском метрополитена была решена назревшая транспортная проблема.
          </AlertTitle>{" "}
          Еще в бытность существования СССР в Минске располагалось порядка 150
          крупных заводов, фабрик и трестов. Наземному общественному транспорту
          было крайне тяжело решать вопросы сообщения в столице. С момента пуска
          Минского метрополитена эта проблема успешно решена, а метро стало
          самым популярным видом общественного транспорта. Уже за первый год его
          услугами воспользовались более 80 миллионов человек.
        </Alert>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<PrintIcon />}>
            Распечатать материал
          </Button>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Скачать информацию в формате Word
          </Button>
        </Stack>
        {/* 
        <button onclick={window.print()}>Распечатать информацию</button> */}
      </div>
    </div>
  );
};

export default Media;
