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
import { StationsHeader } from "./StationsHeader";
import { PictureRow } from "./PictureRow";
import { DeleteStantion } from "./DeleteStantion";
import { HomeSection } from "./Sections/HomeSection";

import { selectLines } from "../../store/linesSlice";
import { useLines } from "../../hooks/useLines";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const HomeAdmin = (props) => {
  // const state = useSelector(selectLocalizedState);
  // const linesState = useSelector(selectLines);

  // const localizedState = useSelector(selectLocalizedState);
  // const onLocalisation = useLocalisation();
  // const [shouldReRender, setShouldReRender] = useState(false);

  // const stateObject = {
  //   title2: "123",
  //   home_title: localizedState["home_title"],
  //   // lastName: 'Smith',
  //   // email: 'demo@devias.io',
  //   // phone: '',
  //   // state: 'Alabama',
  //   // country: 'USA'
  // };

  // const [values, setValues] = useState(stateObject);
  // const onLines = useLines();

  // const handleChange = (event) => {
  //   setValues({
  //     ...values,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const [value, setValue] = React.useState(0);

  const handleOneChange = (event, newValue) => {
    setValue(newValue);
  };

  // const { locale, value, category, subcategory } = req.body

  // useEffect(() => {
  //   if (linesState) {
  //     linesState.map((line) => {
  //       stateObject[`${line.line_name}`] = localizedState[`${line.line_name}`];
  //     });
  //   }
  //   setValues(stateObject);
  // }, [linesState]);

  // useEffect(() => {
  //   onLocalisation()
  //   onLines()
  //     .catch((err) => {
  //       console.error("err", err);
  //     });
  //   setValues(stateObject);
  // }, [shouldReRender]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleOneChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <HomeSection />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      
    </>
  );
};
