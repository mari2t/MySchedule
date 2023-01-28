import React from "react";

export const DisplayTodayDid = ({ value, deleteDo }) => {
  const handleOnClickDelete = (e) => {
    deleteDo(e.target.id);
  };
  return (
    <div
      className="text-xl"
      key={value.id}
      id={value.id}
      onClick={handleOnClickDelete}
    >
      {value.value}
    </div>
  );
};
