import React, { useState } from "react";
import {
    Button,
    Grid,
    TextField
  } from '@mui/material';

export const FormRow = ({title, saveTitle}) => {
    const [isChanging, setIsChanging] = useState(false);
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };

      console.log('values', values)
 return (
     <>
     <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label=""
                  name="home_title"
                  onChange={handleChange}
                  required
                  value={title}
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
                </Button></> 
                : 
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => setIsChanging(true)}
                >
                  Редактировать
                </Button>}
              </Grid>
     
     
     
     </>
 )
}