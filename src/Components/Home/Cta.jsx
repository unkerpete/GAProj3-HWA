import React from "react";
import Button from "../Button";

const ctaCardData = [
  {
    type: "Individual",
    icon: "src/Assets/shujun/homepage/cta/cta_Donate_icon.png",
    alt: "Heart icon",
    body: "Your gift helps keep our services accessible to those who need them most.",
    btnText: "Make a Donation",
    btnLink: "/get-involved/",
  },
  {
    type: "Corporate",
    icon: "src/Assets/shujun/homepage/cta/cta_Contact_icon.png",
    alt: "Email icon",
    body: "Want to get in touch? We'd love to help.",
    btnText: "Get in Touch",
    btnLink: "/contact-us/",
  },
];

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Cta = () => {
  return (
    <div className="grid grid-cols-2 p-20 space-x-8">
      {ctaCardData.map((item, index) => {
        return (
          <div
            className="flex flex-col rounded-xl bg-secondary-400 p-14 text-primary-800"
            key={index}
          >
            <div className="flex flex-row justify-center h-9 mb-7">
              <img src={item.icon} alt={item.alt} className="object-contain" />
              <h3>{item.type}</h3>
            </div>
            <div className="flex justify-center mb-5">
              <p className="text-center justify-center font-DM text-lg font-normal w-3/4">
                {item.body}
              </p>
            </div>
            <div className="flex justify-center mt-auto">
              <Button
                text={item.btnText}
                link={item.btnLink}
                handleClick={handleClick}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cta;
