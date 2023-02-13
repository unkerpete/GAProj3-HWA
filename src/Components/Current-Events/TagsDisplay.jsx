import React from "react";
import Tag from "./Tag";

const TagsDisplay = () => {
  return (
    <div className="pb-25 pl-20 pr-60">
      <div className="space-x-5 py-10">
        <Tag text="All" link="/current-events" />
        <Tag text="Fundraisers" link="/current-events" />
        <Tag text="Talks" link="/current-events" />
        <Tag text="Classes & Workshops" link="/current-events" />
        <Tag text="Community Gatherings" link="/current-events" />
      </div>

      <p className="text-secondary-600">Showing 3 results</p>
    </div>
  );
};

export default TagsDisplay;
