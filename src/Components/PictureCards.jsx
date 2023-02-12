import React from "react";

const PictureCards = (props) => {
  const getTagClass = (tag) => {
    switch (tag) {
      case "Talks":
        return "bg-peach";
      case "Classes & Workshops":
        return "bg-secondary-400";
      case "Fundraiser":
        return "bg-primary-400";
      case "Community Gatherings":
        return "bg-secondary-400";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="grid grid-cols-3 p-4 gap-16">
      {props.pictureInfo.map((obj, index) => {
        return (
          <div className="col h-[459px] content-center" key={index}>
            <img
              className="rounded-2xl"
              src={obj.url}
              alt={obj.alt}
              width="431"
              height="287"
            />
            <p className={"font-DM text-base font-normal mt-3"}>
              {obj.tag ? (
                <span className={`${getTagClass(obj.tag)}`}>{obj.tag}</span>
              ) : (
                <span className="text-white">no tag</span>
              )}
            </p>
            <h3 className="py-3">{obj.title}</h3>
            <p className="font-DM text-xl font-normal">{obj.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PictureCards;
