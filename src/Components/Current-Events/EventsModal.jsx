import React, { useContext, useEffect, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import Button from "../Button";
import ReactDOM from "react-dom";
import { ModalContext } from "../../pages/CurrentEvents";

const event = {
  title: "Seniors Go Digital",
  dateStart: "21 Jan 2023",
  dateEnd: "23 Jan 2023",
  time: "9 - 5:30 pm",
  description:
    "Our Dear Donor,Five years have passed since my appeal to support HWA's mission of serving persons with physical disabilities (PWDs) and the elderly.HWA's twice-weekly bathing (showering) and weekly personalised home nursing service (trimming of hair and changing of tubes monthly) has eased caregiving efforts for my family, which we are ever appreciative of.In these few years, I have also seen some gradual improvements physically. Initially, I was unable to move my limbs and legs and could only be on a strict liquid diet. Currently, I am able to respond to questions by raising my right hand when my family engaged in conversations with me. Also, my diet has incorporated some small solid food pieces since I am able to chew better now. Hopefully, I can be off tube feeding soon!On behalf of all our beneficiaries, Thank You for being a blessing in our lives and sharing your gifts to help us this festive season.We wish you and your loved ones Good Health and Many Happy Returns!Sincerely,Siew HanOn behalf of HWA Beneficiaries and Staff",
  img: "src/Assets/shujun/homepage/blog/blog2.png",
  action: "/current-events",
  tag: "Classes & Workshops",
};

const getBtnText = (tag) => {
  if (tag === "Fundraiser") {
    return "Giving.sg";
  } else if (
    tag === "Community Gatherings" ||
    tag === "Talks" ||
    tag === "Classes & Workshops"
  ) {
    return "Join Now";
  } else {
    return "Join Now";
  }
};

const EventsModal = () => {
  const modalCtx = useContext(ModalContext);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
    }
  });

  const handleModalClose = () => {
    modalCtx.changeModalStatus();
    modalCtx.enableScroll("root");
    // modalCtx.disableScroll("modal");
    onClose();
  };

  return (
    <>
      {ReactDOM.createPortal(
        <>
          {/* <div className="fixed top-0 right-0 w-screen h-screen z-40 bg-slate-800 opacity-50" /> */}
          <div className=" z-50 absolute bg-white w-1/2 h-screen top-0 right-0 text-primary-800 p-8 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h3>{event.title}</h3>
              <div onClick={handleModalClose} style={{ cursor: "pointer" }}>
                <RxCross1 className="text-3xl" />
              </div>
            </div>
            <p className="font-DM text-lg font-normal mt-3">
              {event.dateStart} {event.dateEnd ? "-" : null} {event.dateEnd}
            </p>
            <img
              className="rounded-2xl border object-cover w-full my-8"
              src={event.img}
              width="431"
              height="287"
            />
            <div className="flex flex-row justify-between">
              <p className="font-DM text-base font-normal w-2/3">
                {event.description}
              </p>
              <Button
                text={`${getBtnText(event.tag)}`}
                link="/current-events/"
              />
            </div>
          </div>
        </>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default EventsModal;

// {ReactDOM.createPortal(
//   <div className="fixed top-0 right-0 w-screen h-screen z-40 bg-slate-800 opacity-10">
//     <div
//       className={`${
//         modalCtx.modalIsActive ? null : "hidden"
//       } z-100 bg-white w-1/2 min-h-full fixed top-0 right-0 text-primary-800 p-8 overflow-auto`}
//     >
//       <div className="flex flex-row justify-between">
//         <h3>{event.title}</h3>
//         <div onClick={handleModalClose} style={{ cursor: "pointer" }}>
//           <RxCross1 className="text-3xl" />
//         </div>
//       </div>
//       <p className="font-DM text-lg font-normal mt-3">
//         {event.dateStart} {event.dateEnd ? "-" : null} {event.dateEnd}
//       </p>
//       <img
//         className="rounded-2xl border object-cover w-full h-full my-8"
//         src={event.img}
//         width="431"
//         height="287"
//       />
//       <div className="flex flex-row justify-between">
//         <p className="font-DM text-base font-normal w-3/5">
//           {event.description}
//         </p>
//         <Button
//           text={`${getBtnText(event.tag)}`}
//           link="/current-events/"
//         />
//       </div>
//     </div>
//   </div>,
//   document.querySelector("#modal-root")
// )}
// </>
// );
// };
