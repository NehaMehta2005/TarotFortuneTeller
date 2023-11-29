import { Routes, Route } from "react-router-dom";
 
import AboutTarot from "../header/AboutTarot";
import Terms from "../footer/Terms";
import Privacy from "../footer/Privacy";
import NotFound from "../notfoundPage/notfound"


function Routing() {
    

  return (
    <>
      <Routes>
        <Route path="/" /> 
        <Route path="/aboutTarot" element={<AboutTarot />} />
        <Route path="/yourFortuneTeller" />
        <Route path="/buyCards" />
        <Route path="/contactUs" />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
