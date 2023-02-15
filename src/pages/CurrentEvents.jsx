import React, { useState, createContext, useEffect } from "react";
import PictureCards from "../Components/PictureCards";
import TagsDisplay from "../Components/Current-Events/TagsDisplay";
import EventsSectionHeader from "../Components/Current-Events/EventsSectionHeader";
import EventsModal from "../Components/Current-Events/EventsModal";
import CalendarModal from "../Components/Current-Events/CalendarModal";
export const ModalContext = createContext();
import axios from "axios";
import spinner from "../Components/Get-Involved/loadingspinner.svg";
//DELETE THIS LATER
import dummyEvents from "../Components/Current-Events/dummyEvents";

const CurrentEvents = () => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalEvent, setModalEvent] = useState({});
  const [calendarIsActive, setCalendarIsActive] = useState(false);
  const [dateRange, setDateRange] = useState("Current");
  const [selectedTag, setSelectedTag] = useState("All");
  const [pictureInfo, setPictureInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [refresh, setRefresh] = useState(true);
  ////////////////////////////////////////////////////////////////
  // FIXME: calendar
  const [calRange, setCalRange] = useState(new Date());

  // The 3 APIs, one showing today + 3 days, the other showing everything else after that. Past events show events with start date prior to today.
  const currentEventsUrl = "http://127.0.0.1:5001/events/currentevents";
  const upcomingEventsUrl = "http://127.0.0.1:5001/events/upcomingevents";
  const pastEventsUrl = "http://127.0.0.1:5001/events/pastevents";
  const calRangeURL = "http://127.0.0.1:5001/events/showbyrange";

  // fetches these data on change of dateRange state or selectedTag state,

  useEffect(() => {
    if (dateRange === "Current") {
      if (selectedTag === "All") {
        const getAllCurrentEvents = async () => {
          setIsLoading(true);
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
          setIsLoading(false);
        };

        getAllCurrentEvents();
      } else {
        const getSelectedCurrentEvents = async () => {
          setIsLoading(true);
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
          setIsLoading(false);
        };

        getSelectedCurrentEvents();
      }
    } else if (dateRange === "Upcoming") {
      if (selectedTag === "All") {
        const getAllUpcomingEvents = async () => {
          setIsLoading(true);
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
          setIsLoading(false);
        };

        getAllUpcomingEvents();
      } else {
        const getSelectedUpcomingEvents = async () => {
          setIsLoading(true);
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
          setIsLoading(false);
        };

        getSelectedUpcomingEvents();
      }
    } else if (dateRange === "Past") {
      let today = new Date();
      if (selectedTag === "All") {
        setIsLoading(true);
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
          setIsLoading(false);
        };

        getAllPastEvents();
      } else {
        const getSelectedPastEvents = async () => {
          setIsLoading(true);
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
          setIsLoading(false);
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
  ////////////////////////////////
  // FIXME: FETCHING CALENDAR RANGE AND UPDATING INTO STATE////

  const handleCalendarRange = async () => {
    setIsLoading(true);
    const startDate = calRange[0].toISOString().split("T");
    const endDate = calRange[1].toISOString().split("T");

    try {
      const res = await axios.post(calRangeURL, {
        startDate: startDate[0],
        endDate: endDate[0],
        // startDate: new Date("2023-02-17"),
        // endDate: new Date("2023-02-18"),
      });
      setPictureInfo(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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
        calRange, // FIXME:
        setCalRange,
        handleCalendarRange,
      }}
    >
      <div>
        <EventsSectionHeader />
        <TagsDisplay />
        <div className="">
          {isLoading && (
            <img src={spinner} width="200" className="mx-auto m-0" />
          )}
        </div>
        <PictureCards pictureInfo={pictureInfo} vertical />
        {modalIsActive && <EventsModal />}
        {calendarIsActive && <CalendarModal />}
      </div>
    </ModalContext.Provider>
  );
};
export default CurrentEvents;
