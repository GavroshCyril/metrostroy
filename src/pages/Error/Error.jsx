import React from "react";
import { Box, Button, Container, Typography, Grid, Link } from "@mui/material";
import MetroLogo from "../../Assets/Images/404.png";
import DownloadIcon from "@mui/icons-material/ArrowBack";
import "./Error.css";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md" className="error-info">
        <Grid container spacing={2}>
          {" "}
          <div className="pageNotFound">
            <h1 className="error-title">
              Уууупс..! Кажется страница не найдена :(
            </h1>
            <p>Вы зашли не на ту страницу на нашем сервере</p>
            <img
              className="error-icon"
              src={MetroLogo}
              height="300"
              width="400"
              alt="not found"
            />
          </div>
          <Grid xs={6}>
            <Link href="/" underline="none" className="error-link">
              <Button
                endIcon={<DownloadIcon />}
                className="error-btn"
                color="error"
                variant="contained"
              >
                Вернуться назад
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
