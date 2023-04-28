import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
import { FormRow } from "../FormRow";
import { PictureRow } from "../PictureRow";
import { StationsHeader } from "../StationsHeader";
import { DeleteStantion } from "../DeleteStantion";
import { selectLocalizedState } from "../../../store/localizationSlice";
import { selectLines } from "../../../store/linesSlice";
import { useLocalisation } from "../../../hooks/useLocalisation";
import { useLines } from "../../../hooks/useLines";
import { useTranslation } from "react-i18next";

export const HomeSection = (props) => {
  const [t] = useTranslation();
  const state = useSelector(selectLocalizedState);
  const linesState = useSelector(selectLines);

  const localizedState = useSelector(selectLocalizedState);
  const onLocalisation = useLocalisation();
  const [stationAdded, setStationAdded] = useState("");
  const [stationDeleted, setStationDeleted] = useState("");

  const stateObject = {
    title2: "123",
    home_title: localizedState["home_title"],
    // lastName: 'Smith',
    // email: 'demo@devias.io',
    // phone: '',
    // state: 'Alabama',
    // country: 'USA'
  };
  const [values, setValues] = useState(stateObject);
  const onLines = useLines();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (linesState) {
      linesState.map((line) => {
        stateObject[`${line.line_name}`] = localizedState[`${line.line_name}`];
      });
    }
    setValues(stateObject);
  }, [linesState]);

  useEffect(() => {
    onLocalisation();
    onLines().catch((err) => {
      console.error("err", err);
    });
    setValues(stateObject);
  }, [stationAdded, stationDeleted]);

  return (
    <form autoComplete="off" noValidate {...props} className="fonts">
      <Card sx={{ margin: 3 }}>
        <CardHeader title={t("nav.homePage")} />
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
            return (
              <Grid container spacing={2} className="line">
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

                <StationsHeader
                  // handleChange={handleChange}
                  // title={state[`${line.line_description}`]}
                  lineId={line.line_id}
                  name={line.line_description}
                  setStationAdded={setStationAdded}
                />

                {line.stations &&
                  line.stations.map((station) => {
                    console.log("station", station);
                    const stationTitle = station.station_name;
                    // const title = state[`${line.line_name}`][`${line.stations[index]}`];
                    return (
                      <>
                        <FormRow
                          title={state[`${stationTitle}`]}
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
                          style={{ marginBottom: "30px" }}
                        />

                        <DeleteStantion
                          // handleChange={handleChange}
                          // title={state[`${station.station_description}`]}
                          // saveTitle={saveTitle}
                          stationDescription={station.station_description}
                          stationName={station.station_name}
                          setStationDeleted={setStationDeleted}
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
  );
};
