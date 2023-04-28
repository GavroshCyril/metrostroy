import React from "react";
import "./Map.css";
import { useTranslation } from "react-i18next";
import MapImg from "../../Assets/Images/shemaMetro02.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Lang from "../../components/HeaderOptions";
/* import { Tooltip } from "react-tooltip"; */

const Map = () => {
  const [t] = useTranslation();

  return (
    <div className="MapWrapper">
      <div className="MapImg">
        <div className="Map-container">
          <h2 className="title">{t("map.title")}</h2>
        </div>
        <Lang />
      </div>
      {/* 
      <div className="red" id="gorka">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="kuncauchczyna">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="sportivnaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="puchkinskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="molodeznaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="frunzenskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="nemiga">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="kupalovskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="pervomayskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="proletarskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="zavod">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="partizanskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="avtozavodskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="red" id="mogilevskaya">
        <a href="https://www.google.com/">1</a>
      </div>

      <div className="blue" id="malinovka">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="petrovscina">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="michalovo">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="grushevka">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="kultury">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="oktyabrskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="pobedy">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="kolasa">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="cheluskincev">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="moskovskaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="voshod">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="borisovskiy">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="blue" id="yryczje">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="green" id="yubileynaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="green" id="frantiszka">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="green" id="vokzalnaya">
        <a href="https://www.google.com/">1</a>
      </div>
      <div className="green" id="kovalskaya">
        <a href="https://www.google.com/">1</a>
      </div>

      <Tooltip className="tool" anchorSelect="#gorka" clickable>
        <img
          src="https://eng.belta.by/images/storage/news/with_archive/2020/000163_1602754662_134253_big.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Каменная горка</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#kuncauchczyna" clickable>
        <img
          src="https://cdnn11.img.sputnik.by/img/101859/27/1018592792_0:153:3048:1868_1920x0_80_0_0_7dab89f72d6f889276912beda4b6d2d6.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Кунцевщина</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#sportivnaya" clickable>
        <img
          src="https://cdnn11.img.sputnik.by/img/101859/27/1018592792_0:153:3048:1868_1920x0_80_0_0_7dab89f72d6f889276912beda4b6d2d6.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Спортивная</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#puchkinskaya" clickable>
        <img
          src="https://mlyn.by/wp-content/uploads/2022/11/dsc_0035-2048x1365.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Пушкинская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#molodeznaya" clickable>
        <img
          src="http://www.mirmetro.net/uploaded/images/minsk/02/19_maladzyozhnaya/06.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Молодежная</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#frunzenskaya" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/d/db/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%A4%D1%80%D1%83%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_7.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Фрунзенская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#nemiga" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/d/da/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%9D%D0%B5%D0%BC%D0%B8%D0%B3%D0%B0_5.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Немига</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#kupalovskaya" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/9/93/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%9A%D1%83%D0%BF%D0%B0%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_2.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Купаловская. Переход на синюю ветку метро</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#pervomayskaya" clickable>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Persham_08.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Первомайская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#proletarskaya" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/b/b3/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F_1.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Пролетарская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#zavod" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/thumb/3/3e/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%A2%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4_1.jpg/1600px-%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%A2%D1%80%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4_1.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Тракторный завод</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#partizanskaya" clickable>
        <img
          src="https://dic.academic.ru/pictures/wiki/files/77/Minsk_Metro_in_2010_-_Partizanskaya_Platform.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Партизанская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#avtozavodskaya" clickable>
        <img
          src="https://avatars.mds.yandex.net/get-altay/2389272/2a000001759d54c96646b366617ccfb59c8d/XXXL"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Автозаводская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#mogilevskaya" clickable>
        <img
          src="https://avatars.mds.yandex.net/get-altay/2776652/2a000001759d5c434db6d2cf7adf407e5dcb/XXXL"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Могилевская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#malinovka" clickable>
        <img
          src="https://wiki.nashtransport.ru/images/6/67/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA_%D0%9C%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0_2.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Малиновка</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#petrovscina" clickable>
        <img
          src="https://lensguide.io/wp-content/uploads/2020/02/russian-train-station-nikon-14-24.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Петровщина</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#michalovo" clickable>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/StantsiyaMetro_Mikhalovo%28Miensk%29.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Михалово</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#grushevka" clickable>
        <img
          src="https://realt.by/typo3temp/pics/0d/5b/0d5b412106376a7b675c46de97ea593e.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Грушевка</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#kultury" clickable>
        <img
          src="https://realt.by/typo3temp/pics/72/81/7281b536db0923fc254b60d39fc661fd.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Интитут культуры</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#oktyabrskaya" clickable>
        <img
          src="https://realt.by/typo3temp/pics/89/0e/890edeed289a9c4c6b01427b34da5d36.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Октябрьская. Переход на красную ветку метро</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#pobedy" clickable>
        <img
          src="https://gohome.by/files/news/gh-nalog-metro-ploshad-pobedy.png"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Площадь победы</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#kolasa" clickable>
        <img
          src="https://gohome.by/files/news/gh-metro-yakuba-kolasa.png"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Площадь Якуба Колоса</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#cheluskincev" clickable>
        <img
          src="https://minsk-metro.net/blog/wp-content/uploads/2019/10/%D0%BF%D0%BE%D0%B4%D1%81%D0%B2%D0%B5%D1%82%D0%B8%D0%BB%D0%B8-12-e1634258550262-1024x645.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Парк Челюскинцев</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#moskovskaya" clickable>
        <img
          src="https://avatars.mds.yandex.net/get-altay/7456447/2a00000184752a124d88e677e5945369a77b/L_height"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Московская</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#voshod" clickable>
        <img
          src="https://realt.by/typo3temp/pics/b0/ea/b0eae297488b163d8b21f68ac80b381a.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Восход</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#borisovskiy" clickable>
        <img
          src="https://metropoliten.by/upload/iblock/e79/DSC_0304.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Борисовский тракт</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#yryczje" clickable>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Uru44a_05.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Уручье</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#yubileynaya" clickable>
        <img
          src="https://metropoliten.by/upload/iblock/656/ANT_4895-1.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Юбилейная площадь</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#frantiszka" clickable>
        <img
          src="https://metropoliten.by/upload/iblock/767/ANT_4827-2.jpg"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Площадь Франтишка Богушевича</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#vokzalnaya" clickable>
        <img
          src="https://avatars.mds.yandex.net/get-altay/5234013/2a0000018477801349d5429de9b6bd3cee2a/orig"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Вокзальная. Переход на синюю ветку метро</span>
      </Tooltip>
      <Tooltip className="tool" anchorSelect="#kovalskaya" clickable>
        <img
          src="https://avatars.mds.yandex.net/get-altay/214458/2a000001850b6d44b36fc68de438918c7ae2/orig"
          alt="react logo"
          style={{ width: "300px" }}
        />
        <span>Ковальская слабода</span>
      </Tooltip> */}

      <div className="Map-info">
        <img className="content-img" src={MapImg} alt="" />
      </div>
    </div>
  );
};

export default Map;
