import React, { useState, useRef, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import "./Timer.css";

const Timer = ({ date }) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("May 11 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <div className="section timer">
        <div>
          <Typography
            fontWeight={500}
            className="timer-title"
            variant="h5"
            component="h4"
          >
            До открытия новых станций метро:
          </Typography>
        </div>
        <div className="timer-times">
          <section className="timer-section">
            <Typography variant="h2" component="h2">
              {timerDays}
            </Typography>
            <Typography
              className="timer-section"
              variant="subtitle2"
              gutterBottom
              fontSize={20}
            >
              Дней
            </Typography>
          </section>
          <section className="timer-section">
            <Typography variant="h2" component="h2">
              {timerHours}
            </Typography>
            <Typography
              className="timer-section"
              variant="subtitle2"
              gutterBottom
              fontSize={20}
            >
              Часов
            </Typography>
          </section>
          <section className="timer-section">
            <Typography variant="h2" component="h2">
              {timerMinutes}
            </Typography>
            <Typography
              className="timer-section"
              variant="subtitle2"
              gutterBottom
              fontSize={20}
            >
              Минут
            </Typography>
          </section>
          <section className="timer-section">
            <Typography variant="h2" component="h2">
              {timerSeconds}
            </Typography>
            <Typography
              className="timer-section"
              variant="subtitle2"
              gutterBottom
              fontSize={20}
            >
              Секунд
            </Typography>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Timer;
