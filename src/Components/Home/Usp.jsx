import React from "react";
import UspAccordion from "./UspAccordion";

const UspAccordionData = [
  {
    subheader1: "The support you need,",
    subheader2: " all in one place.",
    body: "We help you to get real and reliable support with controlled costs. From rehabilitation, home care, transportation, and an empathetic network.",
  },
  {
    subheader1: "A community advocating",
    subheader2: "for one another.",
    body: "Fostering awareness, and building an inclusive and tight knit community that empowers through self-help and mutual support.",
  },
  {
    subheader1: "Let's discover",
    subheader2: "your new normal",
    body: "Our team encourages you to build abilities beyond limitations through comprehensive support and constant innovation.",
  },
];

const Usp = () => {
  return (
    <div className="grid grid-cols-2 bg-secondary-200 p-20 text-primary-800">
      <div className="grid">
        <div className="place-content-start">
          <p className="font-DM text-3xl font-medium">
            What makes us different?
          </p>
        </div>

        <div className="place-content-center">
          {UspAccordionData.map((item, index) => {
            return (
              <UspAccordion
                key={index}
                subheader1={item.subheader1}
                subheader2={item.subheader2}
                body={item.body}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <img src="src/Assets/shujun/homepage/usp/Stats_1.png" />
      </div>
    </div>
  );
};

export default Usp;
