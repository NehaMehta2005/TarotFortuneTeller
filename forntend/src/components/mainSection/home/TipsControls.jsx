import React from 'react';

const TipsControls = ({ activeIndex, totalTips, goToPrevTip, goToNextTip }) => {
  const handlePrevClick = () => {
    if (activeIndex > 0) {
      goToPrevTip();
    }
  };

  const handleNextClick = () => {
    if (activeIndex < totalTips - 1) {
      goToNextTip();
    }
  };

  return (
    <>
      <a className="left" href="#tips-carousel" role="button" data-slide="prev" onClick={handlePrevClick}>
        {/* Left control */}
        &lt; {/* Unicode character for left arrow bracket */}
      </a>
      <a className="right" href="#tips-carousel" role="button" data-slide="next" onClick={handleNextClick}>
        {/* Right control */}
        &gt; {/* Unicode character for right arrow bracket */}
      </a>
      <p>Tip {activeIndex + 1} of {totalTips}</p>
    </>
  );
};

export default TipsControls;
