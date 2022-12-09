import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  TextField,
  TextareaAutosize,
  Input,
  CardMedia,
  Modal,
  Box,
  Typography,
} from '@mui/material';
import Axios from "axios"
import { useDispatch } from 'react-redux'
import { selectLocalizedState, selectLocale } from "../../store/localizationSlice";
import { useLocalisation } from '../../hooks/useLocalisation'
import { updateCurrentLineImage } from "../../store/linesSlice";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const PictureRow = ({ lineName, pictureName }) => {
    const [isChanging, setIsChanging] = useState(false);
    const locale = useSelector(selectLocale);
    // const [values, setValues] = useState({
    //   name: title
    // });

    // const [value, setValue] = useState(title);
    const [shouldReRender, setShouldReRender] = useState(false);
    const onLocalisation = useLocalisation();
    const imageLink = "http://localhost:3000/station/image/"

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

    // const handleChange = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.value
    //     });
    //   };

  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const savePicture = (e) => {
    // console.log("file", e.target.files[0]);
    // setSelectedImage(e.target.files[0]);
    console.log("lineName", lineName)
    Axios.post("http://localhost:3000/station/image", {
        image: selectedImage,
        lineName,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("res", res)
          console.log("res.data", res.data)
          const { filename } = res.data;
          // fieldname
          // :
          // "image"
          // filename
          // :
          // "1670531532241zelenoluzskaya.jpg"
          // mimetype
          // :
          // "image/jpeg"
          // originalname
          // :
          // "zelenoluzskaya.jpg"
          // size
          // :
          // 204708
          const image = {
            lineName,
            filename
          }
          dispatch(updateCurrentLineImage(image))
          // setIsChanging(false)
          // setShouldReRender(true)
        }
      })
    }

    const handleChange = (event) => {
      // setValue(event.target.value)
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
    >
      {/* <TextareaAutosize
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
       /> */}
       <CardMedia
         style={{ width: '100%' }}
         component="img"
         height="200"
         image={imageLink + pictureName}
         alt="green iguana"
       />

    </Grid>
     <Grid
       item
       md={3}
       xs={12}
       className="buttonContainer"
     >
       {
         <Button
           color="primary"
           variant="contained"
           onClick={handleOpenModal}
         >
           Редактировать
         </Button>}
     </Grid>


    <div>
       {/* <Button onClick={handleOpenModal}>Open modal</Button> */}
       <Modal
         open={open}
         onClose={handleCloseModal}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
       >
         <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
             Text in a modal
           </Typography>
           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
           </Typography>
           
           <Input 
            name="image" 
            fullWidth 
            required 
            variant="outlined" 
            width={100} 
            height={100} 
            type="file" 
            // accept="image/*,.pdf"
             onChange={(event) => {
               console.log(event.target.files[0]);
               setSelectedImage(event.target.files[0]);
             }}
          />
           {/* <TextField
             fullWidth
             label=""
             name="title"
             onChange={handleChange}
             required
             //  value={imageLink + pictureName}
             variant="outlined"
             type="file"
           /> */}
           <Button
             color="primary"
             variant="contained"
             onClick={(e) => savePicture(e)}
           >
             Сохранить
           </Button>
           <Button
             color="primary"
             variant="contained"
             onClick={handleCloseModal}
           >
             Отмена
           </Button>
         </Box>
       </Modal>
    </div>
     
  </>
 )
}