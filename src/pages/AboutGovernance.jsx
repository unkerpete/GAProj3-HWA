import React, { Fragment } from "react";
import image1 from "../Assets/Tyler/aboutus/governance_financial/AnualReport_2022.png";
import image2 from "../Assets/Tyler/aboutus/governance_financial/AnualReport_2021.png";
import image3 from "../Assets/Tyler/aboutus/governance_financial/AnualReport_2020.png";
import image4 from "../Assets/Tyler/aboutus/governance_financial/AnualReport_2019.png";
import image5 from "../Assets/Tyler/aboutus/governance_financial/Information_1.png";
import image6 from "../Assets/Tyler/aboutus/governance_financial/Information_2.png";
import image7 from "../Assets/Tyler/aboutus/governance_financial/Information_3.png";
import image8 from "../Assets/Tyler/aboutus/governance_financial/Information_4.png";
import SideNav from "../Components/SideNav";

const AboutGovernance = () => {
  return (
    <div>
      <section className="p-20">
        <div id="PETER-ID-GOES-HERE" className="flex ">
          <div className="w-3/12 flex-shrink-0">
            <h1 className="text-primary-800">About Us</h1>
            <SideNav />
          </div>
          <div className="w-9/12 flex-grow-1">
            <section className="w-12/12  pb-5 ">
              <h3 className="text-primary-800  ">
                Annual Report and Financial Statement
              </h3>
              <p className="font-DM text-3xl font-medium pt-20 pb-4 text-primary-800">
                Financial Information
              </p>
              <p>For Annual Report, please Click Here</p>
            </section>
            <Fragment>
              <div className="flex pb-20 pt-4 ">
                <div className="w-3/12flex-shrink-0">
                  <div className="pr-4">
                    <img src={image1} />
                  </div>
                </div>
                <div className="w-3/12 flex-shrink-0">
                  <div className="pr-4">
                    <img src={image2} />
                  </div>
                </div>
                <div className="w-3/12 flex-shrink-0">
                  <div className="pr-4">
                    <img src={image3} />
                  </div>
                </div>
                <div className="w-3/12 flex-shrink-0">
                  <div className="pr-4">
                    <img src={image4} />
                  </div>
                </div>
              </div>
            </Fragment>

            <section className="w-12/12  pb-20 ">
              <p className="font-DM text-3xl font-medium pb-2 text-primary-800">
                Non-financial Information
              </p>
              <p>Name of Organization: Handicaps Welfare Association</p>
              <p>Address: No 16 Whampoa Drive Singapore 327725</p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                Contact Information
              </p>
              <p>
                Name of Contact Person: Subrata Banerjee, Executive Director
                (wef 1st January 2011)
                <br /> Telephone No: 6254 3006 <br />
                Fax No: 6253 7375
                <br /> Email Address: hwa@hwa.org.sg <br /> Website Address:
                http://www.hwa.org.sg
              </p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                Charity Status
              </p>
              <p>
                Charity Regn No: 0145 <br />
                Charity Regn Date: 25/2/1985 <br />
                Constitution: Society <br />
                Date of Establishment: 18/12/1969 <br />
                ROS/RCB Regn No: 203/69WEL <br />
                UEN: S69SS0057J
              </p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                IPC Status
              </p>
              <p>Effective Date: 01.10.2022 – 30.09.2025</p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                TRUSTEES/BOARD MEMBERS (2021 – 2023):
              </p>
              <p>
                President: Mr. Hui Beng Hong <br />
                Vice President: Mr.Edgar Cheong Tuck Mun <br />
                Hon Secretary: Ms. Michelle Siew Teok See <br />
                Hon Asst Secretary: Dr. Navin Nair <br />
                Hon Treasurer: Ms. Heather Wong Liang Le <br />
                Hon Asst Treasurer: Ms. Wee Toon Lin
              </p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                Committee Members
              </p>
              <p>
                Mr. Mr. Palanisamy Avaday
                <br />
                Ms. Wendy Lau Wong Hing
                <br />
                Mr. Alan Pek Kian Aik
                <br />
                Ms. Wee Judy Anne
                <br />
              </p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                Key Employee
              </p>
              <p>Subrata Banerjee, Executive Director (wef 1st January 2011)</p>
              <p className="font-DM text-3xl font-medium pt-8 pb-2 text-primary-800">
                Auditor
              </p>
              <p id="yearly-performance">
                P G Wee Partnership LLPChartered Accountants of Singapore
              </p>
              <hr className=" border-t-1 border-primary-800 my-20" />
            </section>

            <section className="w-12/12  pb-20 ">
              <h3 className="text-primary-800 pb-20 ">
                Yearly Performance Information
              </h3>
              <img src={image5} />
              <p className="font-DM text-3xl font-medium pt-20 pb-10 text-primary-800">
                Fund-Raising Efficiency (Apr 21-Mar 22)
              </p>
              <img src={image6} />
              <p className="pt-4 pr-80">
                We would like to express our sincere appreciation to our donors
                and well-wishers for their whole-hearted support despite
                economic uncertainties. We have raised $3,240,676 in donations
                through various fund-raising events.
              </p>
              <p className="font-DM text-3xl font-medium pt-20 pb-10 text-primary-800">
                Service Cost Recovery (Apr 21-Mar 22)
              </p>
              <img src={image7} />
              <p className="pt-4 pr-80">
                Service Delivery was reduced due to COVID-19 and the staggered
                measures implemented.
              </p>
              <p className="font-DM text-3xl font-medium pt-20 pb-10 text-primary-800">
                Service Cost Recovery (Apr 21-Mar 22)
              </p>
              <img src={image8} />
              <p className="pt-4 pr-80 font-DM text-xl font-bold">
                Independent Auditor's Report and Opinion
              </p>
              <p className="pr-80">
                Please refer to the Financial Statement, Click Here
              </p>
              <p className="pt-4 pr-80 font-DM text-xl font-bold">
                Related Party Transaction and Key Management Personnel's
                Compensation
              </p>
              <p className="pr-80">
                Please refer to the Financial Statement (at Page 20), Click Here
              </p>

              <hr className=" border-t-1 border-primary-800 my-20" />
              <h3 className="text-primary-800 pb-4 ">
                Corporate Governance & Disclosure
              </h3>
              <p className="pr-80">
                To find out more about our Corporate Governance & Disclosure,
                Click Here
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGovernance;

// <section className="w-12/12  bg-gray-400 pb-20 ">
// <hr className=" border-t-1 pb-20 border-primary-800" />
// <h3 className="text-primary-800  ">Management</h3>
// <p> (as of March 2022)</p>
// <p className="font-DM text-3xl font-medium pt-20 text-primary-800">
//   Financial Information
// </p>
// <hr className=" border-t-1 border-primary-800 my-20" />
// </section>
