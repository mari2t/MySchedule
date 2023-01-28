import React from "react";
import { DisplayTodayDid } from "./Displaydo";

export default function Schedule({
  schedulestateAM,
  schedulestatePM,
  deleteDo,
}) {
  return (
    <div className="mt-5 w-1/4 h-1500px bg-slate-300 ml-5 mr-5 border-none rounded-md text-center ">
      <h3 className="text-center text-xl font-black">Schedule</h3>
      <div className="m-0">
        <div className="columns-1">
          <h4 className="text-center text-lg font-black">---AM---</h4>
          <div className="text-left ml-12">
            {schedulestateAM.map((value) => (
              <DisplayTodayDid
                key={value.id}
                value={value}
                deleteDo={deleteDo}
              />
            ))}
          </div>
        </div>
        <div className=" columns-1">
          <h4 className="text-center text-lg font-black">---PM---</h4>
          <div className="text-left ml-12">
            {schedulestatePM.map((value) => (
              <DisplayTodayDid
                key={value.id}
                value={value}
                deleteDo={deleteDo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
