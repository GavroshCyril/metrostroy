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
import { StationsModal } from './StationsModal'

export const DeleteStantion = ({ stationName, color = 'transparent'}) => {
    const [isChanging, setIsChanging] = useState(false);
    const locale = useSelector(selectLocale);
    // const [values, setValues] = useState({
    //   name: title
    // });

    const [value, setValue] = useState();
    const [shouldReRender, setShouldReRender] = useState(false);
    const onLocalisation = useLocalisation();

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
    // const handleChange = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.value
    //     });
    //   };
  console.log("================================")
  console.log("stationName", stationName)
  const deleteStation = () => {
      Axios.delete("http://localhost:3000/station", {
        stationName
      },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
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


  // const deleteStation = () => {

    // Axios.post("http://localhost:3000/station", {
    //   lineId,
    //   stationNameDB,
    //   stationDescriptionDB,
    //   stationNameEN,
    //   stationNameBY,
    //   stationNameRU,
    //   stationDescriptionEN,
    //   stationDescriptionBY,
    //   stationDescriptionRU,
    //   image: selectedImage
    // },
    //   {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }
    // )
    //   .then((res) => {
    //     if (res.status === 200) {

    //       console.log("res.data", res.data)
    //       setIsChanging(false)
    //       setShouldReRender(true)
    //     }
    //   })
  // }

    useEffect(() => {  
      onLocalisation()
      .then((localizationResult) => {
        console.log('localizationResult 000', localizationResult)
      })
      .catch((err) => {
        console.error('err', err)
      })
    }, [shouldReRender])

  const content = <div>Are you shure?</div>

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
      
    </Grid>
     <Grid
       item
       md={3}
       xs={12}
       className="buttonContainer"
     >
       <Button
         color="error"
         variant="contained"
         onClick={handleOpenModal}
       >
         Удалить
       </Button>
     </Grid>
     <StationsModal
       header={"Delete station"}
       content={content}
       onSave={deleteStation}
       isOpen={isOpen}
       handleCloseModal={handleCloseModal}
     />
  </>
 )
}