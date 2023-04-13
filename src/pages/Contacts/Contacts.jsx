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
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";
import Lang from "../../components/HeaderOptions";

const Contacts = () => {
  const [t] = useTranslation();
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
          <ImagesListMuseum />
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
      </div>
    </div>
  );
};

export default Contacts;
