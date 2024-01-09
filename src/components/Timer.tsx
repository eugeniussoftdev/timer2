import { ChangeEvent, useRef, useState } from "react";

import { formatTime } from "../helpers/formatTime";

import { useAddData } from "../hooks/firestore";

const defaultWorkItem = {
  title: "New work",
  tag: "work",
  category: "work",
  startTime: new Date(),
  entTime: new Date(),
  totalTime: 0,
};

export type WorkItemType = typeof defaultWorkItem;

export const Timer = () => {
  const [time, setTimer] = useState(0);
  const [workName, setWorkName] = useState("");
  const [workItem, setWorkItem] = useState<WorkItemType>(defaultWorkItem);

  const ref = useRef<NodeJS.Timeout | undefined>(undefined);

  const { addDbDoc } = useAddData();

  const startTimer = () => {
    console.log(ref.current);
    if (ref) {
      ref.current = setInterval(() => {
        setTimer((prevState) => prevState + 1);
        console.log(time);
      }, 1000);
      setWorkItem((prevState) => ({ ...prevState, startTime: new Date() }));
    }
  };

  const pauseTimer = () => {
    if (ref.current) {
      clearInterval(ref.current);
    }
  };

  const stopTimer = () => {
    addDbDoc({
      ...workItem,
      title: workName,
      entTime: new Date(),
      totalTime: time,
    });
    setTimer(0);
    clearInterval(ref.current);
  };

  const setWorkNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWorkName(e.target.value);
  };

  return (
    <div>
      <div>{formatTime(time * 1000)}</div>
      <div>
        <input
          className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
          placeholder="work name"
          onChange={setWorkNameHandler}
          value={workName}
        />
      </div>

      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
