import React from "react";
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
  inputValue,
  setInputValue,
  twentyForState,
  ampmRef,
  hourRef,
  minuitRef,
}) {
  const items = [
    "ðèµ·ãã",
    "ð»ä»äº",
    "ðé¢¨å",
    "ðå¯ã",
    "ð³æé£",
    "ðæ¼é£",
    "ðå¤é£",
    "ð½ï¸é£äº",
    "ðªæç",
    "ð§¹æé¤",
    "ð§ºæ´æ¿¯",
    "ð å®¶äº",
    "ðè²·ãç©",
    "ð¶ç¨äº",
    "ðã¬ã¸ã£ã¼",
    "ð©å¸°å®",
    "ðªå®¶æ",
    "ð¥°äº¤å",
    "ð¤åºä¼ã",
    "ðçºä¿¡",
    "ð¸ä¿è²å",
    "ðå­¦ã³",
    "ðµéã¶",
    "ð§ã±ã¢",
    "ðªç­ãã¬",
    "ð¤¸æè»",
    "ð§çæ³",
    "ðéå",
    "ðï¸åå¼·",
    "ðèª­æ¸",
    "ð¨åµä½",
    "ð¤ãã®ä»",
  ];
  let indexOfItems = 200;
  let itemsOfBox = [];

  const displayItemsValue = (value) => {
    //idè¨­å®ã¨Valueè¡¨ç¤ºããã
    indexOfItems = items.indexOf(value) + 1;
    itemsOfBox = [
      ...itemsOfBox,
      { id: indexOfItems, value: value, completed: false },
    ];
    return value;
  };
  //About Planãã¿ã³ã¯ãªãã¯
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  //Planãã¿ã³ã¯ãªãã¯
  const handleOnClickplan = (e) => {
    let doOfBox = {};
    let temphour = "";
    let tempminuit = "";
    let plan = e.target.innerText;
    let tempTopTow = "";
    doOfBox.id = uuid();
    doOfBox.plan = e.target.innerText;
    //ä¸¦ã³å¤ãç¨ã®hourãè¨­å®
    if (Number(hourstate) >= 0 && Number(hourstate) <= 12) {
      temphour = Number(hourstate + 1);
    } else {
      temphour = 0;
    }
    //ä¸¦ã³å¤ãç¨ã®minuitãè¨­å®
    if (Number(minuitstate) >= 0 && Number(minuitstate) <= 55) {
      tempminuit = Number(minuitstate + 1);
    } else {
      tempminuit = 0;
    }
    doOfBox.num = temphour * 100 + tempminuit;
    //æå»ãé¸æããã¦ããªãå ´åã®ã¢ã©ã¼ã
    if (ampmstate === "") {
      alert("am/pmãé¸æãã¦ãã ãã");
    } else {
      if (ampmstate === "am") {
        doOfBox.num = 10000 + doOfBox.num;
      } else {
        doOfBox.num = 20000 + doOfBox.num;
      }
      doOfBox.ampmvalue = ampmstate;
    }
    if (hourstate === "") {
      alert("hourãé¸æãã¦ãã ãã");
    } else {
      doOfBox.hourstatevalue = hourstate;
    }
    if (minuitstate === "") {
      alert("minuitãé¸æãã¦ãã ãã");
    } else {
      doOfBox.minuitstatevalue = minuitstate;
    }
    //æå»ãé¸æããã¦ããå ´åã®å¦ç
    if ((ampmstate !== "") & (hourstate !== "") & (minuitstate !== "")) {
      //AboutPlanãå¥åããã¦ããå ´å
      if (inputValue !== "") {
        doOfBox.value =
          hourstate + ":" + minuitstate + " " + plan + " - " + inputValue;
      }
      //AboutPlanãå¥åããã¦ããªãã£ãå ´å
      else {
        doOfBox.value = hourstate + ":" + minuitstate + " " + plan;
      }
      //AMéåãPMéåã«å¥ãã
      if (ampmstate === "am") {
        doOfBox = [...schedulestateAM, doOfBox];
        doOfBox = doOfBox.sort(function (a, b) {
          return a.num < b.num ? -1 : 1;
        });
        setschedulestateAM(doOfBox);
      } else {
        doOfBox = [...schedulestatePM, doOfBox];
        //24æéè¡¨è¨ã®åå²
        if (twentyForState === true) {
          doOfBox.map(function (object, i) {
            if (object.hourstatevalue === "--") {
              tempTopTow = object.hourstatevalue;
            } else {
              tempTopTow = String(Number(object.hourstatevalue) + 12);
            }
            object.value = tempTopTow + object.value.substring(2);
          });
        } else {
          doOfBox.map(function (object, i) {
            tempTopTow = object.hourstatevalue;
            object.value = tempTopTow + object.value.substring(2);
          });
        }
        doOfBox = doOfBox.sort(function (a, b) {
          return a.num < b.num ? -1 : 1;
        });
        setschedulestatePM(doOfBox);
      }
      console.log("end of items", twentyForState);
      setInputValue("");
    }
  };
  return (
    <div className="mt-5 w-1/3 h-full bg-slate-300 ml-5 mr-5 border-none rounded-md items-center ">
      <h3 className="text-center text-xl font-black">Plan</h3>
      <div className="flex text-center">
        <label className=" font-sans ml-12 ">
          About Plan
          <input
            className=" font-sans ml-8 mr-5  mb-2 mt-2 rounded-md place-items-center w-4/6"
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
            className="mr-3 ml-3 mt-2 mb-2  bg-slate-100 text-base rounded-full w-20 h-12 text-center font-semibold hover:bg-slate-400"
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
