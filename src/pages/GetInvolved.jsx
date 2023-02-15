import React, { useState, useContext, useEffect } from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
// import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";
import MakeADonation from "../Components/Get-Involved/MakeADonation";
import tabContext from "../context/tabContext";
import PictureCards from "../Components/PictureCards";

const GetInvolved = () => {
  const tabCtx = useContext(tabContext);

  // fetch data

  const [pictureInfo, setPictureInfo] = useState([]);
  const url = "http://127.0.0.1:5001/events/currentevents";

  useEffect(() => {
    const getAllEvents = async () => {
      let data = {
        withinTheseDays: "3",
        tag: [
          "Fundraisers",
          "Talks",
          "Community Gathering",
          "Classes & Workshops",
        ],
      };
      try {
        const response = await fetch(url, {
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

    getAllEvents();
  }, []);

  return (
    <div>
      <SectionHeader />
      {/* Tab Switching */}
      <div className="">
        {tabCtx.getInvolvedActiveTab === "tab1" && (
          <div>
            <MakeADonation />
          </div>
        )}
        {tabCtx.getInvolvedActiveTab === "tab2" && (
          <div>
            <Volunteers />
            {/* <PictureCards /> */}
            <div className="flex flex-col p-20 text-primary-800 h-5/6 content-between">
              <PictureCards pictureInfo={pictureInfo} />
            </div>

            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;
