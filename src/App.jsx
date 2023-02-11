import "./App.css";
import { useState } from "react";
import GetInvolved from "./pages/GetInvolved";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import CurrentEvents from "./pages/CurrentEvents";
import ContactUs from "./pages/ContactUs";
import Calender from "./Components/Calendar";
import tabContext from "./context/tabContext";

function App() {
  const [getInvolvedActiveTab, setGetInvolvedActiveTab] = useState("tab1");
  const [ourServiceActiveTab, setOurServiceActiveTab] = useState("tab1");

  return (
    <div className="">
      <tabContext.Provider
        value={{
          getInvolvedActiveTab,
          setGetInvolvedActiveTab,
          ourServiceActiveTab,
          setOurServiceActiveTab,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/get-involved/" element={<GetInvolved />} />
          <Route path="/current-events/" element={<CurrentEvents />} />
          <Route path="/contact-us/" element={<ContactUs />} />
        </Routes>
        <Footer />
      </tabContext.Provider>
    </div>
  );
}

export default App;
