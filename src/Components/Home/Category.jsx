import React from "react";
import CategoryCard from "./CategoryCard";

const categoryCardData = [
  {
    img: "src/Assets/shujun/homepage/categories/For_Caregivers.png",
    bg_img: "src/Assets/shujun/homepage/categories/For_Caregivers_Border.png",
    subheader: "For Caregivers",
    body: "We support family caregivers through providing regular quality programmes and services, and uplifts them with a robust support system.",
    btnText: "See our Services",
    btnLink: "/our-services",
  },
  {
    img: "src/Assets/shujun/homepage/categories/For_Donors.png",
    bg_img: "src/Assets/shujun/homepage/categories/For_Donors_Borders.png",
    subheader: "For Donors",
    body: "Your gift will enable and support individuals with physical challenges as well as their family caregivers through HWA's rehabilitaion, home care, and transport programmes and services.",
    btnText: "Make a Donation",
    btnLink: "/get-involved",
  },
  {
    img: "src/Assets/shujun/homepage/categories/For_Volunteers.png",
    bg_img: "src/Assets/shujun/homepage/categories/For_Volunteers_Borders.png",
    subheader: "For Volunteers",
    body: "The service of volunteers contributes significantly to the social reintegration of the physically challenged in our community.",
    btnText: "Be a Volunteer",
    btnLink: "/get-involved",
  },
  {
    img: "src/Assets/shujun/homepage/categories/For_Disabilities.png",
    bg_img:
      "src/Assets/shujun/homepage/categories/For_Disabilities_Borders.png",
    subheader: "For People with Disabilities",
    body: "HWA's rehabilitation, home care, and transportation services caters to the distinct needs of the physically challenged. No one gets left behind",
    btnText: "See our Services",
    btnLink: "/our-services",
  },
];

const Category = () => {
  return (
    <div className="p-20">
      <img src="Assets/shujun/homepage/categories/bg-01.png" />
      <div className="grid grid-rows-2 justify-items-center">
        <h1 className="text-primary-800 text-center w-1/3">
          We believe in the power of the collective
        </h1>
        <p className="font-DM text-xl font-normal mt-5  text-primary-800 content-center text-center w-1/2">
          Everyone has a part to play to make society more safe and inclusive
          for everyone. Select the profile that best matches you.
        </p>
      </div>

      <div className="grid grid-cols-4">
        {categoryCardData.map((item, index) => {
          return (
            <CategoryCard
              key={index}
              bg_img={item.bg_img}
              img={item.img}
              subheader={item.subheader}
              body={item.body}
              text={item.btnText}
              link={item.btnLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
