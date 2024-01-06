import { useRef, useState } from "react";

import { formatTime } from "../helpers/formatTime";

const Timer = () => {
  const [time, setTimer] = useState(0);
  const ref = useRef<NodeJS.Timeout | undefined>(undefined);

  const startTimer = () => {
    console.log(ref.current);
    if (ref) {
      ref.current = setInterval(() => {
        setTimer((prevState) => prevState + 1);
        console.log(time);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
    }
  };

  const stopTimer = () => {
    setTimer(0);
    clearInterval(ref.current);
  };

  return (
    <div>
      <div>{formatTime(time * 1000)}</div>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
