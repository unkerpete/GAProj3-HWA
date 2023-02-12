import React, { useState } from "react";
import image1 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_icon.png";
import image2 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_image.png";
import mobAidTable1 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_Table_3.png";
import mobAidTable2 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_Table_3.1.png";
import memberTable from "/src/Assets/firdaus/our_service/socialservice/Socialservice_Table_5.png";
import { AccordionDataSocialService } from "./AccordionData";
import Accordion from "./Accordian";

const SocialService = () => {
  const accordionDataOne = AccordionDataSocialService;
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-8 ">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Social Service</h3>
      </div>
      <div className="text-center px-96">
        <p className="font-DM text-xl font-normal">
          Our organization aims to enhance the quality of life for people with
          physical disabilities by encouraging their full potential and
          participation in activities.
          <br></br>
          <br></br>
          We assist members in accessing various assistance schemes and
          services, and collaborate with other organizations and government
          agencies to meet the needs of individuals and families. We work with
          community hospitals, nursing homes and the Ministry of Community
          Development, Youth and Sports (MCYS) to improve the effectiveness of
          their programs.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-1/2 m-12 " src={image2} />
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b">Types of Social Services</h3>
        <div className="mx-48">
          <div className="accordion-list text-center">
            {accordionDataOne.map(({ title, content, image }) => (
              <Accordion title={title} content={content} image={image} />
            ))}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActive(!isActive)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Mobility Aids Loan Scheme
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActive ? "-" : "+"}
              </div>
            </div>
            {isActive && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                {/* {content} */}
                HWA’ mobility aids loan scheme is implemented with the objective
                of helping members with short-term equipment loan. Singaporeans
                and PRs need to pay only token administrative charges on top of
                the deposits which cover the cost of the mobility aids.
                <br />
                <br />
                <div className="pl-6">
                  <li>
                    HWA’mobility aids loan scheme is implemented with the
                    objective of helping members with short-term equipment loan.
                    HWA members get to use the borrowed equipment free for six
                    months. After that a monthly rent is payable for use of the
                    equipment for a month or part of a month.
                  </li>
                  <li>
                    Deposit and Monthly Rent – The borrower has to pay a deposit
                    (refundable) for each piece of equipment loaned. This
                    deposit would be used to offset charges for repairs arising
                    from damages or forfeited when the borrower failed to return
                    the equipment. The table of deposits and monthly rent
                    charges is shown in the following table:
                  </li>
                </div>
                <div className=" font-DM text-xl font-bold mt-8">
                  HWA Members
                  <img className=" mt-4 w-screen" src={mobAidTable1} />
                </div>
                <div className=" font-DM text-xl font-bold">
                  {" "}
                  Public Rate
                  <img className=" mt-4 w-screen" src={mobAidTable2} />
                </div>
                <br/>
                <div>
                  There will be a non-refundable administrative charge of $21.40
                  (inclusive of GST)
                  <br />
                  *For loan of Mobility Aids, please inform us one day in
                  advance for preparations purposes.
                  <br />
                  <br />
                  Rental of mobility aids is based on availability and first
                  come first serve basis.
                  <br />
                  <br />
                  For further inquiries email to{" "}
                  <a href="mailto:wheelchair@hwa.org.sg" className="underline">
                    wheelchair@hwa.org.sg
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveTwo(!isActiveTwo)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Social Integration
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveTwo ? "-" : "+"}
              </div>
            </div>
            {isActiveTwo && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                The Handicaps Welfare Association (HWA) encourages its members
                to lead active lifestyles and develop their fullest potentials
                by actively participating in various recreational, social,
                cultural, and life skills activities organized by different
                organizations including government bodies and schools. These
                activities not only provide opportunities for growth and
                development for HWA members but also serve as important avenues
                to raise public awareness about HWA's mission and the plight of
                its members.
                <br />
                <br />
                <p className=" font-DM text-xl font-bold">Sports Activities</p>
                <br />
                HWA places a strong emphasis on sports as an important tool for
                individuals with disabilities to improve their physical and
                mental well-being. In partnership with organizations such as
                Singapore Disability Sports Council (SDSC) and National
                Disability Sports Association (NDSA), HWA has organized various
                sporting activities for its members including table-tennis,
                sailing, bowling, and the Standard Chartered marathon. Through
                these partnerships, HWA aims to increase the number of
                individuals with disabilities involved in sports and raise
                public awareness about disability sports in the community.
                <br />
                <br />
                <p className=" font-DM text-xl font-bold">Bowling</p>
                <br />
                One specific activity that HWA is currently promoting is
                bowling. HWA encourages members from HWA, ID, and SAVH to
                participate in learn-to-bowl sessions every Thursday at Planet's
                Bowl, Tessensohn Rd from 10.00am – 12.00pm @ $1.80 per game.
                Once members are able to bowl well, they will be enrolled in a
                development program where they will be nurtured into an elite
                team that will represent Singapore in international games. The
                bowling association has been in existence since 2010 with its
                office at Tessensohn Rd.
                <br />
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveThree(!isActiveThree)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Membership
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveThree ? "-" : "+"}
              </div>
            </div>
            {isActiveThree && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                The Social Services Department helps to process, interview and
                recommend application which has satisfied entry criteria as laid
                down in the Constitution. It also manages membership data base
                and payment.
                <br />
                <br />
                People with physical disabilities, between the age of 16 and 60,
                are welcome to join HWA as a member to participate in its
                activities and benefit from its welfare programs. There are
                three categories of membership:
                <br />
                <img className=" mt-4 w-screen" src={memberTable} />
                <br/>
                <div className="border-t-2">
                <br/>
                All membership applications are subjected to approval by the HWA Executive Committee.
                <br/>
                For Membership Application Form (pdf), please <a className="underline" href="https://hwa.org.sg/wp-content/uploads/2021/07/HWA-Application-Form-ver-3.pdf">click here</a>
                <br/>
                For Membership Application Form (pdf), please <a className="underline" href="https://hwa.org.sg/wp-content/uploads/2020/03/MEMBER-CONVERSION-FORM-Updated.pdf">click here</a>
                <br/><br/>
                Please send your application form to 16,Whampoa Drive, Singapore 327725
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialService;
