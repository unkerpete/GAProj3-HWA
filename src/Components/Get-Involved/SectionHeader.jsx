import React from "react";

const SectionHeader = () => {
  return (
    <>
      {/* MESSAGE + IMAGE */}
      <div className="grid grid-cols-2 bg-primary-200">
        <div className="p-20">
          <h3 className="text-primary-800">Get Involved</h3>
          <p className="text-primary-800 mt-8 pr-20 font-DM text-xl font-normal">
            Make a difference in the lives of people with physical disabilities
            by volunteering or donating — every contribution makes an impact.
          </p>
        </div>
        <div className="">IMAGE HERE YO</div>
      </div>

      {/* TABS */}
      {/* <div className=" bg-primary-200 text-center">
        <ul className="flex flex-wrap">
          <li className="mr-2">
            <a
              href=""
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg'"
            >
              Make a Donation
            </a>
          </li>
        </ul>
      </div> */}

      <div class="bg-primary-200 text-center">
        <ul class="grid grid-cols-2">
          <li class="">
            <a
              href=""
              class="inline-block p-4 border-b-4 border-transparent hover:border-[#2B4435] active:border-[#2B4435]"
            >
              Make a Donation
            </a>
          </li>
          <li class="">
            <a
              href=""
              class="inline-block p-4 border-b-4 border-transparent hover:border-[#2B4435] active:border-[#2B4435]"
            >
              Become a Volunteer
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionHeader;
{
  /* <div className="text-center">
          <button className="" type="submit">
            Make a Donation
          </button>
        </div>
        <div className="text-center">
          <button className="" type="submit">
            Become a Volunteer
          </button>
        </div> */
}
