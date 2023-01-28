import React, { useState, useRef } from "react";
import Clock from "./Clock";
import Items from "./Items";
import Schedule from "./Schedule";

export default function Body() {
  const [ampmstate, setampmstate] = useState("");
  const [hourstate, sethourstate] = useState("");
  const [minuitstate, setminuitstate] = useState("");
  const [planstate, setplanstate] = useState("");
  const [schedulestateAM, setschedulestateAM] = useState([]);
  const [schedulestatePM, setschedulestatePM] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const ampmRef = useRef([]);
  const hourRef = useRef([]);
  const minuitRef = useRef([]);

  const deleteDo = (id) => {
    let dovalue = "";
    let donum = 0;
    let newList = [];
    if ((dovalue = schedulestateAM.find((value) => value.id === id))) {
      newList = [...schedulestateAM];
      donum = schedulestateAM.indexOf(dovalue);
      newList.splice(donum, 1);
      setschedulestateAM(newList);
    } else {
      dovalue = schedulestatePM.find((value) => value.id === id);
      newList = [...schedulestatePM];
      donum = schedulestatePM.indexOf(dovalue);
      newList.splice(donum, 1);
      setschedulestatePM(newList);
    }
  };

  return (
    <div className="flex place-content-evenly h-full">
      <Clock
        ampmstate={ampmstate}
        setampmstate={setampmstate}
        sethourstate={sethourstate}
        setminuitstate={setminuitstate}
        ampmRef={ampmRef}
        hourRef={hourRef}
        minuitRef={minuitRef}
      />
      <Items
        planstate={planstate}
        setplanstate={setplanstate}
        ampmstate={ampmstate}
        setampmstate={setampmstate}
        hourstate={hourstate}
        sethourstate={sethourstate}
        minuitstate={minuitstate}
        setminuitstate={setminuitstate}
        schedulestateAM={schedulestateAM}
        setschedulestateAM={setschedulestateAM}
        schedulestatePM={schedulestatePM}
        setschedulestatePM={setschedulestatePM}
        inputValue={inputValue}
        setInputValue={setInputValue}
        ampmRef={ampmRef}
        hourRef={hourRef}
        minuitRef={minuitRef}
      />
      <Schedule
        schedulestateAM={schedulestateAM}
        schedulestatePM={schedulestatePM}
        deleteDo={deleteDo}
      />
    </div>
  );
}
