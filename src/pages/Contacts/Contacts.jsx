import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Contacts.css";
import {
  Box,
  Chip,
  Grid,
  Stack,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Link,
  Alert,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/LocalPhone";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import BeachAccessIcon from "@mui/icons-material/AttachEmail";
import Divider1 from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import Lang from "../../components/HeaderOptions";
import ImagesListMuseum from "../../components/ImagineList/ImagesListMuseum";
import SurveyComponent from "../../components/RatingComponent/SurveyComponent";
import { isUserLoggedIn } from "../../store/userSlice";
import { useReviews } from "../../hooks/useReviews";


import SubmitRating from "../../components/RatingComponent/SubmitRating";

const classes = {
  container: {
    cursor: "pointer",
  },
};

const Contacts = () => {
  const [t] = useTranslation();
  const onReviews = useReviews();

  useEffect(() => {
    const res = onReviews()
    console.log("res", res)
  })


  const isLoggedIn = useSelector(isUserLoggedIn);
  return (
    <div className="ContactsWrapper">
      <div className="Contacts">
        <div className="Map-container">
          <h2 className="title">{t("contact.title")}</h2>
        </div>
        <Lang />
      </div>
      <div className="content">
        <div className="description">
          <iFrame
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A922d17d946bd2970f021cf8ca0bf38b187ce87c54f417e088119af40e6621784&amp;source=constructor"
            width="80%"
            height="370"
            frameborder="0"
          />
          <Box
            sx={{ width: "100%", maxWidth: 680, bgcolor: "background.paper" }}
          >
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    {t("contact.name")}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant="h6" component="div">
                    {t("contact.free")}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                {t("contact.infoText")}
              </Typography>
              <Stack direction="row" spacing={1} className="info-desc">
                <Chip color="info" label={t("contact.locate")} />
              </Stack>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
              <Typography gutterBottom variant="body1">
                {t("contact.writeInfo")}
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
                  <ListItemText secondary={t("contact.numberPhone")} />
                </ListItem>

                <Divider1 variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary={t("contact.email")} />
                </ListItem>
              </List>
            </Box>
          </Box>
        </div>
        <div className="wrapper">
          <Stack direction="row" spacing={1} className="content-span">
            <Chip label={t("contact.label")} />
          </Stack>
          <ImagesListMuseum styles={classes.container} />
        </div>
        <Stack direction="row" spacing={2} className="links">
          <Button variant="outlined" startIcon={<PrintIcon />}>
            <Link
              href="https://metropoliten.by/o_metropolitene/museum/?print=y"
              underline="none"
            >
              {t("printMaterial")}
            </Link>
          </Button>
          <Button variant="outlined" endIcon={<DownloadIcon />}>
            <Link
              href="../../Assets/documents/info.docx"
              underline="none"
              download
            >
              {t("downloadMaterial")}
            </Link>
          </Button>
        </Stack>
        <SubmitRating />

        {isLoggedIn ? (
          <SurveyComponent />
        ) : (
          <div className="cotainer-ratings-info">
            <Stack
              style={{ marginTop: "10px" }}
              sx={{ width: "100%" }}
              spacing={2}
            >
              <Alert severity="info">
                Чтобы поделиться своим мнением о посещенном объекте,{" "}
                <Link href="/auth" underline="none">
                  войдите в личный кабинет
                </Link>
              </Alert>
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
