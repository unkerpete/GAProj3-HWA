import React, { useContext } from "react";
import { ModalContext } from "../../pages/CurrentEvents";

const tagTypes = [
  "All",
  "Fundraisers",
  "Talks",
  "Classes & Workshops",
  "Community Gathering",
];

const TagsDisplay = () => {
  const modalCtx = useContext(ModalContext);

  const handleClick = (e) => {
    modalCtx.setSelectedTag(e.target.value);
  };

  return (
    <div className="pb-25 pl-20 pr-60">
      <div className="space-x-5 py-10">
        {tagTypes.map((tag, index) => {
          return (
            <button
              key={index}
              value={tag}
              type="button"
              onClick={handleClick}
              className={`${
                modalCtx.selectedTag === tag
                  ? "border-primary-800 text-primary-800 font-bold"
                  : " border-secondary-600 text-secondary-600 "
              } font-DM text-lg font-normal border-2  py-3 px-6 rounded-full`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="text-secondary-600">
        Showing {modalCtx.pictureInfo.length} results
      </p>
    </div>
  );
};

export default TagsDisplay;
