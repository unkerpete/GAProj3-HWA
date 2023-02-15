import React, { useState, createContext, useEffect } from "react";
import PictureCards from "../Components/PictureCards";
import TagsDisplay from "../Components/Current-Events/TagsDisplay";
import EventsSectionHeader from "../Components/Current-Events/EventsSectionHeader";
import EventsModal from "../Components/Current-Events/EventsModal";
import CalendarModal from "../Components/Current-Events/CalendarModal";
export const ModalContext = createContext();

//DELETE THIS LATER
import dummyEvents from "../Components/Current-Events/dummyEvents";

const CurrentEvents = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalEvent, setModalEvent] = useState({});
  const [calendarIsActive, setCalendarIsActive] = useState(false);
  const [dateRange, setDateRange] = useState("Current");
  const [selectedTag, setSelectedTag] = useState("All");
  const [pictureInfo, setPictureInfo] = useState(dummyEvents);
  // const [refresh, setRefresh] = useState(true);
  // const url = "http://127.0.0.1:5001/events/showbytagrange";

  // const getFilteredEvents = async () => {
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((results) => {
  //       setPictureInfo(results);
  //     })
  //     .catch((error) => console.error(error));
  //   setRefresh(false);
  // };

  // useEffect(() => {
  //   if (refresh) {
  //     getFilteredEvents();
  //   }
  // }, [refresh]);

  // const getUrl = (dateRange, selectedTag) => {
  //   let url;
  //   switch (true) {
  //     case dateRange === "Current":
  //     case dateRange === "Upcoming":
  //     case dateRange === "Past":
  //       url = "http://127.0.0.1:5001/events/";
  //       break;
  //     case selectedTag === "All":
  //       url = getUrl(dateRange, "");
  //       break;
  //     default:
  //       url = `http://127.0.0.1:5001/events?date=${dateRange}&tag=${selectedTag}`;
  //   }
  //   return url;
  // };

  const changeModalStatus = () => {
    setModalIsActive(!modalIsActive);
  };

  const changeCalendarStatus = () => {
    setCalendarIsActive(!calendarIsActive);
  };

  const disableScroll = (id) => {
    document.getElementById(id).style.overflow = "hidden";
    document.getElementById(id).style.height = "100vh";
  };

  const enableScroll = (id) => {
    document.getElementById(id).style.overflow = "auto";
  };

  /////////FOR CHECKING ONLY LATER DELETE///////////////////////
  console.log(`Date Range:${dateRange},Tag:${selectedTag}`);
  useEffect(() => {
    console.log(`Event Modal:${modalEvent}`);
  }, [modalEvent]);
  /////////FOR CHECKING ONLY LATER DELETE///////////////////////

  return (
    <ModalContext.Provider
      value={{
        modalIsActive,
        modalEvent,
        dateRange,
        selectedTag,
        pictureInfo,
        calendarIsActive,
        changeModalStatus,
        disableScroll,
        enableScroll,
        setDateRange,
        setSelectedTag,
        setModalEvent,
        setPictureInfo,
        changeCalendarStatus,
        // getFilteredEvents,
      }}
    >
      <div>
        <EventsSectionHeader />
        <TagsDisplay />
        <PictureCards pictureInfo={pictureInfo} vertical />
        {modalIsActive && <EventsModal />}
        {calendarIsActive && <CalendarModal />}
      </div>
    </ModalContext.Provider>
  );
};
export default CurrentEvents;
