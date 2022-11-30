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
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const [isChanging, setIsChanging] = useState (false);
  

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

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
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
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
  );
};
