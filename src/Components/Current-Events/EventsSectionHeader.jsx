import React, { useContext } from "react";
import { ModalContext } from "../../pages/CurrentEvents";

const filterTypes = ["Current", "Upcoming", "Past", "Filter Dates →"];

const EventsSectionHeader = () => {
  const modalCtx = useContext(ModalContext);

  const handleClick = (e) => {
    modalCtx.setDateRange(e.target.value);
  };

  return (
    <div className="grid h-[329px] bg-peach pl-20 text-primary-800  content-end">
      <h1 className="mb-20">Events</h1>
      <div className="flex flex-row">
        {filterTypes.map((filter, idex) => {
          return (
            <button
              key={idex}
              className={`${
                modalCtx.dateRange === filter
                  ? "border-primary-800 font-bold"
                  : "border-peach"
              } p-4 font-DM text-xl font-normal border-b-4`}
              onClick={handleClick}
              value={filter}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EventsSectionHeader;
