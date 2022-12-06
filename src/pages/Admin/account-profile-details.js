import React from "react";
import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import "./Admin.css";
import Axios from "axios"
import { useTranslation } from "react-i18next";
import {ruLang} from "../../i18n/lang/ru";
import { useSelector } from "react-redux";
import { selectLocalizedState, selectLocale } from "../../store/localizationSlice";
import { useLocalisation } from '../../hooks/useLocalisation'
import { FormRow } from './FormRow'
import { selectLines } from "../../store/linesSlice";
import { useLines } from "../../hooks/useLines";

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const state = useSelector(selectLocalizedState);
  console.log("state AccountProfileDetails", state)
  const linesState = useSelector(selectLines);
  console.log("linesState AccountProfileDetails", linesState)

  const [t] = useTranslation();
  const localizedState = useSelector(selectLocalizedState);
  const locale = useSelector(selectLocale);
  const category = "home_title";

  const onLocalisation = useLocalisation();
  const [shouldReRender, setShouldReRender] = useState(false);



  const stateObject = {
    // title: t("home.title"),
    home_title: localizedState["home_title"],
    // lastName: 'Smith',
    // email: 'demo@devias.io',
    // phone: '',
    // state: 'Alabama',
    // country: 'USA'
  }

  if(linesState) {
    linesState.map((line) => {
      console.log("line0", line)
      stateObject[`${line.line_name}`] = localizedState[`${line.line_name}`];
    })
  }
  console.log("stateObject", stateObject)
  const [values, setValues] = useState(stateObject);
  const onLines = useLines();

  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const saveTitle = () => {
    console.log("title", values.home_title)
    Axios.put("http://localhost:3000/localization", {
      locale: locale,
      value: values.home_title,
      category: category,
    })
    .then((res) => {
      if (res.status === 200) {
        
        console.log("res.data", res.data)
        setShouldReRender(true)
      }
    })

  }

  // const { locale, value, category, subcategory } = req.body

  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!useEffect')


    onLocalisation()
    .then((localizationResult) => {
      console.log('localizationResult 000', localizationResult)
    })
    onLines()
    .then((linesResult) => {
      console.log('onLines 000', linesResult)
    })
    .catch((err) => {
      console.error('err', err)
    })

  }, [shouldReRender])

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="Редактирование главной страницы"
            title="Главная"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <FormRow 
                handleChange={handleChange} 
                title={values.home_title} 
                saveTitle={saveTitle} 
              />
              {linesState.map((line) => {
                console.log("line", line)
                return (
                  <FormRow 
                    handleChange={handleChange} 
                    title={state[`${line.line_name}`]} 
                    saveTitle={saveTitle} 
                  />
                )
              })}
              
              
         
            
      
        
            </Grid>
          </CardContent>

      
        </Card>
      </form>
    

      <form
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <CardHeader
            subheader="Редактирование главной страницы"
            title="Главная"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label=""
                  name="title"
                  onChange={handleChange}
                  required
                  value={values.title}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                className="buttonContainer"
              >
                {/* {isChanging ? <>
                  <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setIsChanging(false)}
                >
                  Сохранить
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setIsChanging(false)}
                >
                  Отмена
                </Button></> : <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setIsChanging(true)}
                >
                  Редактировать
                </Button>} */}
                
                
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2
            }}
          >
            <Button
              color="primary"
              variant="contained"
            >
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    </>
   
  );
};
