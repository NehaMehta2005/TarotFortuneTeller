import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import AboutTarot from "../header/AboutTarot";
import Terms from "../footer/Terms";
import Privacy from "../footer/Privacy";
import NotFound from "../notfoundPage/notfound";

import ContactUs from "../header/ContactUs";
import BuyCards from "../header/buyCards"


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutTarot" element={<AboutTarot />} />
        <Route path="/yourFortuneTeller" />
        <Route path="/buyCards" element={<BuyCards/>}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
