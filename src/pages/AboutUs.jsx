import React, { useState } from "react";
import SideNav from "../Components/SideNav";
import video from "../Assets/tyler/aboutus/who_we_are/HWA_Impact.mp4";

const AboutUs = () => {
  return (
    <div>
      <section className="p-20 bg-peach">
        <div id="PETER-ID-GOES-HERE" className="flex ">
          <div className="w-3/12 flex-shrink-0">
            <h1 className="text-primary-800">About Us</h1>
            <SideNav />
          </div>
          <div className="w-9/12 flex-grow-1">
            <div className="flex">
              <div className="w-7/12  pr-20 flex-shrink-0">
                <div className="">
                  <h1 className="text-primary-600">
                    We believe in creating a world where people with
                    disabilities flourish.
                  </h1>
                </div>
              </div>
              <div className="w-5/12  flex-grow-1">
                <div>
                  <p className="text-primary-800 p-2 pl-40">
                    That's why we provide resources, support, and advocacy for
                    their independence and full inclusion in society.
                  </p>
                </div>
              </div>
            </div>
            <section className="w-12/12  pt-20 pb-36">
              <video className="rounded-md" width="100%" height="auto" controls>
                <source src={video} type="video/mp4" autoplay />
              </video>
            </section>
            <div className="flex ">
              <div className="w-4/12  flex-shrink-0">
                <div>
                  <h2 className="font-DM text-3xl font-medium text-primary-800">
                    Our Objectives
                  </h2>
                </div>
              </div>
              <div className="w-8/12   flex-grow-1 ">
                <section>
                  <div className="flex ">
                    <div className="w-2/12  flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">01</h3>
                      </div>
                    </div>
                    <div className="w-10/12  flex-grow-1 ">
                      <div>
                        <h3 className="text-primary-800">
                          Building Strong Connections
                        </h3>
                        <p className="pt-5 pr-60 pb-20 text-primary-800">
                          Foster friendship, understanding, and mutual
                          assistance among members
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex ">
                    <div className="w-2/12   flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">02</h3>
                      </div>
                    </div>
                    <div className="w-10/12  flex-grow-1 ">
                      <div>
                        <h3 className="text-primary-800">Empowering Members</h3>
                        <p className="pt-5 pr-60 pb-20 text-primary-800">
                          Promote welfare, education, training, rehabilitation,
                          employment, and other interests of members
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex ">
                    <div className="w-2/12   flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">03</h3>
                      </div>
                    </div>
                    <div className="w-10/12  flex-grow-1 ">
                      <div>
                        <h3 className="text-primary-800">
                          Education Opportunities
                        </h3>
                        <p className="pt-5 pr-60 pb-20 text-primary-800">
                          Enhance educational opportunities through bursaries,
                          scholarships, grants, subsidies, and exchange programs
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex ">
                    <div className="w-2/12   flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">04</h3>
                      </div>
                    </div>
                    <div className="w-10/12  flex-grow-1 ">
                      <div>
                        <h3 className="text-primary-800">
                          Advocating for Rights
                        </h3>
                        <p className="pt-5 pr-60 pb-20 text-primary-800">
                          Obtain necessary benefits and concessions for people
                          with disabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex ">
                    <div className="w-2/12   flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">05</h3>
                      </div>
                    </div>
                    <div className="w-10/12  flex-grow-1 ">
                      <div>
                        <h3 className="text-primary-800">
                          Funding Independence
                        </h3>
                        <p className="pt-5 pr-60 pb-20 text-primary-800">
                          Empower members through fundraising efforts, to
                          enhance independence and improve quality of life
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
