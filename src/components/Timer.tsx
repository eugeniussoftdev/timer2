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
    <div className="flex flex-col justify-center align-center contenct-center ">
      <div>{formatTime(time * 1000).stringTime}</div>
      <TimerComponent timeObject={formatTime(time * 1000)} />
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

export const TimerComponent = ({ timeObject }) => {
  const countDownTime = {
    hours: timeObject.formattedHours,
    minutes: timeObject.formattedMinutes,
    seconds: timeObject.formattedSeconds,
    // timeObject.formattedMilliseconds,
  };

  return (
    <div className="flex">
      {/* <div className="flex gap-3 sm:gap-1   flex-row bg-[#2A303C] h-36 rounded-lg overflow-hidden pt-2 pr-3 sm:pt-0 sm:pr-0"> */}
      <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
        <div className="h-16 sm:h-20 bg-[#2A303C]">
          <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
            <div
              className={
                countDownTime?.days >= 0 &&
                countDownTime?.hours == 23 &&
                countDownTime?.minutes == 59 &&
                countDownTime?.seconds == 59
                  ? "animate-timer"
                  : "relative top-5"
              }
            >
              {countDownTime?.days}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
            {countDownTime?.Days == 1 ? "Day" : "Days"}
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
        <div className="h-16 sm:h-20 bg-[#2A303C]">
          <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
            <div
              className={
                countDownTime?.hours >= 0 &&
                countDownTime?.minutes == 59 &&
                countDownTime?.seconds == 59
                  ? "animate-timer"
                  : "relative top-5"
              }
            >
              {countDownTime?.hours}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
        <div className="h-16 sm:h-20 bg-[#2A303C]">
          <div className="h-[60px] flex justify-center bg-[#2A303C] sm:text-3xl text-xl !text-[#A6ADBB]">
            <div
              className={
                countDownTime?.minutes >= 0 && countDownTime?.seconds == 59
                  ? "animate-timer"
                  : "relative top-5"
              }
            >
              {countDownTime?.minutes}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
            {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
          </span>
        </div>
      </div>
      <div className="flex flex-col bg-[#2A303C] sm:w-32 w-16">
        <div className="h-16 sm:h-20 bg-[#2A303C]">
          <div className="h-[60px] flex justify-center  bg-[#2A303C] overflow-hidden sm:text-3xl text-xl text-[#A6ADBB]">
            <div>{countDownTime?.seconds}</div>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="text-lg sm:text-2xl text-center text-[#A6ADBB]">
            {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
/*
    Extenal css to add 
.animate-timer {
         position: relative;
          animation: animatetop 1s infinite;
        }
        @keyframes animatetop {
          from {
            top: -50px;
          }
          to {
            top: 20px;
          }
        }
 */
