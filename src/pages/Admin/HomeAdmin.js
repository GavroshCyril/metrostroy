import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import "./HomeAdmin.css";
import Axios from "axios";
import { useTranslation } from "react-i18next";
import { ruLang } from "../../i18n/lang/ru";
import { useSelector } from "react-redux";
import {
  selectLocalizedState,
  selectLocale,
} from "../../store/localizationSlice";
import { useLocalisation } from "../../hooks/useLocalisation";
import { FormRow } from "./FormRow";
import { PictureRow } from "./PictureRow";
import { selectLines } from "../../store/linesSlice";
import { useLines } from "../../hooks/useLines";

const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];

export const HomeAdmin = (props) => {
  const state = useSelector(selectLocalizedState);
  console.log("state AccountProfileDetails", state);
  const linesState = useSelector(selectLines);
  console.log("linesState AccountProfileDetails", linesState);

  const [t] = useTranslation();
  const localizedState = useSelector(selectLocalizedState);
  const locale = useSelector(selectLocale);
  const category = "home_title";

  const onLocalisation = useLocalisation();
  const [shouldReRender, setShouldReRender] = useState(false);

  const stateObject = {
    title2: "123",
    home_title: localizedState["home_title"],
    // lastName: 'Smith',
    // email: 'demo@devias.io',
    // phone: '',
    // state: 'Alabama',
    // country: 'USA'
  };

  console.log("stateObject", stateObject);
  const [values, setValues] = useState(stateObject);
  console.log("values", values);
  const onLines = useLines();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // const saveTitle = () => {
  //   console.log("title", values.home_title)
  //   Axios.put("http://localhost:3000/localization", {
  //     locale: locale,
  //     value: values.home_title,
  //     category: category,
  //   })
  //   .then((res) => {
  //     if (res.status === 200) {

  //       console.log("res.data", res.data)
  //       setShouldReRender(true)
  //     }
  //   })

  // }

  // const { locale, value, category, subcategory } = req.body

  useEffect(() => {
    if (linesState) {
      linesState.map((line) => {
        console.log("line0", line);
        stateObject[`${line.line_name}`] = localizedState[`${line.line_name}`];
      });
    }
    setValues(stateObject);
  }, [linesState]);

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!useEffect");

    onLocalisation().then((localizationResult) => {
      console.log("localizationResult 000", localizationResult);
    });
    onLines()
      .then((linesResult) => {
        console.log("onLines 000", linesResult);
      })
      .catch((err) => {
        console.error("err", err);
      });
    setValues(stateObject);
  }, [shouldReRender]);

  return (
    <>
      <form autoComplete="off" noValidate {...props}>
        <Card sx={{ margin: 3 }}>
          <CardHeader title="Главная страница" />
          <Divider />
          <CardContent>
            <Grid container spacing={3} className="header">
              <FormRow
                handleChange={handleChange}
                title={values.home_title}
                // saveTitle={saveTitle}
                name={"home_title"}
              />
            </Grid>
            {linesState.map((line) => {
              console.log("line", line);
              console.log("name", line.line_name);

              return (
                <Grid container spacing={3} className="line">
                  <FormRow
                    // handleChange={handleChange}
                    title={state[`${line.line_name}`]}
                    // saveTitle={saveTitle}
                    name={line.line_name}
                  />

                  <FormRow
                    // handleChange={handleChange}
                    title={state[`${line.line_description}`]}
                    // saveTitle={saveTitle}
                    name={line.line_description}
                  />
                  <PictureRow
                    pictureName={line.line_picture}
                    lineName={line.line_name}
                  />

                  {line.stations &&
                    line.stations.map((station, index) => {
                      console.log("STAT", station);
                      const stationTitle = station.station_name;
                      console.log("stationTitle", stationTitle);
                      console.log(
                        "station_description",
                        state[`${station.station_description}`]
                      );
                      console.log(
                        "station_description",
                        station.station_description
                      );
                      // const title = state[`${line.line_name}`][`${line.stations[index]}`];
                      return (
                        <>
                          <FormRow
                            // handleChange={handleChange}
                            title={state[`${stationTitle}`]}
                            // saveTitle={saveTitle}
                            name={station.station_name}
                            color="grey"
                          />
                          <FormRow
                            // handleChange={handleChange}
                            title={state[`${station.station_description}`]}
                            // saveTitle={saveTitle}
                            name={station.station_description}
                            color="grey"
                          />
                          <PictureRow
                            pictureName={station.station_picture}
                            lineName={line.station_name}
                          />
                        </>
                      );
                    })}
                </Grid>
              );
            })}
          </CardContent>
        </Card>
      </form>
    </>
  );
};