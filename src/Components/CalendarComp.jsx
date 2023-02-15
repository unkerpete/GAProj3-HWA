import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "../App.css";
import { ModalContext } from "../pages/CurrentEvents";

function App() {
  // const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  // FIXME:
  const modalCtx = useContext(ModalContext);
  // modalCtx.calRange
  // modalCtx.setCalRange

  return (
    <div className="wrapper">
      <div>
        <Calendar
          onChange={modalCtx.setCalRange}
          value={modalCtx.calRange}
          onClickDay={() => setShowTime(true)}
          selectRange={true}
        />
      </div>

      {modalCtx.calRange.length > 0 ? (
        <p>
          <span>Start:</span>
          {modalCtx.calRange[0].toDateString()}
          &nbsp; &nbsp;
          <span>End:</span>
          {modalCtx.calRange[1].toDateString()}
        </p>
      ) : (
        <p>
          <span>Default selected date:</span>
          {modalCtx.calRange.toDateString()}
        </p>
      )}
    </div>
  );
}

export default App;
