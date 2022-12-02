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
  const [t] = useTranslation();
  const localizedState = useSelector(selectLocalizedState);
  const locale = useSelector(selectLocale);
  const category = "home";
  const subcategory = "title";
  const onLocalisation = useLocalisation();
  const [shouldReRender, setShouldReRender] = useState(false);

  const [values, setValues] = useState({
    // title: t("home.title"),
    title: localizedState[category][subcategory],
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const [isChanging, setIsChanging] = useState(false);
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const saveTitle = () => {
    console.log("title", values.title)
    Axios.put("http://localhost:3000/localization", {
      locale: locale,
      value: values.title,
      category: category,
      subcategory: subcategory
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
    .catch((err) => {
      console.error('err', err)
    })
  //   console.log('localizationResult', localizationResult)
  //   tokenRefresh(refreshToken, id);

  }, [shouldReRender])


  // useEffect(() => {
  //   Axios.post("http://localhost:3000/user/login", {
  //       name: userName,
  //       password: userPassword
  //   })
  //   .then((responce) => {
  //       if (responce.status === 200) {
  //           const token = responce.data && responce.data.accessToken
  //           const refreshToken = responce.data && responce.data.refreshToken
  //           const decoded = JwtDecode(token);
  //           const user = {
  //             id: decoded.id,
  //             name: decoded.name,
  //             role: decoded.role,
  //           }

  //           localStorage.setItem("token", token)
  //           localStorage.setItem("refreshToken", refreshToken)
         
  //           dispatch(update(user))
  //           navigate('/');
  //       } else {
  //           console.log("Something went wrong", responce)
  //       }
  //   })
  //   .catch((err) => {
  //       console.log("err", err)

  //   })


  // }, [])

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
                {isChanging ? <>
                  <Button
                  color="primary"
                  variant="contained"
                  onClick={(e) => saveTitle(e)}
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
                </Button>}
                
                
                {/* <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                /> */}
              </Grid>
         
            
      
        
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
                {isChanging ? <>
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
                </Button>}
                
                
                {/* <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                /> */}
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
