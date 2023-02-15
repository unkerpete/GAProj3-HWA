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
  const [pictureInfo, setPictureInfo] = useState([]);
  // const [refresh, setRefresh] = useState(true);

  // The 2 APIs, one showing today + 3 days, the other showing everything else after that.
  const currentEventsUrl = "http://127.0.0.1:5001/events/currentevents";
  const upcomingEventsUrl = "http://127.0.0.1:5001/events/upcomingevents";
  const pastEventsUrl = "http://127.0.0.1:5001/events/pastevents";

  // fetches these data on change of dateRange state or selectedTag state,

  useEffect(() => {
    if (dateRange === "Current") {
      if (selectedTag === "All") {
        const getAllCurrentEvents = async () => {
          let data = {
            withinTheseDays: 3,
            tag: [
              "Fundraisers",
              "Talks",
              "Community Gathering",
              "Classes & Workshops",
            ],
          };
          try {
            const response = await fetch(currentEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getAllCurrentEvents();
      } else {
        const getSelectedCurrentEvents = async () => {
          let data = {
            withinTheseDays: 3,
            tag: selectedTag,
          };
          try {
            const response = await fetch(currentEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getSelectedCurrentEvents();
      }
    } else if (dateRange === "Upcoming") {
      if (selectedTag === "All") {
        const getAllUpcomingEvents = async () => {
          let data = {
            afterTheseDays: 3,
            tag: [
              "Fundraisers",
              "Talks",
              "Community Gathering",
              "Classes & Workshops",
            ],
          };
          try {
            const response = await fetch(upcomingEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getAllUpcomingEvents();
      } else {
        const getSelectedUpcomingEvents = async () => {
          let data = {
            afterTheseDays: 3,
            tag: selectedTag,
          };
          try {
            const response = await fetch(upcomingEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getSelectedUpcomingEvents();
      }
    } else if (dateRange === "Past") {
      let today = new Date();
      if (selectedTag === "All") {
        const getAllPastEvents = async () => {
          let data = {
            dateStart: today,
            tag: [
              "Fundraisers",
              "Talks",
              "Community Gathering",
              "Classes & Workshops",
            ],
          };
          try {
            const response = await fetch(pastEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getAllPastEvents();
      } else {
        const getSelectedPastEvents = async () => {
          let data = {
            dateStart: today,
            tag: selectedTag,
          };
          try {
            const response = await fetch(pastEventsUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            const results = await response.json();
            setPictureInfo(results);
            console.log(results);
          } catch (error) {
            console.error(error);
          }
        };

        getSelectedPastEvents();
      }
    }
  }, [dateRange, selectedTag]);

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
