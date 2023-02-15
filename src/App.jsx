import "./App.css";
import { useState } from "react";
import GetInvolved from "./pages/GetInvolved";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurPeople from "./pages/AboutOurPeople";
import Governance from "./pages/AboutGovernance";
import OurServices from "./pages/OurServices";
import CurrentEvents from "./pages/CurrentEvents";
import ContactUs from "./pages/ContactUs";
import StyleGuide from "./pages/StyleGuide";
import tabContext from "./context/tabContext";
import Admin from "./pages/Admin";
import Payment from "./pages/Payment";

function App() {
  const [getInvolvedActiveTab, setGetInvolvedActiveTab] = useState("tab1");
  const [ourServiceActiveTab, setOurServiceActiveTab] = useState("tab1");
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState("");


  return (
    <div className="">
      <tabContext.Provider
        value={{
          getInvolvedActiveTab,
          setGetInvolvedActiveTab,
          ourServiceActiveTab,
          setOurServiceActiveTab,
          ACCESS_TOKEN,
          SET_ACCESS_TOKEN
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/our-people" element={<OurPeople />} />
          <Route path="/about-us/governance" element={<Governance />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/get-involved/" element={<GetInvolved />} />
          <Route path="/current-events/" element={<CurrentEvents />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/styleguide" element={<StyleGuide />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/payment/" element={<Payment />} />
        </Routes>
        <Footer />
      </tabContext.Provider>
    </div>
  );
}

export default App;
