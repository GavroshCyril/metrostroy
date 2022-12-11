import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
    Button,
    Grid,
    TextField,
    TextareaAutosize,

  } from '@mui/material';
  import Axios from "axios"

  import { useLocalisation } from '../../hooks/useLocalisation'
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import { StationsModal } from './StationsModal'
import { FormRow } from './FormRow'
import { AddPictureButton } from './AddPictureButton'

export const StationsHeader = ({ name, lineId }) => {
    const [isChanging, setIsChanging] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const [value, setValue] = useState();
    const [shouldReRender, setShouldReRender] = useState(false);
    const onLocalisation = useLocalisation();

    const [values, setValues] = useState({
      stationNameDB: '',
      stationDescriptionDB: '',

      stationNameEN: '',
      stationNameBY: '',
      stationNameRU: '',



      stationDescriptionEN: '',
      stationDescriptionBY: '',
      stationDescriptionRU: '',

      // selectedImage: null,
    });

    const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
  const { 
    stationNameDB, 
    stationDescriptionDB,
    stationNameEN,
    stationNameBY,
    stationNameRU,
    stationDescriptionEN,
    stationDescriptionBY,
    stationDescriptionRU
  } = values
    const addStation = () => {
      console.log('values', values);
      console.log('selectedImage', selectedImage);
      console.log("lineId", lineId)
      Axios.post("http://localhost:3000/station", {
        lineId,
        stationNameDB,
        stationDescriptionDB,
        stationNameEN,
        stationNameBY,
        stationNameRU,
        stationDescriptionEN,
        stationDescriptionBY,
        stationDescriptionRU,
        image: selectedImage
      },
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then((res) => {
        if (res.status === 200) {
          
          console.log("res.data", res.data)
          setIsChanging(false)
          setShouldReRender(true)
        }
      })
    }

    // const handleChange = (event) => {
    //   setValue(event.target.value)
    // }

  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

    useEffect(() => {  
      onLocalisation()
      .then((localizationResult) => {
        console.log('localizationResult 000', localizationResult)
      })
      .catch((err) => {
        console.error('err', err)
      })
    }, [shouldReRender])

  const content = <>
    <TextField
      name="stationNameDB"
      style={{ width: '100%', marginBottom: "10px"}}
      id="outlined-multiline-flexible"
      label="Station Name DB"
      // multiline
      maxRows={4}
      value={values.stationNameDB}
      onChange={handleChange}
      type="text"
      required
      // readOnly={!isChanging}
    />
    <TextField
      name="stationDescriptionDB"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Description DB"
      // multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
      // readOnly={!isChanging}
    />

    <TextField
      name="stationNameEN"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Name EN"

      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
      // readOnly={!isChanging}
    />
    <TextField
      name="stationNameBY"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Name BY"

      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
    // readOnly={!isChanging}
    />
    <TextField
      name="stationNameRU"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Name RU"

      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
    // readOnly={!isChanging}
    />







    <TextField
      name="stationDescriptionEN"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Description EN"
      multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
      // readOnly={!isChanging}
    />
    <TextField
      name="stationDescriptionBY"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Description BY"
      multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
    // readOnly={!isChanging}
    />
    <TextField
      name="stationDescriptionRU"
      style={{ width: '100%', marginBottom: "10px" }}
      id="outlined-multiline-flexible"
      label="Station Description RU"
      multiline
      maxRows={4}
      value={value}
      onChange={handleChange}
      type="text"
      required
    // readOnly={!isChanging}
    />

    <AddPictureButton 
      style={{ marginBottom: "10px" }} 
      setSelectedImage={setSelectedImage}
    />
  </>

 return (
  <>
    <Grid
        item
        md={9}
        xs={12}
        sx={{
          backgroundColor: "white",
        }}
    >
       <div style={{ width: '100%' , fontSize: "20px" }}>Stations</div>
    </Grid>
     <Grid
       item
       md={3}
       xs={12}
       className="buttonContainer"
     >
       <Stack direction="row" alignItems="center" spacing={2}>
         <IconButton
           color="primary"
           aria-label="upload picture"
           component="label"
           onClick={handleOpenModal}
         >
           {/* <input hidden accept="image/*" type="file" /> */}
           <AddIcon />
         </IconButton>
       </Stack>
     </Grid>
     <StationsModal 
      header={"Add station"} 
      content={content} 
      onSave={addStation} 
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    />
  </>
 )
}