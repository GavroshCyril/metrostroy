import React, {useMemo} from 'react';
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectLocalizedState} from "../../store/localizationSlice";
import {useTranslation} from "react-i18next";


function Slide({line = 'home_zelenoluzskayaTitle'}) {
  const navigate = useNavigate();
  const state = useSelector(selectLocalizedState);
  const [t] = useTranslation();

  const color = useMemo(() => {
    switch (line.line_name) {
      case 'home_zelenoluzskayaTitle':
        return "green"
      case 'home_avtozavodskayaTitle':
        return "red"
      case 'home_zelenoluzskayaTitle':
        return "blue"
      default:
        return "blue"
    }
  }, [line])


  return (
    <Card
      sx={{ maxWidth: 500 }}
      className="Card"
      onClick={() => navigate(`/line/${line.line_name}`)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={"http://localhost:3000/station/image/" + line.line_picture}
          alt="green iguana"
        />
        <CardContent sx={{height: '160px'}}>
          <Typography gutterBottom variant="h6" component="div">
            {state[`${line.line_name}`]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {state[`${line.line_description}`]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack className="card-btn" spacing={2} direction="row">
        <Button variant="outlined"> {t("more")}</Button>
        <Box sx={{position: 'absolute', background: color, left: 'calc(30% - 25px)'}} className='dot'/>

      </Stack>
    </Card>
  );
}

export default Slide;