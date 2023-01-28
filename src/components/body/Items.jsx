import React from "react";
import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";

export default function Items({
  ampmstate,
  setampmstate,
  hourstate,
  sethourstate,
  minuitstate,
  setminuitstate,
  schedulestateAM,
  setschedulestateAM,
  schedulestatePM,
  setschedulestatePM,
  setInputValue,
  inputValue,
  ampmRef,
  hourRef,
  minuitRef,
}) {
  const items = [
    "🌞起きる",
    "🍽️食事",
    "🛁風呂",
    "🛌寝る",
    "💻仕事",
    "🏠家事",
    "🚶外出",
    "🍹外食",
    "😀レジャー",
    "👪家族",
    "🥰交友",
    "🤝出会い",
    "🤸‍♀️運動",
    "🖊️勉強",
    "🤍その他",
  ];
  let indexOfItems = 200;
  let itemsOfBox = [];

  const displayItemsValue = (value) => {
    //id設定とValue表示をする
    indexOfItems = items.indexOf(value) + 1;
    itemsOfBox = [
      ...itemsOfBox,
      { id: indexOfItems, value: value, completed: false },
    ];
    return value;
  };

  //About Planボタンクリック
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //Planボタンクリック
  const handleOnClickplan = (e) => {
    let space = "　　　";
    let doOfBox = {};
    let plan = e.target.innerText;
    doOfBox.id = uuid();
    doOfBox.num = Number(hourstate) * 100 + Number(minuitstate);
    //時刻が選択されていない場合のアラート
    if (ampmstate === "") {
      alert("am/pmを選択してください");
    } else {
      if (ampmstate === "am") {
        doOfBox.num = 10000 + doOfBox.num;
      } else {
        doOfBox.num = 20000 + doOfBox.num;
      }
      doOfBox.ampmvalue = ampmstate;
    }
    console.log(doOfBox.num);
    if (hourstate === "") {
      alert("hourを選択してください");
    } else {
      doOfBox.hourstatevalue = hourstate;
    }
    if (minuitstate === "") {
      alert("minuitを選択してください");
    } else {
      doOfBox.minuitstatevalue = minuitstate;
    }
    //時刻が選択されていた場合の処理
    if ((ampmstate !== "") & (hourstate !== "") & (minuitstate !== "")) {
      //AboutPlanが入力されていた場合
      if (inputValue !== "") {
        doOfBox.value =
          hourstate + ":" + minuitstate + " " + plan + " - " + inputValue;
      }
      //AboutPlanが入力されていなかった場合
      else {
        doOfBox.value = hourstate + ":" + minuitstate + " " + plan;
      }
      if (ampmstate === "am") {
        doOfBox = [...schedulestateAM, doOfBox];
        doOfBox = doOfBox.sort(function (a, b) {
          return a.num < b.num ? -1 : 1;
        });
        setschedulestateAM(doOfBox);
      } else {
        doOfBox = [...schedulestatePM, doOfBox];
        doOfBox = doOfBox.sort(function (a, b) {
          return a.num < b.num ? -1 : 1;
        });
        setschedulestatePM(doOfBox);
      }

      setInputValue("");
    }
  };
  return (
    <div className="mt-5 w-1/4 h-full bg-slate-300 ml-5 mr-5 border-none rounded-md items-center ">
      <h3 className="text-center text-xl font-black">Plan</h3>
      <div className="flex text-center">
        <label className=" font-sans ml-4 ">
          About Plan
          <input
            className=" font-sans ml-5 mr-5  rounded-md place-items-center"
            autoFocus
            type="text"
            onChange={handleChange}
            value={inputValue}
            maxLength="60"
            size="36"
          />
        </label>
      </div>
      <div className="columns-1 text-center">
        {items.map((value) => (
          <button
            className="m-5  bg-slate-100 text-xl rounded-full w-24 h-20 text-center font-semibold"
            key={indexOfItems}
            onClick={handleOnClickplan}
          >
            {displayItemsValue(value)}
          </button>
        ))}
      </div>
    </div>
  );
}
