import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const Timer = ({ date }) => {
  const [finishTime] = useState(date.getTime());
  const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);
  const [isTimeout, setIsTimeout] = useState(false);
  const [timerId, setTimerID] = useState(0);

  useEffect(() => {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) {
      setIsTimeout(true);
      return;
    }
    setDiff([
      Math.floor(diff / 86400), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ]);
  }, [tick, finishTime]);

  useEffect(() => {
    if (isTimeout) clearInterval(timerId);
  }, [isTimeout, timerId]);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTick(!tick);
    }, 1000);
    setTimerID(timerID);
    return () => clearInterval(timerID);
  }, [tick]);

  return (
    <Stack
      style={{
        display: "flex",
        alignItems: "center",
        color: "black",
        /* marginTop: "70px", */
      }}
      sx={{ width: "100%" }}
      spacing={2}
    >
      До октрытия новой станции метро:
      <Chip
        sx={{ width: "200px" }}
        label={`${diffDays} дней ${diffH.toString().padStart(2, "0")}:${diffM
          .toString()
          .padStart(2, "0")}:${diffS.toString().padStart(2, "0")}`}
        color="success"
        variant="primary"
      />
    </Stack>
    /*     <p style={{color: 'white', fontSize:'25px'}}></p> */
  );
};

export default Timer;
