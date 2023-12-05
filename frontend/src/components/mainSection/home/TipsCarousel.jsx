import React, { useContext,useState } from "react";
import TipsItem from "./TipsItem";
import TipsIndicators from "./TipsIndicators";
import tipsData from "../../jsonData/tipsData";
import { MyContext } from "../../../context/Context";
import "./TipsCarousel.css"

const TipsCarousel = () => {
  // const [activeTip, setActiveTip] = useState(0);

  
  const { state, dispatch } = useContext(MyContext);
  const { activeTip } = state;

  const handleTipClick = (index) => {
    //setActiveTip(index);
    dispatch({ type: "setActiveTip", payload: index });
  };

  const goToPrevTip = () => {
    const newActiveTip = activeTip === 0 ? tipsData.length - 1 : activeTip - 1;
    dispatch({ type: "setActiveTip", payload: newActiveTip });

   /*  if (activeTip === 0) {
      setActiveTip(tipsData.length - 1);
    } else {
      setActiveTip(activeTip - 1);
    } */
  };

  const goToNextTip = () => {
    const newActiveTip = activeTip === tipsData.length - 1 ? 0 : activeTip + 1;
    dispatch({ type: "setActiveTip", payload: newActiveTip });
    /* if (activeTip === tipsData.length - 1) {
      setActiveTip(0);
    } else {
      setActiveTip(activeTip + 1);
    } */
  };

  return (
    <div className="tips-container">
      <div className="tips">
        <div className="carousel slide">
          <div className="carousel-inner">
            {/* Entire navigation structure */}
            <div className="tips-navigation">
              {/* Tips controls */}
              <span className="tip-control prev" onClick={goToPrevTip}>
                {"<"}
              </span>

              {/* Tip circles */}
              <div className="tip-circles">
                {tipsData.map((tip, index) => (
                  <span
                    key={index}
                    onClick={() => handleTipClick(index)}
                    className={`tip-circle ${activeTip === index ? "active" : ""}`}
                  >
                    {activeTip === index ? "●" : "○"}
                  </span>
                ))}
              </div>

              {/* Tips controls */}
              <span className="tip-control next" onClick={goToNextTip}>
                {">"}
              </span>
            </div>

            {/* Display the active tip */}
            <h2> Tips to improve your readings</h2>
            <TipsItem tip={tipsData[activeTip]} />
          </div>
          <TipsIndicators />
        </div>
      </div>
    </div>
  );
};

export default TipsCarousel;