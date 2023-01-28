import React from "react";

export const Header = () => {
  //西暦の日付表示用関数
  const getDate = () => {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    const dayOfWeek = today.getDay();
    const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];
    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    const date =
      today.getFullYear() +
      "-" +
      month +
      "-" +
      day +
      " " +
      dayOfWeekStr +
      "曜日";
    return date;
  };

  return (
    <div className="w-full h-20 flex items-center top-0 left-0 bg-slate-500 p-10 bg-opacity-75">
      <h1 className="ml-0 drop-shadow-lg text-4xl font-sans text-white font-bold">
        My Schedule
      </h1>
      <h2 className="text-center text-2xl font-sans text-white ml-10 ">
        {" "}
        {getDate()}
      </h2>
      <h3 className=" ml-10  text-white">
        ①AM,PMを選択　②Hourを選択　③Minuitを選択　④Planを選択（追記がある時はPlanボタンを押す前にAbout
        Planに入力する）⑤Scheduleを消すときは文字をクリック
      </h3>
    </div>
  );
};
