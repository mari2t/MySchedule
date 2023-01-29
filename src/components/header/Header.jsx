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
    <div className="w-full h-20 flex items-center text-center top-0 left-0 bg-slate-500 p-10 bg-opacity-75">
      <h1 className="ml-0 drop-shadow-lg text-4xl font-sans text-white font-bold">
        My Schedule
      </h1>
      <h2 className="text-center text-2xl font-sans text-white ml-10 ">
        {" "}
        {getDate()}
      </h2>
      <h3 className="text-center text-basic font-sans text-white ml-10 ">
        ①AM/PM,Hour,Minuit,Planを選択　※追記がある時はPlanボタンを押す前にAboutPlanに入力　②テキストをコピペして適宜貼り付け
      </h3>
    </div>
  );
};
