import React, { useState, useEffect } from 'react';

function Countdown({ targetDate ="2023-05-20T00:00:00" }) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  function calculateRemainingTime() {
    const timeDiff = Date.parse(targetDate) - Date.now();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor(timeDiff / 1000) % 60;
    const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
    const hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div>
      <p> Days: {remainingTime.days} </p>
      <p> Hours: {remainingTime.hours} </p>
      <p> Minutes: {remainingTime.minutes} </p>
      <p> Seconds: {remainingTime.seconds} </p>
    </div>
  )
}

export default Countdown;