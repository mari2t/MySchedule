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
    "🌞起きる",
    "💻仕事",
    "🛁風呂",
    "🛌寝る",
    "🍳朝食",
    "🍔昼食",
    "🍕夕食",
    "🍽️食事",
    "🔪料理",
    "🧹掃除",
    "🧺洗濯",
    "🏠家事",
    "🛒買い物",
    "🚶用事",
    "😀レジャー",
    "🚩帰宅",
    "👪家族",
    "🥰交友",
    "🤝出会い",
    "🎈発信",
    "🚸保育園",
    "📝学び",
    "🎵遊ぶ",
    "🧒ケア",
    "💪筋トレ",
    "🤸柔軟",
    "🧘瞑想",
    "🏃運動",
    "🖊️勉強",
    "📚読書",
    "🎨創作",
    "🤍その他",
    "てすと",
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
    let doOfBox = {};
    let temphour = "";
    let tempminuit = "";
    let plan = e.target.innerText;
    let tempTopTow = "";
    doOfBox.id = uuid();
    doOfBox.plan = e.target.innerText;
    //並び変え用のhourを設定
    if (Number(hourstate) >= 0 && Number(hourstate) <= 12) {
      temphour = Number(hourstate + 1);
    } else {
      temphour = 0;
    }
    //並び変え用のminuitを設定
    if (Number(minuitstate) >= 0 && Number(minuitstate) <= 55) {
      tempminuit = Number(minuitstate + 1);
    } else {
      tempminuit = 0;
    }
    doOfBox.num = temphour * 100 + tempminuit;
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
      //AM配列、PM配列に入れる
      if (ampmstate === "am") {
        doOfBox = [...schedulestateAM, doOfBox];
        doOfBox = doOfBox.sort(function (a, b) {
          return a.num < b.num ? -1 : 1;
        });
        setschedulestateAM(doOfBox);
      } else {
        doOfBox = [...schedulestatePM, doOfBox];
        //24時間表記の分岐
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
