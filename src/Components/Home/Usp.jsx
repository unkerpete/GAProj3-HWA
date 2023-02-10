import React from "react";
import UspAccordian from "./UspAccordian";

const UspAccordianData = [
  {
    subheader: "The support you need, all in one place.",
    body: "We help you to get real and reliable support with controlled costs. From rehabilitation, home care, transportation, and an empathetic network.",
  },
  {
    subheader: "A community advocating for one another.",
    body: "Fostering awareness, and building an inclusive and tight knit community that empowers through self-help and mutual support.",
  },
  {
    subheader: "Let's discover your new normal",
    body: "Our team encourages you to build abilities beyond limitations through comprehensive support and constant innovation.",
  },
];

const Usp = () => {
  return (
    <div className="grid grid-cols-2 bg-secondary-200 p-20">
      <div className="grid">
        <div className="place-content-start">
          <p className="text-primary-800 font-DM text-3xl font-medium">
            What makes us different?
          </p>
        </div>

        <div className="place-content-center">
          {UspAccordianData.map((item, index) => {
            return (
              <UspAccordian
                key={index}
                subheader={item.subheader}
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
