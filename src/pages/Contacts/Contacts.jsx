import React from "react";
import "./Contacts.css";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/LocalPhone";
import BeachAccessIcon from "@mui/icons-material/AttachEmail";
import Divider1 from "@mui/material/Divider";
import ImagesListMuseum from "../../components/ImagineList/ImagesListMuseum";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";

const Contacts = () => {
  return (
    <div className="ContactsWrapper">
      <div className="Contacts">
        <div className="Map-container">
          <h2 className="title">Информация</h2>
        </div>
      </div>
      <div className="content">
        <div className="description">
          <iFrame
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A922d17d946bd2970f021cf8ca0bf38b187ce87c54f417e088119af40e6621784&amp;source=constructor"
            width="623"
            height="370"
            frameborder="0"
          />
          <Box
            sx={{ width: "100%", maxWidth: 620, bgcolor: "background.paper" }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    Выставочная экспозиция
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6" component="div">
                    бесплатно
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                Экскурсии проводятся только для организованных групп (от 5 до 20
                человек) по предварительной записи. Экспозиционные площади
                расположены на уровне кассовых залов станции, вход находится за
                линией контроля.
              </Typography>
              <Stack direction="row" spacing={1} className="info-desc">
                <Chip
                  color="info"
                  label="Местонахождение музея: Партизанский просп., 149В"
                />
              </Stack>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
              <Typography gutterBottom variant="body1">
                Запись на экскурсию по выставочной экспозиции осуществляется:
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 620,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="по телефону (8017) 219-60-67 с 15:00 до 16:15 по пн, ср и пт" />
                </ListItem>

                <Divider1 variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="на основании предварительных заявок, поступивших на эл. почту mail@metropoliten.by" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </div>
        <div className="wrapper">
          <Stack direction="row" spacing={1} className="content-span">
            <Chip label="Изображения музея минского метрополитена:" />
          </Stack>
          <ImagesListMuseum />
        </div>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<PrintIcon />}>
            Распечатать материал
          </Button>
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Скачать информацию в формате Word
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default Contacts;
