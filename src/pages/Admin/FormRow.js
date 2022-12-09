import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Grid,
    TextField,
    TextareaAutosize,
  } from '@mui/material';
  import Axios from "axios"
  import { selectLocalizedState, selectLocale } from "../../store/localizationSlice";
  import { useLocalisation } from '../../hooks/useLocalisation'

export const FormRow = ({title, name, color = 'transparent'}) => {
    const [isChanging, setIsChanging] = useState(false);
    const locale = useSelector(selectLocale);
    // const [values, setValues] = useState({
    //   name: title
    // });

    const [value, setValue] = useState(title);
    const [shouldReRender, setShouldReRender] = useState(false);
    const onLocalisation = useLocalisation();

    // const handleChange = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.value
    //     });
    //   };

    const saveTitle = () => {
      Axios.put("http://localhost:3000/localization", {
        locale: locale,
        value: value,
        category: name,
      })
      .then((res) => {
        if (res.status === 200) {
          
          console.log("res.data", res.data)
          setIsChanging(false)
          setShouldReRender(true)
        }
      })
    }

    const handleChange = (event) => {
      setValue(event.target.value)
    }

    useEffect(() => {  
      onLocalisation()
      .then((localizationResult) => {
        console.log('localizationResult 000', localizationResult)
      })
      .catch((err) => {
        console.error('err', err)
      })
    }, [shouldReRender])

 return (
  <>
    <Grid
        item
        md={9}
        xs={12}
        sx={{
          backgroundColor: color,
        }}
    >
      <TextareaAutosize
         style={{ width: '100%' }}
         // fullWidth
         label=""
         // name="home_title"
         onChange={handleChange}
         required
         value={value}
         variant="outlined"
         type="text"
         readOnly={!isChanging}
       />
    </Grid>
     <Grid
       item
       md={3}
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