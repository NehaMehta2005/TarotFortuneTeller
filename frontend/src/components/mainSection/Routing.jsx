import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import AboutTarot from "../header/AboutTarot";
import Terms from "../footer/Terms";
import Privacy from "../footer/Privacy";
import NotFound from "../notfoundPage/notfound";
import ContactUs from "../header/ContactUs";
import BuyCards from "../header/buyCards"
import OurTeam from "../header/OurTeam";
import YourFortuneTeller from "./yourFortuneTeller/YourFortuneTeller";


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abouttarot" element={<AboutTarot />} />
        <Route path="/yourfortuneteller" element={<YourFortuneTeller />}/>
        <Route path="/buycards" element={<BuyCards/>}/>
        <Route path="/ourteam" element={<OurTeam />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
