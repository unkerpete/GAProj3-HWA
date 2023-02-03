import React from "react";

const pictureInfo = [
  {
    title: "37th Annual Wheel, Walk or Jog 2021",
    date: "1 Mar, 2023, 8:30 - 11am",
    tag: "",
    url: "http://placehold.it/431x287",
  },
  {
    title: "Garden of Hope - Flower Planting",
    date: "23 Mar, 9 - 11am",
    tag: "Community Gatherings",
    url: "",
  },
  {
    title: "Flag Day at Pasir Ris",
    date: "23 Apr, 9 - 2:30pm",
    tag: "Fundraiser",
    url: "",
  },
];
// Mapping Function

const mapped = pictureInfo.map((obj) => {
  return (
    <>
      <div className="col border h-[459px] content-center">
        <img
          className="rounded-2xl "
          src={obj.url}
          alt=""
          width="431"
          height="287"
        />
        <p className="font-DM text-base font-normal">
          {obj.tag ? obj.tag : "no tag"}
        </p>
        <h3 className="py-3">{obj.title}</h3>
        <p className="font-DM text-xl font-normal">{obj.date}</p>
      </div>
    </>
  );
});

const PictureCards = () => {
  return (
    <div className="mx-[80px] my-[131px] grid grid-cols-3 p-4 gap-16">
      {mapped}
    </div>
  );
};

export default PictureCards;
