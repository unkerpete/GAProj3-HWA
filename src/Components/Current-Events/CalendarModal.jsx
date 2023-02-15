import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import ButtonOther from "../ButtonOther";
import ReactDOM from "react-dom";
import { ModalContext } from "../../pages/CurrentEvents";
import CalendarComp from "../CalendarComp";

const CalendarModal = () => {
  const modalCtx = useContext(ModalContext);

  const handleCalendarClose = () => {
    modalCtx.changeCalendarStatus();
    modalCtx.enableScroll("root");
  };

  const handleApplyDates = () => {
    console.log("applying dates");
    modalCtx.handleCalendarRange();
    handleCalendarClose();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="fixed top-0 right-0 w-screen h-screen z-40 bg-slate-800 opacity-50" />
          <div className=" z-50 absolute bg-white w-1/2 h-screen top-0 right-0 text-primary-800 p-8 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h3 className="mb-20">Select your dates</h3>
              <div onClick={handleCalendarClose} style={{ cursor: "pointer" }}>
                <RxCross1 className="text-3xl" />
              </div>
            </div>

            <CalendarComp />

            <div className="flex justify-center pt-28">
              <ButtonOther
                type="button"
                onClick={handleApplyDates}
                text="Apply Dates"
              />
            </div>
          </div>
        </>,

        document.querySelector("#calendar-root")
      )}
    </>
  );
};

export default CalendarModal;
