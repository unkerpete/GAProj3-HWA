import React from "react";

const filterByCurrent = () => {
  //FILTER FROM DATABASE
  console.log("filterByCurrent");
};

const filterByUpcoming = () => {
  //FILTER FROM DATABASE
  console.log("filterByUpComing");
};

const filterByPast = () => {
  // FILTER FROM DATABASE
  console.log("filterByPast");
};

const pullCalendar = () => {
  console.log("pullCalendar");
};

const EventsSectionHeader = () => {
  return (
    <div className="grid h-[329px] bg-peach pl-20 text-primary-800  content-end">
      <h1 className="mb-20">Events</h1>
      <div className="flex flex-row">
        <button
          className={
            "p-4 font-DM text-xl font-normal focus:font-bold border-b-4 border-peach focus:border-primary-800 "
          }
          onClick={filterByCurrent}
        >
          Current
        </button>
        <button
          className={
            "p-4 font-DM text-xl font-normal focus:font-bold border-b-4 border-peach focus:border-primary-800 "
          }
          onClick={filterByUpcoming}
        >
          Upcoming
        </button>
        <button
          className={
            "p-4  font-DM text-xl font-normal focus:font-bold border-b-4 border-peach focus:border-primary-800 "
          }
          onClick={filterByPast}
        >
          Past
        </button>
        <button
          className={
            "p-4  font-DM text-xl font-normal focus:font-bold border-b-4 border-peach focus:border-primary-800 "
          }
          onClick={pullCalendar}
        >
          Filter Dates &rarr;
        </button>
      </div>
    </div>
  );
};

export default EventsSectionHeader;
