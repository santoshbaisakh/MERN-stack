import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h2>Timer: {time} sec</h2>

      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;