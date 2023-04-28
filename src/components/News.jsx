import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../pages/News/News.css";

function News({ date, title, content }) {
  return (
    <div>
      <Card sx={{ minWidth: 440, maxWidth: 200 }}>
        <CardContent>
          <Typography
            className="date"
            sx={{ fontSize: 12, mb: 2 }}
            color="text.secondary"
            gutterBottom
            style={{ color: "white" }}
          >
            {date}
          </Typography>
          <Typography sx={{ mb: 1, fontSize: 18 }} variant="h6" component="div">
            {title}
          </Typography>

          <Typography sx={{ maxHeight: 100, mb: 5 }} variant="body2">
            {content}
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Читать подробнее</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default News;
