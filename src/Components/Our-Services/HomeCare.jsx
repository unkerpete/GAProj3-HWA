import React, { useState } from "react";
import image1 from "/src/Assets/firdaus/our_service/homecare/Homecare_icon.png";
import image2 from "/src/Assets/firdaus/our_service/homecare/Homecare_image.png";
import Form from "/src/Components/Form";

const HomeCare = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [isActiveFour, setIsActiveFour] = useState(false);

  const options = [
    "Home Medical",
    "Home Nursing",
    "Home Therapy",
    "Senior Home Care",
  ];

  return (
    <>
      <div className="flex justify-center mt-24 mb-10">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Home Care</h3>
      </div>
      <div className="text-center px-96">
        <p className="font-DM text-xl font-normal">
          Our Home Care Services (HCS), formerly Personal Care Services, have
          been dedicated to enhancing the quality of life for elderly citizens
          and people with disabilities since April 2015. We aim to assist our
          clients in achieving maximum independence and autonomy, all the while
          adhering to our values-based culture.
          <br></br>
          <br></br>
          Our goal is to provide comprehensive care and support to individuals
          who are unable to fully care for themselves, in the comfort of their
          own homes, at times that are convenient for them, and in ways that
          align with their preferences, for as long as possible.
          <br></br>
          <br></br>
          We strive to help the client better attain:
        </p>
      </div>

      <div className="flex justify-center">
        <img className="w-1/2 m-12" src={image2} />
      </div>

      <div className="m-20">
        <h3 className="border-b-2 py-8 px-20 text-center">How it Works</h3>
        <p className="py-10 px-96 text-center font-DM text-xl font-normal">
          Our home-based health care program offers a range of services {`\n`}
          including case management, medication management, counselling,
          therapy, personal and social care, transportation, and community
          integration services.Our nurses conduct a comprehensive assessment of
          each client to determine their specific health and psychosocial needs.
          <br></br>
          <br></br>
          Our goal is to support the elderly and adults with physical
          disabilities in remaining in their own homes, while providing
          affordable nursing care that includes long-term basic domestic care,
          mentally stimulating activities, medication reminders, and assistance
          with personal care and hygiene, to enhance their overall quality of
          life.
        </p>
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b-2">Types of Home Care Services</h3>
        <div className="mx-48">
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActive(!isActive)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Home Medical
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActive ? "-" : "+"}
              </div>
            </div>
            {isActive && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                Our scope of home medical services includes, and is not limited
                to:
                <div className="pl-6">
                  a. Comprehensive care assessment;
                  <br />
                  b. Management of chronic medical conditions;
                  <br />
                  c. Management of uncomplicated acute or sub-acute medical
                  conditions;
                  <br />
                  d. Referrals to specialists or service providers in other
                  disciplines, where appropriate;
                  <br />
                  e. Arrangements for safe transfer for hospitalisation, where
                  necessary;
                  <br />
                  f. Prescriptions of appropriate acute and chronic medicines;
                  Education of client and caregiver on the client's medical
                  conditions and the management plan;
                  <br />
                  g. Minor medical/nursing procedures; and
                  <br />
                  h. Ordering and timely interpretation of appropriate
                  investigations.
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
                Home Nursing
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveTwo ? "-" : "+"}
              </div>
            </div>
            {isActiveTwo && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                Our expanded scope of home nursing services includes, and is not
                limited to:
                <div className="pl-6">
                  a. Post-surgical management, e.g. administration of
                  injections, care of central venous line (such as
                  peripherally-inserted central catheter), tracheostomy or
                  drainage tubes;
                  <br />
                  b. Wound management;
                  <br />
                  c. Maintenance/changing of urinary catheters and drainage
                  tubes, as applicable (male urinary catheter insertion will be
                  done by a medical practitioner);
                  <br />
                  d. Stoma care, e.g. colostomy and ileostomy care;
                  <br />
                  e. Monitoring of pain control (through discussion and
                  observation, based on a 'pain rating' scale);
                  <br />
                  f. Insertion of nasogastric tube and tube feeding;
                  <br />
                  g. Assistance with bowel elimination, e.g. enema or manual
                  evacuation;
                  <br />
                  h.Monitoring of client's medical condition, e.g. blood
                  pressure and blood sugar checks;
                  <br />
                  i. Providing caregiver education and training with regard to
                  various aspects of care, e.g. prevention of falls, pressure
                  sores, proper feeding techniques, etc;
                  <br />
                  j. Advice on activities of daily living, e.g. nutrition
                  counselling and education;
                  <br />
                  k. Monitoring of medication compliance and proper taking of
                  medication; and
                  <br />
                  l. Administering, supervision and packing of medication`,
                </div>
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveThree(!isActiveThree)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Home Therapy
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveThree ? "-" : "+"}
              </div>
            </div>
            {isActiveThree && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                Our expanded scope of home therapy services includes, and is not
                limited to:
                <br />
                <br />
                <div className="font-DM text-l font-bold">
                 
                  PhysioTherapy services, including:
                </div>
                <div className="pl-6">
                  <li>Functional mobility and gait training;</li>
                  <li>
                    Active and passive exercises to improve or restore range of
                    motion, physical strength, flexibility, co-ordination,
                    balance and endurance; Treatment to relieve pain;
                  </li>
                  <li>
                    Advice on the use of assistive ambulatory devices, including
                    assistance on application for relevant financial assistance;
                  </li>
                  <li>Client and caregiver training and education; and</li>
                  <li>Community integration activities</li>
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  Occupational Therapy services,including:
                </div>
                <div className="pl-6">
                  <li>Re-training in activities of daily living;</li>
                  <li>
                    Exercises and graded activities to improve strength and
                    range of motion;
                  </li>
                  <li>Co-ordination and dexterity activities;</li>
                  <li>
                    Advice on the use of orthosis, prosthesis or
                    assistive/adaptive devices to maintain or improve
                    “Activities of Daily Living” (ADL) performances;
                  </li>
                  <li> Advice on occupational ergonomics;</li>
                  <li>
                    Home assessment and recommendations on home modification;
                  </li>
                  <li>Client and caregiver training and education;</li>
                  <li> Wheelchair and seating assessment; and</li>
                  <li>Community integration activities`,</li>
                </div>
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveFour(!isActiveFour)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Senior Home Care
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveFour ? "-" : "+"}
              </div>
            </div>
            {isActiveFour && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                Our expanded scope of home social care services includes, and is
                not limited to:
                <br />
                <br />
                <div className="font-DM text-l font-bold">
                  {" "}
                  Personal hygiene, including:
                </div>
                <div className="pl-6">
                  <li>
                    Bathing and/or assisted bathing for clients who are too ill
                    to take baths in the bathroom, or for bedridden clients;
                  </li>
                  <li>
                    Changing of clothes, undergarments, continence aids and any
                    soiled sheets;
                  </li>
                  <li>Brushing of teeth and cleaning of dentures; and</li>
                  <li>Toileting and other elimination needs</li>
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  {" "}
                  Support/assistance with activities of daily living and other
                  personal care tasks, including:
                </div>
                <div className="pl-6">
                  <li>Lifting, transferring and positioning of clients;</li>
                  <li>Assisting with oral and/or tube feeding;</li>
                  <li>
                    Assisting in light housekeeping and laundry, if the client
                    and/or caregiver is unable to do so; and
                  </li>
                  <li>
                    Simple wound dressing under the guidance of our registered
                    nurse(s)
                  </li>
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  {" "}
                  Support/assistance with medication, including:
                </div>
                <div className="pl-6">
                  <li>
                    {" "}
                    Medication reminders and monitoring of medication
                    compliance; and Administering medication if the client
                    and/or caregiver is unable to do so
                  </li>
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  Mentally stimulating activities, in the form of:
                </div>
                <div className="pl-6">
                  <li>
                    {" "}
                    (for clients with hardly any, or mild, cognitive impairment)
                    – Memory-based / Logic-based card games, spatial orientation
                    block games, mental processing games, and/or Sudoku;
                  </li>
                  <li>
                    (for clients with mild dementia) – Card-matching games,
                    spatial orientation block games, and/or mental processing
                    games; or
                  </li>
                  <li>
                    for clients with moderate dementia) – Visual recognition
                    card games, or card-matching games
                  </li>
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  Elder-sitting and/or caregiver respite (provided on a
                  case-by-case basis, depending also on staff availability)
                </div>
                <br />
                <div className="font-DM text-l font-bold">
                  Performing simple maintenance exercises (as prescribed and
                  instructed by registered therapists)
                </div>
              </div>
            )}
          </div>
          <div className="px-64">
            <Form
              bgColour="bg-secondary-400"
              header="Enquiry form"
              message="Should you require any information, feel free to send us a message."
              placeholder="Enquiry Type"
              options={options}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCare;
