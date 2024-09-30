import React, { useEffect, useState } from "react";
import "./DigitalClock.css";
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date(), 1000));
    return () => clearInterval(timerId);
  }, []);
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = String(hours).padStart(2, "0");
    return { hours, minutes, seconds, ampm };
  };
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };
  const { hours, minutes, seconds, ampm } = formatTime(time);
  return (
    <>
      <div className="digital-clock d-flex flex-column justify-content-center align-items-center text-white">
        <h1>Digital Clock</h1>
        <div className="clock-box text-white text-center">
          <div className="date mb-3">{formatDate(time)}</div>
          <div className="time">
            <span className="time-section">
              {hours} : <small>Hours </small>
            </span>
            <span className="time-section">
              {minutes} : <small>Minutes </small>
            </span>
            <span className="time-section">
              {seconds} <small>Seconds </small>
            </span>
            <span className="am-pm">
              <small>{ampm}</small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalClock;
