import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="">
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate replace to="/about-us" />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/get-involved/" element={<GetInvolved />} />
        <Route path="/current-events/" element={<CurrentEvents />} />
        <Route path="/contact-us/" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
