import React from "react";

export default function Clock({
  ampmstate,
  setampmstate,
  sethourstate,
  minuitstate,
  setminuitstate,
  schedulestateAM,
  setschedulestateAM,
  schedulestatePM,
  setschedulestatePM,
  twentyForState,
  setTwentyForState,
  setInputValue,
  ampmRef,
  noHourRef,
  hourRef,
  noMinuitRef,
  minuitRef,
}) {
  const hour = [
    "00",
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
  //24時間ボタンクリック関数
  const handleOnClickTwentyFour = (e) => {
    let boxofTF = e.target.style.backgroundColor;
    let tempboolean = true;
    let doOfBox = [];
    let tempTopTow = "";
    if (boxofTF === "") {
      //最初の処理：なぜか一番初めにバックスタイルが設定がされていないので、こちらの処理をするようにした。
      e.target.style.backgroundColor = "#afb2c0";
      tempboolean = true;
      //AM処理
      doOfBox = [...schedulestateAM];
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestateAM(doOfBox);
      //PM処理
      doOfBox = [];
      doOfBox = [...schedulestatePM];
      doOfBox.map(function (object, i) {
        if (object.hourstatevalue === "--") {
          tempTopTow = object.hourstatevalue;
        } else {
          tempTopTow = String(Number(object.hourstatevalue) + 12);
        }
        object.value = tempTopTow + object.value.substring(2);
      });
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestatePM(doOfBox);
    } else if (boxofTF === "white") {
      e.target.style.backgroundColor = "#afb2c0";
      tempboolean = true;
      //AM処理
      doOfBox = [...schedulestateAM];
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestateAM(doOfBox);
      //PM処理
      doOfBox = [];
      doOfBox = [...schedulestatePM];
      doOfBox.map(function (object, i) {
        if (object.hourstatevalue === "--") {
          tempTopTow = object.hourstatevalue;
        } else {
          tempTopTow = String(Number(object.hourstatevalue) + 12);
        }
        object.value = tempTopTow + object.value.substring(2);
      });
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestatePM(doOfBox);
    } else {
      e.target.style.backgroundColor = "white";
      tempboolean = false;
      //AM処理
      doOfBox = [...schedulestateAM];
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestateAM(doOfBox);
      //PM処理
      doOfBox = [];
      doOfBox = [...schedulestatePM];
      doOfBox.map(function (object, i) {
        tempTopTow = object.hourstatevalue;
        object.value = tempTopTow + object.value.substring(2);
      });
      doOfBox = doOfBox.sort(function (a, b) {
        return a.num < b.num ? -1 : 1;
      });
      setschedulestatePM(doOfBox);
    }
    setTwentyForState(tempboolean);
    console.log("twentyForState", twentyForState);
    console.log("tempboolean", tempboolean);
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
  //時間未定ボタンクリック関数
  const handleOnClickNoHour = (e) => {
    let intNoHour = "";
    hourRef.current.map(
      (value, i) => (hourRef.current[i].current.style.backgroundColor = "white")
    );
    minuitRef.current.map(
      (value, i) =>
        (minuitRef.current[i].current.style.backgroundColor = "white")
    );
    intNoHour = "--";
    sethourstate(intNoHour);
    setminuitstate("--");
    e.target.style.backgroundColor = "#afb2c0";
    noMinuitRef.current.style.backgroundColor = "#afb2c0";
  };
  //Hourボタンクリック関数
  const handleOnClickhour = (e) => {
    //Hourボタンの背景色を白にする
    hourRef.current.map(
      (value, i) => (hourRef.current[i].current.style.backgroundColor = "white")
    );
    //分未定がONだった場合、分設定をするよう処理
    if (minuitstate === "--") {
      noMinuitRef.current.style.backgroundColor = "white";
      setminuitstate("");
    }
    sethourstate(e.target.innerText);
    e.target.style.backgroundColor = "#afb2c0";
    noHourRef.current.style.backgroundColor = "white";
  };
  //分未定ボタンクリック関数
  const handleOnClickNoMinuit = (e) => {
    minuitRef.current.map(
      (value, i) =>
        (minuitRef.current[i].current.style.backgroundColor = "white")
    );
    let intNoMinuit = "--";
    setminuitstate(intNoMinuit);
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
    noMinuitRef.current.style.backgroundColor = "white";
  };

  return (
    <div className="columns-1 text-center w-1/4">
      <div className="mt-5 h-1500px bg-slate-300 ml-5 mr-5 rounded-md">
        <h3 className="text-center text-xl font-black">AM/PM</h3>
        <button
          className="mt-1 bg-white text-sm rounded-full w-20 h-8 text-center  "
          onClick={handleOnClickTwentyFour}
        >
          24時間表記
        </button>
        <div className="text-center">
          {ampm.map((value, i) => (
            <button
              className="m-4 bg-white text-lg rounded-full w-12 h-12 text-center    "
              onClick={handleOnClickampm}
              key={indexOfampm}
              ref={ampmRef.current[i]}
            >
              {displayampmValue(value)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 h-1500px bg-slate-300 ml-5 mr-5 rounded-md">
        <h3 className="text-center text-xl font-black">Hour</h3>
        <button
          className="mt-1 bg-white text-sm rounded-full w-20 h-8 text-center border-solid border-cyan-900 border-5 "
          onClick={handleOnClickNoHour}
          ref={noHourRef}
        >
          時間未定
        </button>
        <div className="columns-1 text-center">
          {hour.map((value, i) => (
            <button
              className="mr-2 ml-2 mb-4  mt-4 bg-white text-lg rounded-full w-10 h-10 text-center border-solid border-gray-600 border-5 "
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
        <button
          className="mt-1 bg-white text-sm rounded-full w-20 h-8 text-center border-solid border-cyan-900 border-5 "
          onClick={handleOnClickNoMinuit}
          ref={noMinuitRef}
        >
          分未定
        </button>
        <div className="columns-1 text-center">
          {minuit.map((value, i) => (
            <button
              className="mr-2 ml-2 mb-4 mt-4  bg-white text-lg rounded-full w-10 h-10 text-center "
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
