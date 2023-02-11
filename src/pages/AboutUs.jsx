import React, { useState } from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="p-20 bg-peach">
        <div id="PETER-ID-GOES-HERE" className="flex ">
          <div className="w-3/12 bg-gray-300 p-4 flex-shrink-0">
            <div className=" bg-gray-400">
              <h3>About Us</h3>
              <h3>Who We Are</h3>
              <ul>
                <li>Mission & Objectives</li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 bg-gray-400 flex-grow-1">
            <div className="flex">
              <div className="w-7/12 bg-gray-300 pr-48 flex-shrink-0">
                <div className=" bg-gray-400">
                  <h3 className="text-primary-600">
                    We believe in creating a world where people with
                    disabilities flourish.
                  </h3>
                </div>
              </div>
              <div className="w-5/12 bg-gray-400 flex-grow-1">
                <div>
                  <p className="text-primary-800">
                    That's why we provide resources, support, and advocacy for
                    their independence and full inclusion in society.
                  </p>
                </div>
              </div>
            </div>
            <section className="w-12/12  bg-gray-400 pt-20 pb-36">
              <video width="100%" height="auto" controls>
                <source src="your-video-source.mp4" type="video/mp4" />
              </video>
            </section>
            <div className="flex ">
              <div className="w-4/12 bg-gray-300 flex-shrink-0">
                <div>
                  <h2 className="font-DM text-3xl font-medium text-primary-800">
                    Our Objectives
                  </h2>
                </div>
              </div>
              <div className="w-8/12 bg-gray-400  flex-grow-1 ">
                <section>
                  <div className="flex ">
                    <div className="w-2/12 bg-gray-300 flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">01</h3>
                      </div>
                    </div>
                    <div className="w-10/12 bg-gray-400 flex-grow-1 ">
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
                    <div className="w-2/12 bg-gray-300  flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">02</h3>
                      </div>
                    </div>
                    <div className="w-10/12 bg-gray-400 flex-grow-1 ">
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
                    <div className="w-2/12 bg-gray-300  flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">03</h3>
                      </div>
                    </div>
                    <div className="w-10/12 bg-gray-400 flex-grow-1 ">
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
                    <div className="w-2/12 bg-gray-300  flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">04</h3>
                      </div>
                    </div>
                    <div className="w-10/12 bg-gray-400 flex-grow-1 ">
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
                    <div className="w-2/12 bg-gray-300  flex-shrink-0">
                      <div>
                        <h3 className="text-primary-800">05</h3>
                      </div>
                    </div>
                    <div className="w-10/12 bg-gray-400 flex-grow-1 ">
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
