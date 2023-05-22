import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {useSelector} from "react-redux";
import {selectLocalizedState} from "../../store/localizationSlice";

function LineSlide({station}) {
  const state = useSelector(selectLocalizedState);


  return (
    <Card  className="Card">
      <CardMedia
        component="img"
        height="250"
        image={"http://localhost:3000/station/image/" + station.station_picture}
        alt={state[station.station_name]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {state[station.station_name]}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {state[station.station_description]}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LineSlide;