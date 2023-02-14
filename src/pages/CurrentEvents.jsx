import React, { useState, createContext, useEffect } from "react";
import PictureCards from "../Components/PictureCards";
import TagsDisplay from "../Components/Current-Events/TagsDisplay";
import EventsSectionHeader from "../Components/Current-Events/EventsSectionHeader";
import EventsModal from "../Components/Current-Events/EventsModal";
export const ModalContext = createContext();

//DELETE THIS LATER
import dummyEvents from "../Components/Current-Events/dummyEvents";

const CurrentEvents = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalEvent, setModalEvent] = useState({});
  const [dateRange, setDateRange] = useState("Current");
  const [selectedTag, setSelectedTag] = useState("All");
  const [pictureInfo, setPictureInfo] = useState(dummyEvents);

  // const getUrl = (dateRange, selectedTag) => {
  //   switch [data, selectedTag] {case ["All",]}
  // }

  const changeModalStatus = () => {
    setModalIsActive(!modalIsActive);
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
        changeModalStatus,
        disableScroll,
        enableScroll,
        setDateRange,
        setSelectedTag,
        setModalEvent,
        setPictureInfo,
      }}
    >
      <div>
        <EventsSectionHeader />
        <TagsDisplay />
        <PictureCards pictureInfo={pictureInfo} vertical />
        {modalIsActive && <EventsModal />}
      </div>
    </ModalContext.Provider>
  );
};
export default CurrentEvents;
