import { useRef, createRef, forwardRef, RefObject } from "react";
import React from "react";

export default function Clock({
  ampmstate,
  setampmstate,
  sethourstate,
  setminuitstate,
  ampmRef,
  hourRef,
  minuitRef,
}) {
  const hour = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minuit = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];

  //AMPMの設定
  const ampm = ["AM", "PM"];
  ampm.forEach((_, i) => {
    ampmRef.current[i] = React.createRef();
  });
  let indexOfampm = 0;
  let ampmOfBox = [];

  //Hourの設定
  hour.forEach((_, i) => {
    hourRef.current[i] = React.createRef();
  });
  let indexOfHour = 10;
  let hourOfBox = [];

  //Minuitの設定
  minuit.forEach((_, i) => {
    minuitRef.current[i] = React.createRef();
  });
  let indexOfMinuit = 100;
  let minuitOfBox = [];

  //AMPMボタン表示
  const displayampmValue = (value) => {
    //id設定とValue表示をする
    indexOfampm = ampm.indexOf(value) + 1;
    ampmOfBox = [
      ...ampmOfBox,
      { id: indexOfampm, value: value, completed: false },
    ];
    return value;
  };
  //Hourボタン表示
  const displayHourValue = (value) => {
    //id設定とValue表示をする
    indexOfHour = hour.indexOf(value) + 1;
    hourOfBox = [
      ...hourOfBox,
      { id: indexOfHour, value: value, completed: false },
    ];
    return value;
  };
  //Minuitボタン表示
  const displayMinuitValue = (value) => {
    //id設定とValue表示をする
    indexOfMinuit = minuit.indexOf(value) + 1;
    minuitOfBox = [
      ...minuitOfBox,
      { id: indexOfMinuit, value: value, completed: false },
    ];
    return value;
  };

  //AMPMボタンクリック関数
  const handleOnClickampm = (e) => {
    if (e.target.innerText === "AM") {
      if (ampmstate === "am") {
        e.target.style.backgroundColor = "white";
        setampmstate("");
      } else {
        setampmstate("am");
        e.target.style.backgroundColor = "#afb2c0";
        ampmRef.current[1].current.style.backgroundColor = "white";
      }
    } else {
      if (ampmstate === "pm") {
        e.target.style.backgroundColor = "white";
        setampmstate("");
      } else {
        setampmstate("pm");
        e.target.style.backgroundColor = "#afb2c0";
        ampmRef.current[0].current.style.backgroundColor = "white";
      }
    }
  };

  //Hourボタンクリック関数
  const handleOnClickhour = (e) => {
    hourRef.current.map(
      (value, i) => (hourRef.current[i].current.style.backgroundColor = "white")
    );
    sethourstate(e.target.innerText);
    e.target.style.backgroundColor = "#afb2c0";
  };

  //Minuitボタンクリック関数
  const handleOnClickminuit = (e) => {
    minuitRef.current.map(
      (value, i) =>
        (minuitRef.current[i].current.style.backgroundColor = "white")
    );
    setminuitstate(e.target.innerText);
    e.target.style.backgroundColor = "#afb2c0";
  };

  return (
    <div className="columns-1 text-center w-1/4">
      <div className="mt-5 h-1500px bg-slate-300 ml-5 mr-5 rounded-md">
        <h3 className="text-center text-xl font-black">AM/PM</h3>
        <div className="text-center">
          {ampm.map((value, i) => (
            <button
              className="m-4  bg-white text-lg rounded-full w-12 h-12 text-center border-solid border-cyan-900 border-5"
              onClick={handleOnClickampm}
              key={indexOfampm}
              ref={ampmRef.current[i]}
              style={{ cursor: "pointer", backgroundColor: "white" }}
            >
              {displayampmValue(value)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 h-1500px bg-slate-300 ml-5 mr-5 rounded-md">
        <h3 className="text-center text-xl font-black">Hour</h3>
        <div className="columns-1 text-center">
          {hour.map((value, i) => (
            <button
              className="m-4  bg-white text-lg rounded-full w-12 h-12 text-center border-solid border-gray-600 border-5"
              onClick={handleOnClickhour}
              key={indexOfHour}
              ref={hourRef.current[i]}
            >
              {displayHourValue(value)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 h-1500px bg-slate-300 ml-5 mr-5 border-none rounded-md">
        <h3 className="text-center text-xl font-black">Minuit</h3>
        <div className="columns-1 text-center">
          {minuit.map((value, i) => (
            <button
              className="m-4  bg-white text-lg rounded-full w-12 h-12 text-center"
              key={indexOfMinuit}
              ref={minuitRef.current[i]}
              onClick={handleOnClickminuit}
            >
              {displayMinuitValue(value)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
